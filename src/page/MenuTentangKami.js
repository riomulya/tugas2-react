/* eslint-disable no-lone-blocks */
import React, { Component } from "react";

class MenuTentangKami extends Component {
  constructor(props) {
    super(props);
    this.props = {
      tentang:
        "Warung Nusantara Adalah Restoran yang Bernuansa Makanan Nusantara Kami Ada Untuk Membuat Anda Menikmati Makanan Khas dari Nusantara",
    };
  }
  render() {
    return (
      <div>
        <center>
          <p>Tentang Kami</p> {this.props.tentang}
        </center>
      </div>
    );
  }
}

export default MenuTentangKami;
