import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [hide, setHide] = useState(false);

  return (
    <nav className="p-10 font-semibold h-20 bg-blue-500 w-screen flex justify-center items-center">
      <div className="text-white flex w-full justify-between items-center">
        <Link className="navbar-brand" to={"/"}>
          CRUD OPERATION
        </Link>
        <button
          className="absolute right-10 border border-gray-300 p-2 rounded text-white"
          onClick={() => setHide(!hide)}
        >
          {hide ? "Hide" : "Show"} Menu
        </button>
        <div className={hide ? "block" : "hidden "}>
          <ul className=" absolute right-10 top-16 rounded border border-black p-1 bg-blue-800">
            <li className="border rounded border-white p-2 mb-1">
              <Link
                className="nav-link active"
                aria-current="page"
                to={"/view-students"}
              >
                View All Student
              </Link>
            </li>
            <li className="border rounded border-white p-2">
              <Link className="nav-link" to={"/add-students"}>
                Add new Students
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
