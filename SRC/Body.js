import { useEffect, useState } from "react";
import reslist from "../util/mockdata";
import Rescard from "./Rescard";
const Body = () => {
  const [mylist, setmylist] = useState([]);
  useEffect(() => {
    swiggyapi();
  }, []);
  async function swiggyapi() {
    const resapi = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0843007&lng=80.2704622&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await resapi.json();
    const { restaurants } =
      json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle || {};
    setmylist(restaurants);
    //json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants

    // setmylist(restaurants);
  }
  if (mylist.length == 0) {
    return (
      <div>
        <img
          src="https://media.tenor.com/E8wDKSPjtToAAAAC/loading-slow.gif"
          alt=""
        />
      </div>
    );
  }
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
