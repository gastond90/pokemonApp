import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { orderByAttack } from "../actions";

export function FilterByAttack() {
  const dispatch = useDispatch();
  const [orden, setOrden] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  function handleSortAttack(e) {
    e.preventDefault();
    dispatch(orderByAttack(e.target.value));
    setCurrentPage(1);
    setOrden(e.target.value);
  }

  return (
    <div className="content-select">
      <select
        onChange={(e) => handleSortAttack(e)}
        id="small"
        className="block p-2 mb-6 text-sm text-gray-900 font-bold bg-indigo-800 rounded-lg border border-indigo-800 focus:ring-blue-500 focus:border-blue-500 dark:bg-indigo-800 dark:border-gray-600 dark:placeholder-indigo-800 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option hidden={true}>By Attack</option>
        <option value="Max-Min">Strongest</option>
        <option value="Min-Max">Weakest</option>
      </select>
    </div>
  );
}
