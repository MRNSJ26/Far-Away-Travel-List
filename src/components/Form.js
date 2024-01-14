import { useState } from "react";

export default function Form({ onAddItems }) {
  //setting the state of the element to react
  const [description, setDiscription] = useState("");
  const [quantity, setquantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);
    onAddItems(newItem);

    setDiscription("");
    setquantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip 😍</h3>
      <select
        value={quantity}
        onChange={(e) => setquantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      {/*setting the state of the element to react - by adding value*/}
      <input
        type="text"
        placeholder="Item..."
        value={description}
        // In here we are allowing the change of the value to be displayed and controlled
        onChange={(e) => setDiscription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
