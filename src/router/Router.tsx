import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer, Navbar, Sidebar } from '../components';
import { About, AuthWrapper, Cart, CheckoutPage, Error, Home, Login, PrivateRoute, Product, Signup, SingleProduct } from '../pages';

const AppRouter = () => {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        <Fragment>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products" element={<Product />} />
            <Route path="/products/:id" element={<SingleProduct />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path='checkout'
              element={
                <PrivateRoute>
                  <CheckoutPage />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<Error />} />
          </Routes>
        </Fragment>
        <Footer />
      </Router>
    </AuthWrapper>

  );
}

export default AppRouter;
