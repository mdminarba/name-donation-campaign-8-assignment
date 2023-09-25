import PropTypes from "prop-types";

const BannerConten = (props) => {
  return (
    <div>
      <div className=" p-4">
        <h2 className="text-6xl font-bold my-4 ">
          One Step <br /> Closer To Your <br />
          <span className="text-blue-400">Dream Job</span>
        </h2>
        <p className="my-4 ">
          xplore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <button className="btn btn-primary  ">Get Started</button>
      </div>
    </div>
  );
};

BannerConten.propTypes = {};

export default BannerConten;
