import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState();
  useEffect(() => {
    fetch("http://localhost:3000/")
      .then((resp) => resp.json())
      .then(function (data) {
        console.log(data);
        setMessage(data.message);
      })
      .catch(function (error) {
        console.log(error);
      });
  });

  return <div className="App">{message}</div>;
}

export default App;
