import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Card from "./Card";


const Cards = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setdata(data));
  }, []);
  console.log(data);

  return (
  
    <div className="grid gap-6 my-16 mx-14  lg:grid-cols-4 md:grid-cols-2 grid-cols-1 ">
      {
        data.map(item=> <Card key={item.id} item={item}
          style={{
            background: item.color_card_bg,
            color: item.color_text_button,
          }}></Card>)
      }
    </div>
  );
};


Cards.propTypes = {};

export default Cards;

// <div>
// {data.map(item => <Card></Card> (
//   <div
//     key={item.id}
//     style={{
//       background: item.color_card_bg,
//       color: item.color_text_button,
//     }}
//   >
//     <div className="grid grid-cols-4 md:grid-cols-2 grid-cols-1 ">
//       <div className="card w-96  ">
//         <figure><img src={item.picture} alt={item.title} /></figure>
//         <div className="card-body">
//           <h2 className="w-16 rounded-md p-1 text-center" style={{ background: item.color_card_bg }} >{item.category}</h2>
//           <h2>{item.title}</h2>
//           <div className="card-actions justify-end">

//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// ))}
// </div>