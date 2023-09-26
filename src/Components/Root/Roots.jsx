
import PropTypes from 'prop-types'
import '../../App.css'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'

const Roots = () => {
  return (
    <div >
      <div className="">
        <Header></Header>
  
        <Outlet></Outlet>
      </div>
      
    </div>
  )
}

Roots.propTypes = {}

export default Roots