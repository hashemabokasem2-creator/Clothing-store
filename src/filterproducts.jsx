import react, { useState } from "react";
import "./filterproducts.css";
import { BsStarFill } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import imageone from "./assets/product-img-sm-1.jpg";
import imagetwo from "./assets/product-img-sm-2.jpg";
import imagethree from "./assets/product-img-sm-3.jpg";
import imagefour from "./assets/product-img-sm-4.jpg";
import imagefive from "./assets/product-img-sm-5.jpg";
import imagesix from "./assets/product-img-sm-6.jpg";
import imageseven from "./assets/product-img-sm-7.jpg";
import imageeight from "./assets/product-img-sm-8.jpg";
import imagenine from "./assets/product-img-sm-9.jpg";
import imageten from "./assets/product-img-sm-10.jpg";
import imageeleven from "./assets/product-img-sm-11.jpg";
import imagetwelve from "./assets/product-img-sm-12.jpg";

function Filterproducts() {
  const [activeTab, setActiveTab] = useState("All Products");

  const productsData = [
    {
      id: 1,
      title: "Orange Airsuit",
      price: "$99.00",
      category: "Best Selling",
      subcategory: "FASHION BAG",
      image: imageone,
    },

    {
      id: 2,
      title: "Orange Airsuit",
      price: "$99.00",
      category: "On Selling",
      subcategory: "FASHION BAG",
      image: imagetwo,
    },

    {
      id: 3,
      title: "Orange Airsuit",
      price: "$99.00",
      category: "Top Rating",
      subcategory: "FASHION BAG",
      image: imagethree,
    },

    {
      id: 4,
      title: "Orange Airsuit",
      price: "$99.00",
      category: "Top Rating",
      subcategory: "FASHION BAG",
      image: imagefour,
    },

    {
      id: 5,
      title: "Orange Airsuit",
      price: "$99.00",
      category: "On Selling",
      subcategory: "FASHION BAG",
      image: imagefive,
    },

    {
      id: 6,
      title: "Orange Airsuit",
      price: "$99.00",
      category: "Best Selling",
      subcategory: "FASHION BAG",
      image: imagesix,
    },

    {
      id: 7,
      title: "Orange Airsuit",
      price: "$99.00",
      category: "On Selling",
      subcategory: "FASHION BAG",
      image: imageseven,
    },

    {
      id: 8,
      title: "Orange Airsuit",
      price: "$99.00",
      category: "Top Rating",
      subcategory: "FASHION BAG",
      image: imageeight,
    },

    {
      id: 9,
      title: "Orange Airsuit",
      price: "$99.00",
      category: "On Selling",
      subcategory: "FASHION BAG",
      image: imagenine,
    },

    {
      id: 10,
      title: "Orange Airsuit",
      price: "$99.00",
      category: "Best Selling",
      subcategory: "FASHION BAG",
      image: imageten,
    },

    {
      id: 11,
      title: "Orange Airsuit",
      price: "$99.00",
      category: "Best Selling",
      subcategory: "FASHION BAG",
      image: imageeleven,
    },

    {
      id: 12,
      title: "Orange Airsuit",
      price: "$99.00",
      category: "On Selling",
      subcategory: "FASHION BAG",
      image: imagetwelve,
    },
  ];

  const filteredProducts = productsData.filter((product) => {
    if (activeTab === "All Products" || product.category === activeTab) {
      return true;
    }

    return false;
  });

  const filterOptions = [
    "All Products",
    "Best Selling",
    "On Selling",
    "Top Rating",
  ];

  return (
    <>
      <section
        className="m-5 rounded-5 p-5"
        style={{ backgroundColor: "#f5f5f5" }}
      >
        <div className="container">
          <div className="row align-items-end g-3 mb-4">
            <div className="col-12 col-lg-7 text-center text-lg-start">
              <span className="text-uppercase fw-semibold tracking-wide filter-subtitle d-block mb-1">
                MOST SELLING ITEMS
              </span>
              <h2 className="fw-bold text-dark mb-0 filter-title">
                Top selling Categories This Week
              </h2>
            </div>
            <div className="col-12 col-lg-5">
              <div className="d-flex flex-wrap justify-content-center justify-content-lg-end gap-2">
                {filterOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setActiveTab(option)}
                    className={`btn filter-btn rounded-pill px-3 py-2 fw-semibold border-0 ${
                      activeTab === option ? "active" : ""
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <AnimatePresence>
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="col-12 col-md-6 col-xl-3 mt-4"
                >
                  <div className="card product-card border-0 shadow-sm rounded-4 p-2">
                    <div className="d-flex align-items-center gap-3">
                      <div className="product-img-wrapper-two flex-shrink-0 rounded-3 overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="product-img-two w-100 h-100 object-fit-cover"
                        />
                      </div>
                      <div className="product-info overflow-hidden">
                        <span className="product-price fw-bold d-block mb-1">
                          {product.price}
                        </span>
                        <h6 className="product-title fw-bold text-dark mb-1 text-truncate">
                          {product.title}
                        </h6>
                        <span className="product-category text-muted text-uppercase d-block mb-1">
                          {product.category}
                        </span>
                        <div className="product-rating d-flex align-items-center gap-1">
                          <BsStarFill className="star-icon" />
                          <BsStarFill className="star-icon" />
                          <BsStarFill className="star-icon" />
                          <BsStarFill className="star-icon" />
                          <BsStarFill className="star-icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
}

export default Filterproducts;
