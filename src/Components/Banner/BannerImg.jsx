import PropTypes from "prop-types";
import Prop from "../../assets/images/user.png";

const BannerImg = () => {
  return (
    <div className="w-full">
      <img className="h-[550px] w-auto pt-10" src={Prop} alt="" />
    </div>
  );
};

BannerImg.propTypes = {};

export default BannerImg;
