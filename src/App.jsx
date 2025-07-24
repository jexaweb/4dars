import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Cart />
      <Footer />
    </div>
  );
}

export default App;
