import React from "react";

const Child1 = React.memo(({ onClick }) => {
  console.log("I am Child 1");
  return <div onClick={onClick}>Child1</div>;
});


export default Child1;
