export const formatPrice = (number: number) => {
    const newNumber = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(number / 100)
    return newNumber
}

export const getUniqueValues = () => { }
