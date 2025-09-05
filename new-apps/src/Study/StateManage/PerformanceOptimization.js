import React, { useMemo, useState } from "react";

const PerformanceOptimization = () => {
  const [counter, setCounter] = useState(0);
  const [items, setItems] = useState(5);

  const handleIncrease = () => {
    console.log("you cliecked increse button");
    setCounter(counter + 1);
  };
  const handleClick = () => {
    console.log("you cliecked on item button");
    setItems(items * 2);
  };

  // what is happening here below OtherFun calling again and again when ever any state updates like counter or items.
  // how can we fix it, we have to use useMemo()  see otherFunResult()

  //   const OtherFun = () => {
  //     console.log("other fuc called");
  //   };

  // now otherFun() will not render when state will change pass epmty []
  // if you want to render otherFun()  when items state update otherFun should call. and  items pass  in the dependancy like - [items]
  // most important when you use useMemo() dont forgot to retun()
  const otherFun = useMemo(() => {
    console.log("other func called");
    return items * 2;
  }, [items]);

  return (
    <div>
      <h1>Performance Optimization</h1>
      <div>
        <h3>Counter: {counter}</h3>
        <button onClick={handleIncrease}>Increase</button>
      </div>

      <div>
        {/* <h2>{OtherFun()}</h2> */}
        <h2>{otherFun}</h2>
      </div>
      <div>
        <h3>Items: {items}</h3>
        <button onClick={handleClick}>Click Me</button>
      </div>
    </div>
  );
};

export default PerformanceOptimization;




export const DerivedState = () => {
  const [newCount, setNewCount] = useState(10);

  const handleDriveIncrease = () => {
    console.log("new count increase");
    setNewCount(newCount + 1);
  };
  const [cart, setCart] = useState([
    { name: "Apple", price: 20, qty: 2 },
    { name: "Mango", price: 50, qty: 1 },
  ]);

  const totalPrice = useMemo(() => {
    console.log("Calculating total...");
    return cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  }, [cart]);

  return (
    <div>
      <h2>Derived State</h2>
      <p>Total Cart Price: {totalPrice}</p>
      <strong>suggestion</strong>{" "}
      <span>Do you want add Banana also just click on the button</span>
      <button
        onClick={() =>
          setCart([...cart, { name: "Banana", price: 10, qty: 1 }])
        }
      >
        Add Banana
      </button>
      <br />
      <br />
      <br />
      <div>
        <h3>New Count : {newCount}</h3>
        <button onClick={handleDriveIncrease}>Increase</button>
      </div>
    </div>
  );
};
