import { useState } from "react";

const SelectAllListItems = () => {
  const items = ["Apple", "Banana", "Orange", "Mango"];
  const [selectedItem, setSelectedItem] = useState([]);

  const handleToggle = (item) => {
    if (selectedItem.includes(item)) {
      setSelectedItem(selectedItem.filter((i) => i !== item));
    } else {
      setSelectedItem([...selectedItem, item]);
    }
  };

  const handleSelectAll = () => {
    if (selectedItem.length === items.length) {
      setSelectedItem([]);
    } else {
      setSelectedItem(items);
    }
  };
  return (
    <div>
      <h3>Select an Item:</h3>
      <ul>
        <div>
          <div>
            {items.map((item, id) => (
              <li key={id}>
                <label style={{ cursor: "pointer" }}>
                  <input type="checkbox" checked={selectedItem.includes(item)} onChange={() => handleToggle(item)}/>
                  {item}
                </label>
              </li>
            ))}
          </div>
          <button onClick={handleSelectAll}>Select All Itmes</button>   
        </div>
      </ul>
    </div>
  );
};

export default SelectAllListItems;
