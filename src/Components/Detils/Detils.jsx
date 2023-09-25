
import { useLoaderData, useParams } from 'react-router-dom'

const Detils = () => {
    const card = useLoaderData()
    const { id } = useParams()
    const pars = parseInt(id);
    const car = card.find(car => car.id === pars)
    const { picture, description, crad_name, price, color_text_button } = car



    return (
        <div className='lg:w-[1345px] m-auto py-[75px]  lg:px-[150px] lg:py-[75px]  bottom-[200px] relative lg:bottom-[550px] md:bottom-[150px] bg-white'>
            <img className='w-full' src={picture} alt="" />
            <div className="mix-blend-multiply relative -top-[70px] left-0 h-[70px] bg-gray-400 ..."></div>
            <button className='text-[#FFF] rounded-md relative -top-[130px] left-10  p-3 font-medium ' style={{ background: color_text_button }}>Donate {price}</button>
            <h1 className=" text-[#0B0B0B] text-4xl -mt-24 mb-5 font-bold">{crad_name}</h1>
            <p className="">{description}</p>
        </div>
    )
}

export default Detils
