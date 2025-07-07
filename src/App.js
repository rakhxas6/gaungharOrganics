import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./App.css";

// Components
import DetailsPage from "./components/DetailsPage/DetailsPage.jsx";
import LoginForm from "./components/LogIn/LoginForm.jsx";
import Blog from "./components/blog/Blog.jsx";
import Contact from "./components/contact/contact";
import Community from "./components/footer/community";
import FAQ from "./components/footer/faq";
import Footer from "./components/footer/footer";
import Testimony from "./components/footer/testimony";
import Header from "./components/header/header";
import ErrorPage from "./components/home/ErrorPage.jsx";
import Home from "./components/home/home";
import OurStory from "./components/ourStory/OurStory.jsx";
import BestSellers from "./components/ourStory/bestSellers";
import Partners from "./components/ourStory/partners";
import PaymentSuccess from "./components/payment/PaymentSuccess";
import Cart from "./components/shop/Cart.jsx";
import Shop from "./components/shop/Shop.jsx";
import OurValues from "./components/ourStory/OurValues.jsx";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col overflow-x-hidden">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <Partners />
                  <BestSellers />
                  <Testimony />
                  <FAQ />
                  <Community />
                </>
              }
            />
            <Route path="/account" element={<LoginForm />} />
            <Route path="/paymentsuccess" element={<PaymentSuccess />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/our-values" element={<OurValues />} />
            <Route
              path="/shop/organic-cold-pressed-mustard-oil"
              element={<DetailsPage />}
            />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
