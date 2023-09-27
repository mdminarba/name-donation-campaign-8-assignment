

const FearedJobs = () => {
  const [data, setdata] = useState([]);
  const [dataLength, setdataLength] = useState(4);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setdata(data));
  }, []);
  console.log(data);
  return (
    <div className="">
      <h2 className="text-center text-4xl font-bold mt-16">Feared Jobs</h2>
      <p className="text-center text-xl mt-5">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className=" grid grid-cols-1 mt-10  lg:grid-cols-2 gap-5 lg:w-[1250px] m-auto">
        {data.slice(0, dataLength).map((data) => (
   
        ))}
      </div>
      <div className="text-center my-5">
        <div className={dataLength === data.length ? "hidden" : " "}>
          <button
            onClick={() => setdataLength(data.length)}
            className="btn btn-primary "
          >
            See All Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

FearedJobs.propTypes = {};

export default FearedJobs;
