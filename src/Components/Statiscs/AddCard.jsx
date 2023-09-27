import { Link } from "react-router-dom"

const AddCard = ({card}) => {
    const { id,picture,title,color_card_bg,color_text_button ,category,price}=card
  return (
    <div className="flex">
        <img className="w-52" src={picture}alt="" />

    <div className="w-full ">
    <div  style={{ background: color_card_bg ,color:color_text_button }} className=' h-full rounded-r-lg ' >       
       <div className="px-5 py-5">
        <h2 className="w-24 font-semibold  rounded-md py-2 px-3 text-center" style={{ background: color_card_bg ,color:color_text_button }} >{category}</h2>
        <h2 className='font-semibold mt-5 text-xl'>{title}</h2> 
        <p className=" font-bold">${price}</p>
        <Link to={`/card/${id}`}>        <button className="text-white p-2 rounded-md my-3 px-5" style={{ background: color_text_button  }}>View Details</button></Link>
        
      </div>
      
    </div>
    
    </div>
    </div>

  )
}

export default AddCard
