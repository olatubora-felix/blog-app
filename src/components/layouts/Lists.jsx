import React from "react";
import { NavLink } from "react-router-dom";

const Lists = ({ users, logout }) => {
  return (
    <ul className="flex md:items-center text-black md:flex-row flex-col">
      <li className="my-2">
        <NavLink
          className="mr-4 text-base font-medium my-4 text-blue-300"
          to="/posts"
        >
          Posts
        </NavLink>
      </li>
      {users.token && (
        <li className="my-2">
          <NavLink
            className="mr-4 text-base font-medium my-4 text-blue-300"
            to="/dashboard"
          >
            dashboard
          </NavLink>
        </li>
      )}

      <li className="my-2">
        {users.token ? (
          <button
            className="text-base font-bold text-blue-300"
            onClick={logout}
          >
            Logout
          </button>
        ) : (
          <NavLink
            className="mr-4 text-base font-medium my-4 text-blue-300"
            to="/login"
          >
            Login
          </NavLink>
        )}
      </li>
    </ul>
  );
};

export default Lists;
