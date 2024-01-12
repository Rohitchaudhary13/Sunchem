import React, { useState } from "react";
import { BsChatQuoteFill } from "react-icons/bs";
import { CgCloseO } from "react-icons/cg";



const ProductChat = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [isFormVisible, setFormVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedCategory("");
    setSelectedProducts([]);
    setFormVisible(false);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setSelectedProducts([]);
    setFormVisible(false);
  };

  const handleProductClick = (productId) => {
    const isSelected = selectedProducts.includes(productId);
    if (isSelected) {
      setSelectedProducts((prevSelected) =>
        prevSelected.filter((id) => id !== productId)
      );
    } else {
      setSelectedProducts((prevSelected) => [...prevSelected, productId]);
    }
    setFormVisible(!isSelected || selectedProducts.length > 1);
  };

  // Define different sets of products for each collection
  const productData = {
    Collection1: [
      { id: 1, name: "Product 1A" },
      { id: 2, name: "Product 2A" },
      // Add more products for Collection1 as needed
    ],
    Collection2: [
      { id: 1, name: "Product 1B" },
      { id: 2, name: "Product 2B" },
      // Add more products for Collection2 as needed
    ],
    // Add more collections as needed
  };

  const categories = [
    { id: 1, name: "Collection1" },
    { id: 2, name: "Collection2" },
    // Add more collections as needed
  ];

  return (
    <>
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={handleOpenModal}
          className="px-6 py-4 bg-primary text-dark hover:bg-dark hover:scale-105 hover:text-primary transition-all duration-300 ease-in-out flex gap-2 items-center"
        >
          <BsChatQuoteFill size={30} /> <p className="hidden md:block">Get a Quote</p>
        </button>
      </div>
      <div
        className={`z-[99] fixed top-0 left-0 w-full h-full bg-opacity-50 bg-gray-800 flex items-center justify-center ${
          isModalVisible ? "" : "hidden"
        }`}
      >
        <div className="bg-white p-8 max-w-md rounded-md">
          <div className="flex justify-between items-center">
          <h2 className="text-center text-2xl font-bold">
            Product Inquiry
          </h2>
          <button className="-mt-2" onClick={handleCloseModal}>
            <CgCloseO size={30} />
          </button>
          </div>
          {/* Chatbot message */}
          <div className="bg-primary p-4 my-4 rounded-l-md">
            Select Collection & the respective products you want to inquire
            about:
          </div>

          {/* Collection selection */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">
              Select Collection:
            </label>
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="w-full cursor-pointer px-4 py-2 border rounded-md focus:outline-none focus:border-primary"
            >
              <option value="" disabled>
                Select Collection
              </option>
              {categories.map((collection) => (
                <option key={collection.id} value={collection.name}>
                  {collection.name}
                </option>
              ))}
            </select>
          </div>

          {/* Product selection */}
          {selectedCategory !== "" && (
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">
                Select Product(s):
              </label>
              <div className="flex flex-wrap gap-2">
                {productData[selectedCategory].map((product) => (
                  <div
                    key={product.id}
                    onClick={() => handleProductClick(product.id)}
                    className={`cursor-pointer p-2 border rounded-md ${
                      selectedProducts.includes(product.id)
                        ? "bg-primary"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {product.name}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Name, Email, Phone inputs */}
          {selectedCategory !== "" &&
            selectedProducts.length > 0 &&
            isFormVisible && (
              <>
                <p className="font-semibold text-lg mb-2">Submit Details:</p>

                <div className="flex items-center mb-2">
                  <label className="w-20 text-sm font-semibold mr-2">
                    Name:
                  </label>
                  <input
                    type="text"
                    className="flex-grow px-2 py-1 border rounded-md focus:outline-none focus:border-primary"
                  />
                </div>

                <div className="flex items-center mb-2">
                  <label className="w-20 text-sm font-semibold mr-2">
                    Email:
                  </label>
                  <input
                    type="email"
                    className="flex-grow px-2 py-1 border rounded-md focus:outline-none focus:border-primary"
                  />
                </div>

                <div className="flex items-center mb-2">
                  <label className="w-20 text-sm font-semibold mr-2">
                    Phone:
                  </label>
                  <input
                    type="tel"
                    className="flex-grow px-2 py-1 border rounded-md focus:outline-none focus:border-primary"
                  />
                </div>
              </>
            )}

          {/* Submit and Close buttons side by side */}
          <div className="flex justify-center gap-4 mt-4">
            {/* Submit button */}
            <button
              //   onClick={handleSubmit}
              className="px-4 py-2 bg-green-700 text-white rounded-md  transition-all duration-300 ease-in-out"
            >
              Submit
            </button>
            {/* Close Modal button */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductChat;
