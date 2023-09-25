
import PropTypes from 'prop-types'
import '../../App.css'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import Banner from '../Banner/Banner'

const Roots = () => {
  return (
    <div >
      <div className="bann h-[600px]">
        <Header></Header>
        <Banner></Banner>
      </div>

      <Outlet></Outlet>
    </div>
  )
}

Roots.propTypes = {}

export default Roots