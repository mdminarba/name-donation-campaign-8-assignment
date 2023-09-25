import { NavLink } from "react-router-dom"
import pic from "../../assets/Logo.png"

const Header = () => {
  return (
    <div>
      <div className="navbar  lg:px-12 ">
        <div className="flex-1">
          <img src={pic} alt="" />
        </div>
        <div className="">
          <ul className="">

            <NavLink className=" btn btn-ghost normal-case text-xl mr-2" to="/">Home</NavLink>
            <NavLink className=" btn btn-ghost normal-case text-xl mr-2" to="/donation">Donation</NavLink>
            <NavLink className=" btn btn-ghost normal-case text-xl  mr-2" to="/statistics">Statistics</NavLink>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
