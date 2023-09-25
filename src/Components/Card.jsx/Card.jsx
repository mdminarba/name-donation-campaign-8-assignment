
import PropTypes from 'prop-types'

const Card = ({ item }) => {
  const { picture,title ,color_card_bg ,category} = item


  return (
    <div style={{ background: color_card_bg }} className='  pr-8'>
      <div className="card w-96  "><figure><img src={picture}  /></figure>        
       <div className="card-body">
        <h2 className="w-16 rounded-md p-1 text-center" style={{ background: color_card_bg }} >{category}</h2>
        <h2>{title}</h2>       
      </div>
    </div>
    </div>
  )
}

Card.propTypes = {}

export default Card