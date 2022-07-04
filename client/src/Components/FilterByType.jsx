import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonsByType, getTypes } from "../actions";
import "./Home.css";

export function FilterByType() {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types);

  function handleChange(e) {
    dispatch(getPokemonsByType(e.target.value));
  }

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  return (
    <div className="content-select">
      <select
        onChange={(e) => handleChange(e)}
        id="small"
        className="block p-2 mb-6 text-sm text-gray-900 font-bold bg-indigo-800 rounded-lg border border-indigo-800 focus:ring-blue-500 focus:border-blue-500 dark:bg-indigo-800 dark:border-gray-600 dark:placeholder-indigo-800 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option hidden={true}>Types</option>
        {types.map((e) => (
          <option key={e.id} value={e.name}>
            {e.name}
          </option>
        ))}
      </select>
    </div>
  );
}
