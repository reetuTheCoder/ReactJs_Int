import React from "react";

const Child1 = React.memo(() => {
  console.log("I am Child 1");
  return <div>Child1</div>;
});

export default Child1;
