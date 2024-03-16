import "./App.css";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import ProductsPage from "./components/ProductsPage";
import Footer from "./components/Footer";
import {createContext, useState} from "react";

export const CartContext = createContext();

function App() {
  const [cart, setCart] = useState(0);
  const stateProvider = {cart, setCart};

  return (
    <CartContext.Provider value={stateProvider} className="App">
      <Navbar />
      <Landing />
      <ProductsPage />
      <Footer />
    </CartContext.Provider>
  );
}

export default App;
