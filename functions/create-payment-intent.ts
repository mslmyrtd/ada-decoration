const dotenv = require('dotenv')
dotenv.config()
const stripe = require('stripe')(
  'sk_test_51Mc2lBDOj6RJTPLT2LMiWpZoAqU2fDOYLB2d2dodn1E0bvWhTleUBegeLGpClE2Xl1SAHbTYAdH78yhxuP9PVJbr00KI56dQzO'
)
exports.handler = async function (event: any, context: any) {
  const { cart, shipping_fee, total_amount } = JSON.parse(event.body)

  const calculateOrderAmount = () => {
    // Replace this constant with a calculation of the order's amount
    // Calculate the order total on the server to prevent
    // people from directly manipulating the amount on the client
    return shipping_fee + total_amount
  }
  try {
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(),
      currency: 'usd',
    })
    return {
      statusCode: 200,
      body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    }
  }
}
