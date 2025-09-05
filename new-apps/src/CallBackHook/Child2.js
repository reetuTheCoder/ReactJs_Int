import React from "react";

const Child2 = React.memo(({ name }) => {
  console.log("i am Child 2");

  return (
    <div>
      <h1>Child2</h1>
      <p>{name}</p>
    </div>
  );
});

export default Child2;

