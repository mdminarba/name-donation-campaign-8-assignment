
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const ArrorPage = () => {
  return (
    <div>
        <div className="text-center  lg:mt-60">
        <h2 className=" text-6xl mb-10 ">Oops!!!</h2>
        <Link className=' text-2xl bg-lime-400 rounded-lg py-2 px-3 font-bold' to="/">Go back to home</Link>
        </div>

    </div>
  )
}

ArrorPage.propTypes = {}

export default ArrorPage