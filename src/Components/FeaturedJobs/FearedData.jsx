

const FearedData = ({ props }) => {
  const {id, logo, job_title, company_name, remote_or_onsite ,salary,location} = props;
  return (
    <div className="  bg-base-100 border p-10">
      <figure>
        <img src={logo} alt="" />
      </figure>
      <div className="">
        <h2 className="text-2xl font-extrabold">{job_title}</h2>
        <p className="text-[#A3A3A3] my-3 font-bold">{company_name}</p>
        <div className="flex gap-5">
          <h2 className="font-bold flex items-center"><img src={icone2} alt="" />{salary}</h2>
          <h2 className="font-bold flex items-center"> <img src={icone} alt="" />{location}</h2>
        </div>

        <button className="px-5  my-5 py-2 font-bold rounded border border-[#7E90FE]">
          {remote_or_onsite}
        </button>
        <button className="px-5 py-2 font-bold rounded border border-[#7E90FE] ml-3">
          Full Time
        </button>
        <div className="card-actions ">

        </div>
      </div>
    </div>
  );
};

FearedData.propTypes = {
  props:PropTypes.object,
  logo:PropTypes.any,
  job_title:PropTypes.any,
  company_name:PropTypes.any,
  remote_or_onsite:PropTypes.any,
  salary:PropTypes.any,
  location:PropTypes.any




};

export default FearedData;
