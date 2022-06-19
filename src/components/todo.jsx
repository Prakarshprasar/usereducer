import React, { useReducer, useState } from "react";

const initialState = { arr: [] };
let reducer = (state, action) => {
  switch (action.type) {
    case "addTodo":
      return {
        arr: [
          ...state.arr,
          { value: action.value, isCompleted: false, id: action.count },
        ],
      };

    case "deleteTodo":
      return { arr: state.arr.filter((arr, i) => i !== action.i) };

    default:
      return state;
  }
};
const Todo = () => {
  const [value, setvalue] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setvalue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          {
            dispatch({ type: "addTodo", value });
          }
          setvalue("");
          
          console.log(state);
        }}
      >
        Add
      </button>
      <div>
        {state.arr.map((elem, i) => (
          <div key={i}>
            <p>{elem.value}</p>
            <button onClick={() => dispatch({ type: "deleteTodo", i })}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
