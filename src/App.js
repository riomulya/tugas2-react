import React, { Component } from "react";
import MenuKontak from "./page/MenuKontak";
import MenuProduct from "./page/MenuProduct";
import MenuTentangKami from "./page/MenuTentangKami";
import MenuUtama from "./page/MenuUtama";
import Header from "./page/Header";
import Footer from "./page/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MenuUtama />
        <MenuProduct />
        <MenuKontak />
        <MenuTentangKami />
        <Footer />
      </div>
    );
  }
}

export default App;
