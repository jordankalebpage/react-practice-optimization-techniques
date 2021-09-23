import React, { useMemo } from "react";

const DemoList = (props) => {
  const sortedList = useMemo(() => {
    return props.items.sort((a, b) => a - b);
  }, [props.items]);
  console.log("DemoList running");

  return (
    <div>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(DemoList);
