import { useState } from "react";

const initialUser = [
  {
    id: 1,
    name: "Mostafizur Rahamn",
    age: 25,
    email: "t.limon@gamil.com",
    occupation: "student",
  },
  {
    id: 2,
    name: "Toufiq Hasan",
    age: 22,
    email: "toufiq@gamil.com",
    occupation: "business",
  },
  {
    id: 1,
    name: "Hasan sheikh",
    age: 26,
    email: "t.limon@gamil.com",
    occupation: "employee",
  },
];

const ShowAllUser = () => {
  const [users, setUsers] = useState(initialUser);
  return (
    <div className="w-[700px] bg-blue-100">
      <h2 className="text-center">Show all user</h2>
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
              <button className="bg-blue-600 text-white px-5 py-1 rounded my-2 hover:bg-blue-800">
                Edit
              </button>
              <button className="bg-red-600 text-white px-5 py-1 rounded my-2 hover:bg-blue-800">
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
