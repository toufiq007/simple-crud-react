const User = () => {
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
              placeholder="enter your age"
            />
          </div>
          <div className="my-2 p-2 rounded">
            <div className="my-1">
              <label htmlFor="">Occupation</label>
            </div>
            <select className="w-full rounded p-1">
              <option value="">Select</option>
              <option value="">Student</option>
              <option value="">Businessmen</option>
              <option value="">Office employee</option>
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
