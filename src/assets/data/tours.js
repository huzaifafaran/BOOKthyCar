import carImg01 from "../images/car-img01.jpg";
import carImg02 from "../images/car-img02.jpg";
import carImg03 from "../images/car-img03.jpg";
import carImg04 from "../images/car-img04.jpg";
import carImg05 from "../images/car-img05.jpg";
import carImg06 from "../images/car-img06.jpg";
import carImg07 from "../images/car-img07.jpg";

const cars = [
  {
    id: "01",
    title: "Luxury Sedan",
    city: "London",
    distance: 300,
    price: 99,
    maxGroupSize: 4,
    desc: "A comfortable and stylish sedan for city rides and long drives.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: carImg01,
    featured: true,
  },
  {
    id: "02",
    title: "SUV Explorer",
    city: "Indonesia",
    distance: 400,
    price: 120,
    maxGroupSize: 6,
    desc: "Spacious SUV perfect for family trips and off-road adventures.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: carImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Convertible Sports Car",
    city: "Thailand",
    distance: 500,
    price: 150,
    maxGroupSize: 2,
    desc: "Experience the thrill of the road with this high-performance convertible.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: carImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Executive Limousine",
    city: "Thailand",
    distance: 500,
    price: 250,
    maxGroupSize: 8,
    desc: "Travel in luxury with this premium limousine service, ideal for VIPs.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: carImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Eco-Friendly Hybrid",
    city: "Indonesia",
    distance: 500,
    price: 80,
    maxGroupSize: 4,
    desc: "A fuel-efficient hybrid car for eco-conscious travelers.",
    reviews: [],
    avgRating: 4.5,
    photo: carImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Compact City Car",
    city: "Japan",
    distance: 500,
    price: 70,
    maxGroupSize: 4,
    desc: "A small yet powerful car, perfect for navigating busy streets.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: carImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Luxury SUV",
    city: "France",
    distance: 500,
    price: 200,
    maxGroupSize: 6,
    desc: "A premium SUV with top-notch comfort and safety features.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: carImg07,
    featured: false,
  },
  {
    id: "08",
    title: "All-Terrain Off-Roader",
    city: "Thailand",
    distance: 500,
    price: 130,
    maxGroupSize: 5,
    desc: "Built for adventure, this off-roader can handle any terrain.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: carImg03,
    featured: false,
  },
];

export default cars;
