import { useState } from "react";
import ShowAllUser from "./components/Users/ShowAllUser";
import User from "./components/Users/User";
import { initialFormData, initialUser } from "./utils/utils";

const App = () => {
  const [users, setUsers] = useState(initialUser);
  const [formData, setFormData] = useState(initialFormData);
  const [selectedOccupation, setSelectedOccupation] = useState([]);

  const handleCheckboxChange = (e) => {
    const { id, checked } = e.target;
    if (checked) {
      setSelectedOccupation((prev) => [...prev, id]);
    } else {
      setSelectedOccupation((prev) => prev.filter((o) => o !== id));
    }
  };

  const filterUser =
    selectedOccupation.length > 0
      ? users.filter((user) => selectedOccupation.includes(user.occupation))
      : users;
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

  // console.log({ users });
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
        users={filterUser}
        handleDeleteUser={handleDeleteUser}
        handleEditUser={handleEditUser}
        handleCheckboxChange={handleCheckboxChange}
      />
    </div>
  );
};

export default App;
