import { useState } from "react";
import ShowAllUser from "./components/Users/ShowAllUser";
import User from "./components/Users/User";
import { initialUser } from "./utils/utils";

const App = () => {
  const [users, setUsers] = useState(initialUser);
  const [formData, setFormData] = useState({
    id: crypto.randomUUID(),
    name: "",
    email: "",
    age: "",
    occupation: "",
  });

  const handleAddUser = (formData) => {
    setUsers((prev) => [...prev, formData]);
  };

  return (
    <div className="flex justify-around my-3">
      <User formData={formData} setFormData={setFormData} handleAddUser={handleAddUser} />
      <ShowAllUser users={users} />
    </div>
  );
};

export default App;
