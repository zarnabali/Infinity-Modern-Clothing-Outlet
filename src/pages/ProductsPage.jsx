import React, { useState } from "react";
import Header from "../components/header";
import MobileHeader from "../components/header_mobile";
import Footer from "../components/Footer/Footer";

const products = [
  {
    id: 1,
    name: "Reversible Sheepskin Jacket",
    description: "A premium reversible jacket for stylish comfort.",
    price: "100.50$",
    images: ["/assets/product1.png", "/path-to/other-image.png"], // Replace with actual paths
  },
  {
    id: 2,
    name: "Stretch Slim-fit Suit",
    description: "A slim-fit suit made with stretchable fabric.",
    price: "169.99$",
    images: ["/assets/product4.png", "/path-to/other-image.png"],
  },
  {
    id: 3,
    name: "Stretch Slim-fit Suit",
    description: "A slim-fit suit made with stretchable fabric.",
    price: "169.99$",
    images: ["/assets/product2.png", "/path-to/other-image.png"],
  },
  {
    id: 4,
    name: "Stretch Slim-fit Suit",
    description: "A slim-fit suit made with stretchable fabric.",
    price: "169.99$",
    images: ["/assets/product3.png", "/path-to/other-image.png"],
  },

  {
    id: 5,
    name: "Reversible Sheepskin Jacket",
    description: "A premium reversible jacket for stylish comfort.",
    price: "100.50$",
    images: ["/assets/product5.png", "/path-to/other-image.png"], // Replace with actual paths
  },
  {
    id: 6,
    name: "Stretch Slim-fit Suit",
    description: "A slim-fit suit made with stretchable fabric.",
    price: "169.99$",
    images: ["/assets/product6.png", "/path-to/other-image.png"],
  },
  {
    id: 7,
    name: "Stretch Slim-fit Suit",
    description: "A slim-fit suit made with stretchable fabric.",
    price: "169.99$",
    images: ["/assets/product7.png", "/path-to/other-image.png"],
  },
  {
    id: 8,
    name: "Stretch Slim-fit Suit",
    description: "A slim-fit suit made with stretchable fabric.",
    price: "169.99$",
    images: ["/assets/product8.png", "/path-to/other-image.png"],
  },

  {
    id: 9,
    name: "Reversible Sheepskin Jacket",
    description: "A premium reversible jacket for stylish comfort.",
    price: "100.50$",
    images: ["/assets/product1.png", "/path-to/other-image.png"], // Replace with actual paths
  },
  {
    id: 10,
    name: "Stretch Slim-fit Suit",
    description: "A slim-fit suit made with stretchable fabric.",
    price: "169.99$",
    images: ["/assets/product4.png", "/path-to/other-image.png"],
  },
  {
    id: 11,
    name: "Stretch Slim-fit Suit",
    description: "A slim-fit suit made with stretchable fabric.",
    price: "169.99$",
    images: ["/assets/product2.png", "/path-to/other-image.png"],
  },
  {
    id:12,
    name: "Stretch Slim-fit Suit",
    description: "A slim-fit suit made with stretchable fabric.",
    price: "169.99$",
    images: ["/assets/product3.png", "/path-to/other-image.png"],
  },
  
  // Add more products here
];

const ProductCard = ({ product }) => (
  <div className="bg-white flex flex-col rounded-md shadow-lg overflow-hidden w-full sm:w-[100%] h-full transition-transform hover:scale-105">
    <img
      src={product.images[0]}
      alt={product.name}
      className="h-4/5 w-full object-cover"
    />
    <div className="p-4 flex flex-col justify-between h-full">
      <h2 className="font-arimo font-bold text-lg">{product.name}</h2>
      <p className="text-sm text-gray-500">{product.description}</p>
      <p className="text-xl font-semibold text-black mt-2">{product.price}</p>
    </div>
  </div>
);

const ProductsPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Headers */}
      <div className="hidden lg:block">
        <Header />
      </div>
      <div className="block lg:hidden">
        <MobileHeader toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      </div>

      {/* Filters */}
      <div className="max-w-screen-xl mx-auto p-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="flex space-x-6 text-lg font-arimo">
            <span className="cursor-pointer underline"    onClick={() => (window.location.href = "/menspage")}>Mens</span>
            <span className="cursor-pointer"   onClick={() => (window.location.href = "/women")}>Womens</span>
          </div>
          <div className="mt-4 lg:mt-0">
            <h1 className="text-2xl font-arimo font-bold text-center">
              Suits
            </h1>
          </div>
          <div className="mt-4 lg:mt-0 flex items-center justify-center">
            <label className="font-arimo pr-2">Price Range</label>
            <input
              type="range"
              className="w-full lg:w-[200px] mt-1"
              min="0"
              max="300"
            />
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-screen-xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProductsPage;
