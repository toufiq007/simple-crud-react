/* eslint-disable react/prop-types */

const User = ({ formData, setFormData, handleAddUser }) => {
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddUser(formData);
  };

  return (
    <div className="w-[350px]">
      <h2 className="text-center">Crate User</h2>
      <div className="bg-blue-100 w-[350px] p-5 flex justify-center align-middle">
        <form onSubmit={handleSubmit}>
          <div className="my-2 p-2 rounded">
            <div className="my-1">
              <label htmlFor="">Name</label>
            </div>
            <input
              className="overflow-hidden rounded p-1"
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="enter your name"
            />
          </div>

          <div className="my-2 p-2 rounded">
            <div className="my-1">
              <label htmlFor="">Email</label>
            </div>
            <input
              className="overflow-hidden rounded p-1"
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="enter your email"
            />
          </div>
          <div className="my-2 p-2 rounded">
            <div className="my-1">
              <label htmlFor="">Age</label>
            </div>
            <input
              className="overflow-hidden rounded p-1"
              type="number"
              name="age"
              required
              value={formData.age}
              onChange={handleChange}
              placeholder="enter your age"
            />
          </div>
          <div className="my-2 p-2 rounded">
            <div className="my-1">
              <label htmlFor="">Occupation</label>
            </div>
            <select
              className="w-full rounded p-1"
              name="occupation"
              required
              value={formData.occupation}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="Student">Student</option>
              <option value="Businessmen">Businessmen</option>
              <option value="Employee">Employee</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-5 py-1 rounded my-2 hover:bg-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default User;
