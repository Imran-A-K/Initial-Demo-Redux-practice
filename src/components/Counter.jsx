"use client";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
} from "@/redux/features/CounterSlice/counterSlice";
function Counter() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <button
        className="bg-teal-400 px-2 py-1 rounded"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <div>
        <h1>{count}</h1>
      </div>
      <button
        className="bg-red-400 px-2 py-1 rounded"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  );
}

export default Counter;
