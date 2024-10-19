import { occupucationList } from "../../utils/utils";

const FilterUser = () => {
  return (
    <div className="p-2">
      <h2>Filter user</h2>
      <div className="flex gap-4">
        {occupucationList.map((o) => (
          <div key={o.id} className="flex align-middle">
            <label htmlFor={o.occupucation}>{o.occupucation}</label>
            <input type="checkbox" className="mx-1" id={o.occupucation} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterUser;
