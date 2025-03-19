import React from 'react'
import { Card,CardBody } from 'reactstrap';
import {Link} from 'react-router-dom';
import './car-card.css';
import CaclulateAverageRating from '../utils/avgRating';

const TourCard = ({tour}) => {

  const {id,title,city, photo, price, featured, reviews } = tour;
  const{totalRating,avgRating} = CaclulateAverageRating(reviews);
  return (
    <div className="tour__card">
        <Card>
            <div className="tour__img">
                <img src={photo} alt="tour-img" />
                {featured && <span>Featured</span>}
            </div>
        </Card>

        <CardBody className="cardBody">
            <div className="card__top d-flex align-items-center justify-content-between">
                <span className='tour__location d-flex align align-items-center gap-1 '>
                    <i class="ri-map-pin-line"></i>{city}
                </span>
                <span className='tour__rating d-flex align align-items-center gap-1 '>
                    <i class="ri-star-fill"></i>
                    {/* {totalRating==0?"Not Rated":(

                    )} */}
                    {avgRating ==0?null:avgRating}
                    {totalRating==0?"Not Rated":(
                        <span>
                            ({reviews.length})
                        </span>
                    )}
                    
                    
                </span>

                </div>

                <h5 className="tour__title">
                    <Link to={'/tours/${id}'}>
                        {title}
                    </Link>
                </h5>
                
                <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
                    <h5>
                        ${price}
                        <span>
                            /per person
                        </span>
                        <button className='btn booking__btn'>
                            <Link to={'/tours/${id}'}>
                            Book Now
                            </Link>
                        </button>
                    </h5>
                </div>
        </CardBody>
    </div>



























//     <div className="tour__card group relative flex flex-col  rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 hover:rotate-[0.5deg]">
//     {/* Floating gradient overlay */}
//     <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-400/20 opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
    
//     {/* Image container with parallax effect */}
//     <div className="relative h-72 overflow-hidden">
//         <img 
//             src={photo} 
//             alt="tour-img"
//             className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
//         />
//         {/* Animated featured ribbon */}
//         <div className="absolute top-4 -right-10 bg-gradient-to-r from-orange-500 to-yellow-900 text-white px-8 py-2 text-sm font-bold rotate-45 shadow-lg group-hover:right-[-5px] transition-all duration-300">
//             Featured
//         </div>
//     </div>

//     {/* Content container with glassmorphism effect */}
//     <div className="p-6 flex-1 flex flex-col backdrop-blur-sm bg-white/5">
//         {/* Location and rating */}
//         <div className="flex justify-between items-start mb-4">
//             <div className="flex items-center space-x-2">
//                 <i className="ri-map-pin-line text-2xl text-orange-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
//                 <span className="text-orange-300 font-semibold text-lg">{city}</span>
//             </div>
//             <div className="flex items-center space-x-1 bg-slate-800/50 px-3 py-1 rounded-full">
//                 <i className="ri-star-fill text-xl text-amber-400 animate-pulse" />
//                 <span className="text-white font-bold">{avgRating}</span>
//                 <span className="text-slate-400 text-sm">({reviews.length})</span>
//             </div>
//         </div>

//         {/* Title with gradient text */}
//         <h3 className="mb-4">
//             <Link 
//                 to={`/tours/${id}`}
//                 className="text-2xl font-extrabold bg-gradient-to-r from-orange-200 to-orange-400 bg-clip-text text-transparent hover:bg-gradient-to-l transition-all duration-300"
//             >
//                 {title}
//             </Link>
//         </h3>

//         {/* Price and CTA */}
//         <div className="mt-auto flex justify-between items-center pt-4 border-t border-slate-700/50">
//             <div className="space-y-1">
//                 <span className="block text-4xl font-black bg-gradient-to-br from-orange-300 to-orange-400 bg-clip-text text-transparent">
//                     ${price}
//                 </span>
//                 <span className="text-slate-400 text-sm font-light tracking-wide">
//                     PER PERSON
//                 </span>
//             </div>
//             <button className="relative overflow-hidden bg-gradient-to-br from-orange-300 to-orange-500 text-white px-8 py-3 rounded-xl hover:rounded-2xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(139,92,246,0.5)]">
//                 <span className="relative z-10 flex items-center gap-2">
//                     <i className="ri-flight-takeoff-line animate-bounce" />
//                     Book Now
//                 </span>
//                 <div className="absolute inset-0 bg-gradient-to-bl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//             </button>
//         </div>
//     </div>

//     {/* Hover particle effect */}
//     <div className="absolute inset-0 pointer-events-none">
//         {[...Array(12)].map((_, i) => (
//             <div 
//                 key={i}
//                 className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
//                 style={{
//                     top: `${Math.random() * 100}%`,
//                     left: `${Math.random() * 100}%`,
//                     animation: `float ${Math.random() * 5 + 3}s infinite`
//                 }}
//             />
//         ))}
//     </div>
// </div>






















// <div className="tour__card group relative flex flex-col bg-black rounded-[20px] shadow-[0_8px_32px_rgba(250,169,53,0.15)] hover:shadow-[0_12px_48px_rgba(250,169,53,0.3)] transition-all duration-500 overflow-hidden h-[520px] w-full border-2 border-white/10">
//     {/* Glowing overlay */}
//     <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/30 z-10" />
    
//     {/* Image container */}
//     <div className="relative h-64 overflow-hidden">
//         <img 
//             src={photo} 
//             alt="tour-img"
//             className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
//         />
//         {/* Diagonal badge */}
//         <div className="absolute top-5 -right-10 bg-[rgb(250,169,53)] px-8 py-1 rotate-45 scale-110 group-hover:right-[-20px] transition-all duration-300 text-black">
//             FEATURED
//         </div>
//     </div>

//     {/* Content container */}
//     <div className="p-6 flex-1 flex flex-col justify-between z-20">
//         {/* Top section */}
//         <div>
//             <div className="flex justify-between items-start mb-4">
//                 <div className="flex items-center gap-2">
//                     <i className="ri-map-pin-line text-[rgb(250,169,53)]" />
//                     <span className="text-white">{city}</span>
//                 </div>
//                 <div className="flex items-center gap-1 bg-white/5 px-3 py-1 rounded-full">
//                     <i className="ri-star-fill text-[rgb(250,169,53)]" />
//                     <span className="text-white">{avgRating}</span>
//                     <span className="text-[rgb(110,112,116)]">({reviews.length})</span>
//                 </div>
//             </div>

//             {/* Title */}
//             <h3 className="mb-4">
//                 <Link 
//                     to={`/tours/${id}`}
//                     className="text-white hover:text-[rgb(250,169,53)] transition-colors duration-300 line-clamp-2"
//                 >
//                     {title}
//                 </Link>
//             </h3>
//         </div>

//         {/* Bottom section */}
//         <div>
//             <div className="pt-4 border-t border-white/10">
//                 <div className="flex justify-between items-center">
//                     <div>
//                         <span className="block text-2xl text-[rgb(250,169,53)]">${price}</span>
//                         <span className="text-[rgb(110,112,116)]">PER PERSON</span>
//                     </div>
//                     <button className="relative overflow-hidden bg-[rgb(250,169,53)] hover:bg-[rgb(255,185,86)] text-black px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(250,169,53,0.5)]">
//                         <Link to={`/tours/${id}`} className="flex items-center gap-2">
//                             <i className="ri-bookmark-fill" />
//                             Book Now
//                         </Link>
//                     </button>
//                 </div>
//             </div>
//         </div>
//     </div>

//     {/* Animated grid overlay */}
//     <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjAwIDBIMHYyMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIvPjwvc3ZnPg==')] opacity-20 z-0" />
// </div>









































// <div className="tour__card group relative flex flex-col w-96 h-96 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden bg-gradient-to-br from-black via-slate-900 to-black border-2 border-white/5">
//     {/* Image container */}
//     <div className="relative h-48 overflow-hidden">
//         <img 
//             src={photo} 
//             alt="tour-img"
//             className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
//         />
//         {/* Featured ribbon */}
//         <div className="absolute top-3 -right-8 bg-[rgb(250,169,53)] px-8 py-1 rotate-45 text-black text-sm font-bold group-hover:right-[-12px] transition-all duration-300">
//             Featured
//         </div>
//     </div>

//     {/* Content container */}
//     <div className="p-5 flex-1 flex flex-col justify-between bg-gradient-to-b from-black/80 to-black/20">
//         {/* Top row */}
//         <div className="flex justify-between items-start mb-3">
//             <div className="flex items-center gap-2">
//                 <i className="ri-map-pin-line text-[rgb(250,169,53)]" />
//                 <span className="text-white text-sm">{city}</span>
//             </div>
//             <div className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded-full">
//                 <i className="ri-star-fill text-[rgb(250,169,53)]" />
//                 <span className="text-white text-sm">{avgRating}</span>
//                 <span className="text-[rgb(110,112,116)] text-xs">({reviews.length})</span>
//             </div>
//         </div>

//         {/* Title */}
//         <h3 className="mb-3 line-clamp-2">
//             <Link 
//                 to={`/tours/${id}`}
//                 className="text-white hover:text-[rgb(250,169,53)] text-lg leading-tight transition-colors duration-200"
//             >
//                 {title}
//             </Link>
//         </h3>

//         {/* Bottom section */}
//         <div className="mt-auto">
//             <div className="flex justify-between items-end">
//                 <div>
//                     <div className="text-[rgb(250,169,53)] text-2xl font-bold">${price}</div>
//                     <div className="text-[rgb(110,112,116)] text-xs">PER PERSON</div>
//                 </div>
//                 <button className="bg-[rgb(250,169,53)] hover:bg-[rgb(255,185,86)] text-black px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105">
//                     <Link to={`/tours/${id}`} className="flex items-center gap-1 text-sm">
//                         <i className="ri-flight-takeoff-line" />
//                         Book Now
//                     </Link>
//                 </button>
//             </div>
//         </div>
//     </div>

//     {/* Grid overlay */}
//     <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjAwIDBIMHYyMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIvPjwvc3ZnPg==')] opacity-10 pointer-events-none" />
// </div>
  )
}

export default TourCard