import "./Menu.css";
import OrderForm from "../components/OrderForm";
import { useState } from "react";

function Menu() {
  const menuItems = [
    {
      name: "Margherita Pizza",
      image: process.env.PUBLIC_URL + "/images/pizza.jpg",
      price: "₹299",
    },
    {
      name: "Veg Burger",
      image: process.env.PUBLIC_URL + "/images/burger.jpg",
      price: "₹149",
    },
    {
      name: "Pasta Alfredo",
      image: process.env.PUBLIC_URL + "/images/pasta.jpg",
      price: "₹199",
    },
  ];

  const [selectedItem, setSelectedItem] = useState(null);

  const handleOrderClick = (item) => {
    setSelectedItem(item);
  };

  const handleClose = () => {
    setSelectedItem(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const orderData = {
      item: selectedItem.name,
      name: e.target.name.value,
      phone: e.target.phone.value,
      qty: e.target.qty.value,
    };
    localStorage.setItem("order", JSON.stringify(orderData));
    alert("Order placed successfully!");
    handleClose();
  };

  return (
    <div className="menu-page">
      <h1> Our Delicious Menu </h1>{" "}
      <div className="menu-grid">
        {" "}
        {menuItems.map((item, index) => (
          <div className="menu-card" key={index}>
            <img src={item.image} alt={item.name} /> <h3> {item.name} </h3>{" "}
            <p> {item.price} </p>{" "}
            <button
              className="order-btn"
              onClick={() => handleOrderClick(item)}
            >
              Order Now{" "}
            </button>{" "}
          </div>
        ))}{" "}
      </div>{" "}
      {selectedItem && (
        <OrderForm
          item={selectedItem}
          onClose={handleClose}
          onSubmit={handleSubmit}
        />
      )}{" "}
    </div>
  );
}

export default Menu;
