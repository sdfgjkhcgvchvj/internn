import { useSelector } from "react-redux";
import Entry from "./Entry";

const Entries = () => {
  const entries = useSelector((state) => state.calorie);
  console.log(entries);
  return (
    <div className="mt-3">
      <h4 className="display-6">Food List With Calories</h4>
      <hr />
      <div className="list-group">
        {entries.map((el) => (
          <Entry entry={el} />
        ))}
      </div>
    </div>
  );
};
export default Entries;