import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Slider from "./components/Slider/Slider";

function App() {
  const NFTS_DATA = [
    {
      id: 8624,
      collectionName: "Bored Ape Yacht Club",
      price: 0.5,
      img: "https://ik.imagekit.io/bayc/assets/ape2.png",
    },
    {
      id: 1548,
      collectionName: "Bored Ape Yacht Club",
      price: 1.5,
      img: "https://ik.imagekit.io/bayc/assets/ape1.png",
    },
    {
      id: 157,
      collectionName: "Hello Kitty and Friends World",
      price: 7.5,
      img: "https://img.seadn.io/files/93210779480befe6c0e332a4b78bc472.png?fit=max&w=600",
    },
    {
      id: 2598,
      collectionName: "Bored Ape Yacht Club",
      price: 10.5,
      img: "https://ik.imagekit.io/bayc/assets/ape3.png",
    },
    {
      id: 8624,
      collectionName: "Hello Kitty and Friends World",
      price: 8.5,
      img: "https://img.seadn.io/files/091d38d7f0038a2c90db53407a32c530.png?fit=max&w=600",
    },
    {
      id: 4579,
      collectionName: "Bored Ape Yacht Club",
      price: 5.5,
      img: "https://ik.imagekit.io/bayc/assets/ape2.png",
    },
  ];

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Slider data={NFTS_DATA} />
    </div>
  );
}

export default App;
