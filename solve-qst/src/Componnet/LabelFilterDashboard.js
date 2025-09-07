import { useState } from "react";

const data = [
  { id: 1, name: "Alpha", labels: ["Urgent", "Frontend"] },
  { id: 2, name: " Beta", labels: ["Backend"] },
  { id: 3, name: " Gamma", labels: ["Frontend", "Low Priority"] },
  { id: 4, name: " Delta", labels: ["Urgent", "Backend"] },
];

const uniqueLabels = [...new Set(data.flatMap((item) => item.labels))];
// console.log("uniqueLabels", uniqueLabels);

const LabelFilterDashboard = () => {
  const [selectedLabel, setSelectedLabel] = useState("");

  const handleBtnClick = (label) => {
    // console.log("button clicked", label);
    setSelectedLabel(label === selectedLabel ? "" : label);
  };

  const filteredData = selectedLabel
    ? data.filter((item) => item.labels.includes(selectedLabel))
    : data;

  
  console.log("filteredData", filteredData);

  return (
    <div>
      <h1>LabelFilterDashboard</h1>

      {uniqueLabels.map((label) => (
        <button onClick={() => handleBtnClick(label)}>{label}</button>
      ))}

      {filteredData.length > 0 ? (
        filteredData.map((item) => (
          <div
            key={item.id}
            style={{
              padding: "10px",
              marginBottom: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          >
            {" "}
              <strong>{item.name}</strong>
              {/* <p>Labels: {item.labels.join(", ")}</p> */}
          </div>
        ))
      ) : (
        <p>No items found</p>
      )}
    </div>
  );
};

export default LabelFilterDashboard;
