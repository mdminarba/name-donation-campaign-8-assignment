
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Card = ({ item,}) => {
  const { id ,picture,title ,color_card_bg ,category ,color_text_button} = item


  return (
  
    <Link to={`/card/${id}`}>
    <div  style={{ background: color_card_bg ,color:color_text_button }} className='rounded-lg' >
      <div className=""><figure><img src={picture}  /></figure>        
       <div className="px-5 py-5">
        <h2 className="w-24 font-semibold  rounded-md py-2 px-3 text-center" style={{ background: color_card_bg ,color:color_text_button }} >{category}</h2>
        <h2 className='font-semibold mt-5 text-xl'>{title}</h2>       
      </div>
    </div>
    </div>
    </Link>
  )
}

Card.propTypes = {}

export default Card