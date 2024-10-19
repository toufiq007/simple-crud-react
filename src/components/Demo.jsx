/* eslint-disable react/prop-types */
import { useState } from "react";
import "./App.css";

const initialUser = [
  {
    id: crypto.randomUUID(),
    name: "Toufiq Limon",
    age: "25",
    date: "2023-10-11", // Changed format to "yyyy-mm-dd" to match the input field
  },
];

const UserForm = ({ handleSubmit, formData, handleChange }) => {
  return (
    <>
      <div
        style={{ border: "2px solid #000", width: "300px", padding: "20px" }}
      >
        <h2>Submit user</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <p>
              <label>Name</label>
            </p>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="enter your name"
            />
          </div>

          <div>
            <p>
              <label>Age</label>
            </p>
            <input
              type="number"
              name="age"
              required
              value={formData.age}
              onChange={handleChange}
              placeholder="enter your age"
            />
          </div>

          <div>
            <p>
              <label>Date</label>
            </p>
            <input
              type="date"
              name="date"
              required
              value={formData.date}
              onChange={handleChange}
              placeholder="dd/mm/yyyy"
            />
          </div>
          <button type="submit" style={{ marginTop: "10px" }}>
            {formData.id ? "Update User" : "Create User"}
          </button>
        </form>
      </div>
    </>
  );
};

const UserlistData = ({ userList, handleDeleteUser, handleEditUser }) => {
  return (
    <>
      <div
        style={{ border: "2px solid #000", padding: "10px", width: "400px" }}
      >
        <h2>user list</h2>
        {userList.map((user) => (
          <div
            key={user.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              border: "2px solid #000",
              width: "400px",
              padding: "5px",
              marginBottom: "5px",
            }}
          >
            <p>{user.name}</p>
            <p>date: {user.date}</p>
            <p>age: {user.age}</p>
            <div style={{ display: "flex", gap: "10px" }}>
              <button onClick={() => handleEditUser(user)}>edit</button>
              <button onClick={() => handleDeleteUser(user.id)}>delete</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

function App() {
  const [userList, setUserList] = useState(initialUser);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    age: "",
    date: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.id) {
      // Update existing user
      setUserList((prev) =>
        prev.map((user) => (user.id === formData.id ? { ...formData } : user))
      );
    } else {
      // Create new user
      setUserList((prev) => [
        ...prev,
        { ...formData, id: crypto.randomUUID() },
      ]);
    }
    setFormData({ id: "", name: "", age: "", date: "" });
  };

  const handleDeleteUser = (id) => {
    const updateUser = userList.filter((user) => user.id !== id);
    setUserList(updateUser);
  };

  const handleEditUser = (user) => {
    setFormData(user)
    console.log(user);
    // setFormData(user); // Populate form with the selected user's data
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <UserForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />

        <UserlistData
          handleDeleteUser={handleDeleteUser}
          handleEditUser={handleEditUser}
          userList={userList}
        />
      </div>
    </>
  );
}

export default App;

// const items = [
//   { name: "Apple", color: "Red", quantity: 10, category: "Fruits" },
//   { name: "Banana", color: "Yellow", quantity: 15, category: "Fruits" },
//   { name: "Orange", color: "Orange", quantity: 12, category: "Fruits" },
//   { name: "Rose", color: "Red", quantity: 20, category: "Flowers" },
//   { name: "Lily", color: "White", quantity: 8, category: "Flowers" },
//   { name: "Sunflower", color: "Yellow", quantity: 15, category: "Flowers" },
//   { name: "Carrot", color: "Orange", quantity: 18, category: "Vegetables" },
//   { name: "Broccoli", color: "Green", quantity: 6, category: "Vegetables" },
//   { name: "Spinach", color: "Green", quantity: 25, category: "Vegetables" },
//   { name: "Tulip", color: "Pink", quantity: 10, category: "Flowers" },
//   { name: "Grapes", color: "Purple", quantity: 30, category: "Fruits" },
//   { name: "Potato", color: "Brown", quantity: 40, category: "Vegetables" },
//   { name: "Blueberry", color: "Blue", quantity: 35, category: "Fruits" },
//   { name: "Cabbage", color: "Green", quantity: 22, category: "Vegetables" },
// ];

// const CategoryCheckboxes = ({ selectedCategories, onCategoryChange }) => {
//   const handleCheckboxChange = (event) => {
//     const { name, checked } = event.target;
//     onCategoryChange(name, checked);
//   };

//   return (
//     <div>
//       <h3>Select Categories</h3>
//       <label>
//         <input
//           type="checkbox"
//           name="Fruits"
//           checked={selectedCategories.Fruits}
//           onChange={handleCheckboxChange}
//         />
//         Fruits
//       </label>

//       <label>
//         <input
//           type="checkbox"
//           name="Flowers"
//           checked={selectedCategories.Flowers}
//           onChange={handleCheckboxChange}
//         />
//         Flowers
//       </label>

//       <label>
//         <input
//           type="checkbox"
//           name="Vegetables"
//           checked={selectedCategories.Vegetables}
//           onChange={handleCheckboxChange}
//         />
//         Vegetables
//       </label>
//     </div>
//   );
// };

// const App = () => {
//   const [renderData, setRenderData] = useState(items);
//   const [selectedCategories, setSelectedCategories] = useState({
//     Fruits: false,
//     Flowers: false,
//     Vegetables: false,
//   });

//   const handleCategoryChange = (category, isChecked) => {
//     const updatedCategories = {
//       ...selectedCategories,
//       [category]: isChecked,
//     };
//     setSelectedCategories(updatedCategories);
    
//     // Determine which categories are selected
//     const activeCategories = Object.keys(updatedCategories).filter(
//       (category) => updatedCategories[category]
//     );
//     console.log(activeCategories, "this is the update categories");

//     // If no categories are selected, show all items
//     if (activeCategories.length === 0) {
//       setRenderData(items);
//     } else {
//       const filteredItems = items.filter((item) =>
//         activeCategories.includes(item.category)
//       );
//       setRenderData(filteredItems);
//       // Filter items based on selected categories
//       // const filteredItems = items.filter((item) =>
//       //   activeCategories.includes(item.category + "s")
//       // );
//       // setRenderData(filteredItems);
//     }
//   };

//   return (
//     <div>
//       <h2>All of the items</h2>

//       <CategoryCheckboxes
//         selectedCategories={selectedCategories}
//         onCategoryChange={handleCategoryChange}
//       />

//       <div>
//         {renderData.map((item, index) => (
//           <div
//             style={{
//               display: "flex",
//               gap: "20px",
//               width: "200px",
//               margin: "20px auto",
//               padding: "5px",
//               borderRadius: "10px",
//               border: "2px solid #000",
//               flexDirection: "column",
//               justifyContent: "center",
//               alignItems: "center",
//             }}
//             key={index}
//           >
//             <h2>{item.category}</h2>
//             <div style={{ display: "flex", gap: "20px" }}>
//               <p>{item.name}</p>
//               <p>{item.color}</p>
//               <p>{item.category}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;
