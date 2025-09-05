import { useState, useEffect } from "react";

const PostRequestCall = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const postData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ title: "foo", body: "Reetu", userId: 1 }),
        });

        if (!res.ok) throw new Error("Network response was not ok");

        const data = await res.json();
        setResponse(data); // store response in state
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    postData();
  }, []); // empty dependency array => runs once on mount

  return (
    <div>
      <h1>POST Request Result</h1>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {response && (
        <div>
          <h2>Response:</h2>
          <p>Title: {response.title}</p>
          <p>Name: {response.body}</p>
        </div>
      )}
    </div>
  );
};

export default PostRequestCall;
