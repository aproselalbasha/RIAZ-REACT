import reslist from "../util/mockdata";
import Rescard from "./Rescard";
const Body = () => {
  return (
    <div>
      <div>
        <button className="top_restro">TOP RESTRO</button>
      </div>
      <div className="body">
        {/* map concept */}
        {reslist.map((res, index) => (
          <Rescard key={index} reslist={res} />
        ))}
      </div>
    </div>
  );
  //<Rescard reslist={reslist[0]}>
};
export default Body;
