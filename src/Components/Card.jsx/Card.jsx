
import PropTypes from 'prop-types'

const Card = ({item}) => {
  const { picture,title ,color_card_bg ,category ,color_text_button} = item


  return (
    <div style={{ background: color_card_bg ,color:color_text_button }} className='rounded-lg'>
      <div className=""><figure><img src={picture}  /></figure>        
       <div className="px-3 py-5">
        <h2 className="w-20 rounded-md  text-center" style={{ background: color_card_bg ,color:color_text_button }} >{category}</h2>
        <h2 className='font-semibold mt-5 text-xl'>{title}</h2>       
      </div>
    </div>
    </div>
  )
}

Card.propTypes = {}

export default Card