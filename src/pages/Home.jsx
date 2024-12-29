import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const Home = () => {
  const cartItems = [
    {
      id: 1,
      name: "Laptop",
      quantity: 1,
      price: 999.99,
      imageUrl: "https://www.czone.com.pk/images/thumbnails-large/copy-copy-copy-copy-58-czone.com.pk-1540-14926-010823103313-1540-17376-221124103029.jpg",
    },
    {
      id: 2,
      name: "Wireless Mouse",
      quantity: 2,
      price: 25.5,
      imageUrl: "https://img.drz.lazcdn.com/static/pk/p/8743024fa6c2a7a62f8a2d85ca0d4b46.jpg_720x720q80.jpg_.webp",
    },
    {
      id: 3,
      name: "Keyboard",
      quantity: 1,
      price: 49.99,
      imageUrl: "https://m.media-amazon.com/images/I/71pHnBCAqmL._AC_SL1500_.jpg",
    },
    {
      id: 4,
      name: "USB-C Cable",
      quantity: 3,
      price: 15.0,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtxTPupf7AVBxF3npNjCoPMdx_Z7loGUPksw&s",
    },
    {
      id: 5,
      name: "Headphones",
      quantity: 1,
      price: 199.99,
      imageUrl: "https://www.smartworldgadgets.pk/cdn/shop/products/airpods_mgyh3_price_in_pakistan_grande.webp?v=1713608594",
    },
    {
      id: 6,
      name: "Airpods Pro",
      quantity: 1,
      price: 899.99,
      imageUrl: "https://appleman.pk/cdn/shop/products/Airpods-Pro-1.jpg?v=1667316352",
    }
  ];

  const [item, setItem] = useState([...cartItems]);

  const payNow = async () => {
    const stripe = await loadStripe(
      "pk_test_51QbHr64CCuK7SARPoRoPtxiUftpbAUzElEAdF6ieQID3g4LKgPYNvOWJIPvNsq0fvfgM4qBKJ8OofQCN3p1lQYIw009bWkdWaI"
    );

    const response = await axios.post("http://localhost:3000/api/v1/checkout", {
      products: item,
    });

    console.log(response.data.id);

    const result = stripe.redirectToCheckout({
      sessionId: response.data.id,
    });
  };

  const increaseQuantity = (index) => {
    item[index].quantity += 1;
    setItem([...item]);
  };
  const decreaseQuantity = (index) => {
    item[index].quantity -= 1;
    setItem([...item]);
  };
  const deleteItem = (index) => {
    item.splice(index, 1);
    setItem([...item]);
  };

  return (
    <>
      <h1 className="text-4xl font-bold text-center my-10 text-purple-600">Cart Items</h1>

      {/* Check if the cart is empty */}
      {item.length === 0 ? (
        <p className="text-xl font-semibold text-center text-gray-600">Cart is empty</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          {item.map((item, index) => (
            <div
              className="bg-white shadow-xl rounded-lg overflow-hidden flex flex-col items-center p-6 transition-transform transform hover:scale-105"
              key={item.id}
            >
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-full h-[220px] object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold text-center mb-2">{item.name}</h2>
              <div className="flex justify-between items-center w-full mb-4">
                <button
                  className="bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center transition-all hover:bg-red-600"
                  onClick={() => decreaseQuantity(index)}
                >
                  <span className="text-xl font-bold">-</span>
                </button>
                <p>Quantity: {item.quantity}</p>
                <button
                  className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center transition-all hover:bg-green-600"
                  onClick={() => increaseQuantity(index)}
                >
                  <span className="text-xl font-bold">+</span>
                </button>
              </div>
              <p className="text-lg font-medium text-center mb-4">
                Price: ${item.price * item.quantity}
              </p>
              <button
                className="bg-red-600 text-white w-full py-2 rounded-lg mt-4 hover:bg-red-700"
                onClick={() => deleteItem(index)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="w-full text-center mt-10">
        <button
          className="bg-gradient-to-r from-blue-500 to-green-500 text-white py-4 px-10 rounded-full text-xl transform transition-all hover:scale-105"
          onClick={payNow}
        >
          Pay Now
        </button>
      </div>
    </>
  );
};

export default Home;
