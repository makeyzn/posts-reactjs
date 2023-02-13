import React, { useState } from "react";
import ClassCounter from "./components/ClassCounter";

function App() {
  const [likes, setLikes] = useState(1);
  const [value, setValue] = useState('input');




  return (
    <div className="App">
      <ClassCounter />
    </div>
  );
}

export default App;
