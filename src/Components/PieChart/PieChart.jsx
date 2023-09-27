import { useLoaderData } from 'react-router-dom';
import { getStoredAddCard } from '../Utility/Localstorage';
import Chart from 'react-apexcharts'
const PieChart = () => {

  const donation = getStoredAddCard()
  const donationl = donation.length;
  console.log(donationl)
  const cards = useLoaderData();
  const cardsl = cards.length;
  console.log(cardsl)

  const data = [
    cardsl, donationl
  ]
  return (
    <div className='flex justify-center'>
      <Chart
        type='pie'
        width={700}
        height={700}
        series={data}
        options={{
          labels: ['Total Donation', 'Your Donation'],
          colors: ['#FF444A', '#00C49F']
        }}
      >

      </Chart>
    </div>
  )
}

export default PieChart









// import {Pie} from 'react-apexcharts';
// import { useLoaderData } from 'react-router-dom';
// import { getStoredAddCard } from '../Utility/Localstorage';

// const PieChart = () => {

//   const donation = getStoredAddCard()
//   donationl = donation.length;
//  const cards = useLoaderData();
//  cardsl= cards.length;

//  const data = [
//   {donations: 'all dutetion', lengths:{donationl}},
//   {donations: 'all dutetion', lengths:{cardsl}}
//  ]
//  const color = ['#FF444A','#00C49F' ]

//   return (
//     <div>
//       <div className='flex justify-center'>
//         <Pie
//           type='pie'
//           width={600}
//           height={600}
//           series={data}
//           options={{
//             colors: {color}
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// export default PieChart;
