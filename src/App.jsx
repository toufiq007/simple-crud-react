import { useState } from "react";
import ShowAllUser from "./components/Users/ShowAllUser";
import User from "./components/Users/User";
import { initialFormData, initialUser } from "./utils/utils";

const App = () => {
  const [users, setUsers] = useState(initialUser);
  const [selectedOccupucation, setSelectedOccupation] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    age: "",
    occupation: "",
  });
  const handleAddOrEdit = (updateData) => {
    if (updateData.id) {
      setUsers((prev) =>
        prev.map((user) =>
          user.id === updateData.id ? { ...updateData } : user
        )
      );
    } else {
      setUsers((prev) => [...prev, { ...updateData, id: crypto.randomUUID() }]);
    }
  };

  const handleDeleteUser = (id) => {
    const updateUserList = users.filter((user) => user.id !== id);
    setUsers([...updateUserList]);
  };

  const handleCheckBoxChange = (e) => {
    const { id, checked } = e.target;

    if (checked) {
      setSelectedOccupation((prev) => [...prev, id]);
    } else {
      setSelectedOccupation((prev) => prev.filter((o) => o !== id));
    }
  };
  console.log({ selectedOccupucation });

  const filterUserArr = selectedOccupucation.length
    ? users.filter((user) => selectedOccupucation.includes(user.occupation))
    : users;

  const handleCheckBoxChange = (e) => {
    const { id, checked } = e.target;

    if (checked) {
      setSelectedOccupation((prev) => [...prev, id]);
    } else {
      setSelectedOccupation((prev) => prev.filter((o) => o !== id));
    }
  };
  console.log({ selectedOccupucation });

  const filterUserArr = selectedOccupucation.length
    ? users.filter((user) => selectedOccupucation.includes(user.occupation))
    : users;

  console.log({ users });
  const handleEditUser = (updateUser) => {
    setFormData(updateUser);
  };

  return (
    <div className="flex justify-around my-3">
      <User
        formData={formData}
        setFormData={setFormData}
        handleAddOrEdit={handleAddOrEdit}
      />
      <ShowAllUser
        users={filterUserArr}
        users={filterUserArr}
        handleDeleteUser={handleDeleteUser}
        handleEditUser={handleEditUser}
        handleCheckBoxChange={handleCheckBoxChange}
        handleCheckBoxChange={handleCheckBoxChange}
      />
    </div>
  );
};

export default App;
