
import PropTypes from 'prop-types'
import '../../App.css'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import Banner from '../Banner/Banner'

const Roots = () => {
  return (
    <div >
      <div className=" bann lg:h-[600px] h-[300px]">
        <Header></Header>
        <Banner></Banner>
        <Outlet></Outlet>
      </div>
      
    </div>
  )
}

Roots.propTypes = {}

export default Roots