import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer, Navbar, Sidebar } from './components';
import { About, Cart, Error, Home, Product, SingleProduct } from './pages';


function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Fragment>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Product />} >
            <Route path=":id" element={<SingleProduct />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </Fragment>
      <Footer />
    </Router>
  );
}

export default App;
