/* eslint-disable react/prop-types */

const User = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="w-[350px]">
      <h2 className="text-center">Crate User</h2>
      <div className="bg-blue-100 w-[350px] p-5 flex justify-center align-middle">
        <form>
          <div className="my-2 p-2 rounded">
            <div className="my-1">
              <label htmlFor="">Name</label>
            </div>
            <input
              className="overflow-hidden rounded p-1"
              type="text"
              name="name"
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
              value={formData.occupation}
              onChange={handleChange}
            >
              <option value="select">Select</option>
              <option value="Student">Student</option>
              <option value="Businessmen">Businessmen</option>
              <option value="Employee">Employee</option>
            </select>
          </div>
          <button className="bg-blue-600 text-white px-5 py-1 rounded my-2 hover:bg-blue-800">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default User;
