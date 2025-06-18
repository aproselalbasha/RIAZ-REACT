import { RES_IMG } from "../util/constant";

const Rescard = (props) => {
  const { name, cuisines, cloudinaryImageId, avgRatingString } =
    props.reslist.info; //object destructure
  return (
    <div className="rescard">
      <div className="rescard-logo">
        <img src={RES_IMG + cloudinaryImageId} alt="reslogo" />
      </div>
      <div className="rescard-info">
        <h2>{name}</h2>
        <p>{cuisines.join(",")}</p>
        <p>{avgRatingString}⭐⭐⭐⭐⭐</p>
      </div>
    </div>
  );
};
export default Rescard;
