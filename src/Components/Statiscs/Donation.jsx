
import { useLoaderData } from 'react-router-dom'
import { getStoredAddCard } from '../Utility/Localstorage'
import { useEffect, useState } from 'react';
import AddCard from './AddCard';


const Donation = () => {
    const cards = useLoaderData();
    const [showcard, setCard]=useState([]);
    const [showAll, setshowAl]=useState(4);
    useEffect(()=>{
        const storedCardId = getStoredAddCard();
        if(cards.length > 0){
            const cardAdd = []; 
            for (const id of storedCardId){
                const car = cards.find(car => car.id ===id);
                if (car) {
                    cardAdd.push(car);
                }
            }

            console.log(cards, storedCardId,cardAdd);
            setCard(cardAdd)
        }
    } , [])
  return (
    <div className="">
    <div className='grid lg:grid-cols-2 grid-cols-1 gap-6 w-1300px m-auto lg:mx-16'>
      {
        showcard.slice(0, showAll).map(car =><AddCard  key={car.id} card={car}></AddCard> )
        
      }
      
      
    </div>
    <div className="text-center  mt-4 ">
      <div className={showAll === cards.length ? 'hidden' : "" }>
      <button
      onClick={() => setshowAl(cards.length)}
       className="bg-[#009444] text-white font-bold p-2 rounded-md my-3 px-5" >See All</button>
      </div>
      </div>
    </div>
  )
}

export default Donation

