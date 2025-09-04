import React,  { useEffect, useState } from "react";

export const CreateCounter = () => {
  const [counter, setCounter] = useState(0);
  const [users, setUsers] = useState([]);

  //Case1 - it is the first case when dom Update
  //   No dependency array → runs after every render.
  useEffect(() => {
    console.log("it will call on the each click of increase"); // it is not link with count but still it is calling on the each click
  });

  //   Empty array ([]) → runs only once after the first render (like componentDidMount).
  useEffect(() => {
    console.log("it will run when dom load");
  }, []);

  //   With dependencies ([counter]) → runs whenever counter changes.
  useEffect(() => {
    console.log("it will run because state has changed");
  }, [counter]);

  // Case2 - here we are feche data from api

  // if i will not pass dependency in the below useEffect, it will call continuously
  // if i pass enmpty [] as a dependancey it will run when just DOM load.
  // if i want to run / call blowe useEffect whenever counter state update so we need to pass counter as a dependency in the empty[] like [counter]
  useEffect(() => {
    console.log("it will run once");

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h1>Learn use effect here</h1>

      <h3>Count:{counter}</h3>

      <button onClick={() => setCounter(counter + 1)}>Increase</button>

      <br />
      <br />
      <br />

      <h2>Users List</h2>
      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>

    </div>
  );
};


  //Case3 
export function Timer() {
  return (
    <div>
      <h1>Timer</h1>
    </div>
  );
}




  //Case4 - 
export function LocalStorageExample() {
  const [name, setName] = useState(() => {
    // Load from localStorage on first render
    return localStorage.getItem("name") || "";
  });

  useEffect(() => {

    console.log("hello");
    
    // Save to localStorage whenever `name` changes
    // if i will not pass any dependency in the useEffect, i wlll be able to updata local store and it will run all time when ever any component update
    // you i will pass empty arry it will not run each time if any comp update 
    // if i will pass dependency in the array will update in the loacl storage // and run also

    localStorage.setItem("name", name);
  },[name]);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Saved Name: {name}</p>
    </div>
  );
}



// Case 5 - Event handle and WebSockets
export function WindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
        console.log("window resize");
        
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    return () => {
        console.log("window unmount");
        
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <h2>
      Window Size: {size.width} x {size.height}
    </h2>
  );
}
