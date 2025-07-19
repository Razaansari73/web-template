import "./OrderForm.css";

function OrderForm({ item, onClose, onSubmit }) {
  return (
    <div className="order-overlay">
      <div className="order-popup">
        <h2> Order: {item.name} </h2>{" "}
        <form onSubmit={onSubmit}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="tel" name="phone" placeholder="Phone Number" required />
          <input
            type="number"
            name="qty"
            placeholder="Quantity"
            min="1"
            required
          />
          <button type="submit"> Place Order </button>{" "}
          <button className="close-btn" type="button" onClick={onClose}>
            {" "}
            Cancel{" "}
          </button>{" "}
        </form>{" "}
      </div>{" "}
    </div>
  );
}

export default OrderForm;
