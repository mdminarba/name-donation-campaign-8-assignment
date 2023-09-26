
import { useLoaderData, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { saveCardAdd } from '../Utility/Localstorage';


const Detils = () => {
    const card = useLoaderData()
    const { id } = useParams()
    const pars = parseInt(id);
    const car = card.find(car => car.id === pars)
    const { picture, description, crad_name, price, color_text_button } = car

    const handleAddcard = () =>{
        saveCardAdd(pars)
        toast('You have card added successfully')
    }



    return (
        <div className='lg:w-[1345px] m-auto   lg:px-[150px]   bottom-[200px]  md:bottom-[150px] bg-white'>
            <img className='w-full' src={picture} alt="" />
            <div className="mix-blend-multiply relative -top-[70px] left-0 h-[70px] bg-gray-400 ..."></div>
            <button onClick={handleAddcard} className='text-[#FFF] rounded-md relative -top-[130px] left-10  p-3 font-medium ' style={{ background: color_text_button }}>Donate {price}</button>
            <h1 className=" text-[#0B0B0B] text-4xl -mt-24 mb-5 font-bold">{crad_name}</h1>
            <p className="">{description}</p>
            <ToastContainer />
        </div>
    )
}

export default Detils
