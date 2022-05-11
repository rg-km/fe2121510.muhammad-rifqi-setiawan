import React from 'react';
// import from component > HelloWorld
import HelloWorld from './components/HelloWorld';

const App = () => {
  const props = { title: "Rifqi", data: "Selamat Siang" };
  const data = [
    { 
      title: "Rifqi", 
      data: "Selamat Siang" 
    },
    { 
      title: "Ahmad", 
      data: "Selamat Pagi" 
    },
    { 
      title: "Fakhri", 
      data: "Selamat Sore" 
    },
    { 
      title: "Ibnu", 
      data: "Selamat Malam" 
    },
  ];
  // spread operator
  return (
    // cara tanpa MAP
    <div>
      {/* <HelloWorld {...props} />
      <HelloWorld title="Ahmad" data="Selamat Pagi" />
      <HelloWorld title="Ibnu" data="Selamat Sore" />
      <HelloWorld title="Fakhri" data="Selamat Malam" /> */}

      <h1>List Data Hello</h1>
      {data.map((element, index) => {
        return (
          <HelloWorld key={index} data={element.data} title={element.title}  />
        );
      })}
    </div>
  );
};

// const DetailNews = (props) => {
//   const {image, title, date} = props;
//   return(
//      <div className='eachNews'>
//        <img src={image} />
//        <div className='description'>
//           <div>
//              {title}
//           </div>
//           <div className='text-grey'>
//             {date}
//           </div>
//        </div>
//      </div>
//   )
// }

// function App() {
//   const data = [
//     {
//       image : "https://picsum.photos/id/237/150/",
//       title : "  Gunung Anak Krakatau Naik Status dari Waspada ke Siaga",
//       date  : "June, 29 2019",
//     },
//     {
//       image : "https://picsum.photos/id/137/150/",
//       title : "Sederet Fakta Pelonggaran Covid Besar-besaran di Singapura",
//       date : "April, 19 2019",
//     },
//     {
//       image : "https://picsum.photos/id/500/150",
//       title : "Launching Rumah Tipe Baru Grand Wisata Bekasi, Ada Promo DP Rp0",
//       date : "March, 1 2019",
//     },
//     {
//       image : "https://picsum.photos/id/999/150",
//       title : "Puluhan Pilot Australia Menerbangkan Pesawat Drone Bersenjata Inggris di Timur Tengah",
//       date : "April, 19 2029",
//     }
//   ];


//   return (
//     <div className="state-props-1">
//       <h3>Recent Posts</h3>
//       <div className='news-container'>
//         {
//           data.map((element, index) => (
//             <DetailNews image={element.image} title={element.title} date={element.date} key={index} />
//           ))
//         }
//       </div>
//     </div>
//   );
// }

export default App;
