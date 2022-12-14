import React from "react";
import {
  FaTwitterSquare,
  FaInstagramSquare,
  FaFacebookSquare,
} from "react-icons/fa";

const Footer = (props) => {
  return (
    <div className="bg-light shadow-lg py-5">
      <div className="d-flex flex-row justify-content-evenly">
        <div>
          <div className="fs-5 fw-bold mb-2">Shopee | Carten</div>
          <div>Tentang Carten</div>
          <div>Karir</div>
          <div>Blog</div>
        </div>
        <div class="d-none d-lg-block">
          <div className="fs-5 fw-bold mb-2">Jual</div>
          <div>Pusat Edukasi Seller</div>
          <div>Mitra Toppers</div>
          <div>Daftar Official Store</div>
        </div>
        <div class="d-none d-lg-block">
          <div className="fs-5 fw-bold mb-2">Beli</div>
          <div>Tagihan & Top Up</div>
          <div>Tukar Tambah Handphone</div>
          <div>Shopee Carten COD</div>
        </div>
        <div class="d-none d-lg-block">
          <div className="fs-5 fw-bold mb-2">Social</div>
          <div className="d-flex flex-row gap-1">
            <FaTwitterSquare size={28} color="darkorange" />
            <FaInstagramSquare size={28} color="darkorange" />
            <FaFacebookSquare size={28} color="darkorange" />
          </div>
        </div>
      </div>
      <div className="text-muted text-center mt-3">
        © 2022 ShopeeEngineer. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
