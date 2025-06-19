import { useState } from "react";
import reslist from "../util/mockdata";
import Rescard from "./Rescard";
const Body = () => {
  const [mylist, setmylist] = useState(reslist);

  return (
    <div>
      <div>
        <button
          onClick={() => {
            const updatedlist = mylist.filter((fill) => {
              return fill.info.avgRating > 4.5;
            });
            console.log(updatedlist);
            setmylist(updatedlist);
          }}
          className="top_restro"
        >
          TOP RESTRO
        </button>
      </div>
      <div className="body">
        {/* map concept */}
        {mylist.map((res, index) => (
          <Rescard key={index} reslist={res} />
        ))}
      </div>
    </div>
  );
  //<Rescard reslist={reslist[0]}>
};
export default Body;
