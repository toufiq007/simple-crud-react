import ShowAllUser from "./components/Users/ShowAllUser";
import User from "./components/Users/User";

const App = () => {
  return (
    <div className="flex justify-around my-3">
      <User />
      <ShowAllUser/>
    </div>
  );
};

export default App;
