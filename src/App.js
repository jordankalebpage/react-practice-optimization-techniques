import React, { useCallback, useMemo, useState } from "react";

import "./App.css";
import Button from "./components/UI/Button/Button";
import DemoList from "./components/Demo/DemoList";

function App() {
  const [listTitle, setListTitle] = useState("My List");

  console.log("App running");

  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);

  return (
    <div className="app">
      <DemoList title={listTitle} items={useMemo(() => [5, 3, 1, 10, 9], [])} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
    </div>
  );
}

export default App;
