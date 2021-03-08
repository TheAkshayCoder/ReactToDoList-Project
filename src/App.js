import "./styles.css";
import { useState } from "react";
import TodoList from "./ToDolist";

export default function App() {
  const [entry, ChangeEntry] = useState("");
  const [List, ChangeList] = useState([]);
  const Change = (event) => {
    ChangeEntry(event.target.value);
  };

  const onSubmits = () => {
    ChangeList((oldList) => {
      return [...oldList, entry];
    });
    ChangeEntry("");
  };

  const Delete = (id) => {
    console.log("delete!");
    ChangeList((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1>Todo list</h1>
        <br />
        <input
          type="text"
          value={entry}
          placeholder="Add the Items"
          onChange={Change}
        />
        <button onClick={onSubmits}>+</button>
        <ol>
          {List.map((Items, index) => {
            return (
              <>
                <TodoList
                  text={Items}
                  id={index}
                  key={index}
                  onSelect={Delete}
                />
              </>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
