/* eslint-disable react/prop-types */
import { useState } from "react";
import { occupucationList } from "../../utils/utils";
const ShowAllUser = ({
  users,
  handleDeleteUser,
  handleEditUser,
  handleCheckboxChange,
}) => {
  return (
    <div className="w-[700px] bg-blue-100">
      <h2 className="text-center">Show all user</h2>
      <div className="p-2">
        <h2>Filter user</h2>
        <div className="flex gap-4">
          {occupucationList.map((o) => (
            <div key={o.id} className="flex align-middle">
              <label htmlFor={o.occupucation}>{o.occupucation}</label>
              <input
                type="checkbox"
                className="mx-1"
                id={o.occupucation}
                onChange={handleCheckboxChange}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="m-2 p-1">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex py-2 bg-red-50 my-2 p-1 align-middle rounded justify-between"
          >
            <div className="flex gap-4 align-middle">
              <p>{user.name}</p>
              <p>{user.email}</p>
              <p>{user.age}</p>
              <p>{user.occupation}</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => handleEditUser(user)}
                className="bg-blue-600 text-white px-5 py-1 rounded my-2 hover:bg-blue-800"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteUser(user.id)}
                className="bg-red-600 text-white px-5 py-1 rounded my-2 hover:bg-blue-800"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowAllUser;
