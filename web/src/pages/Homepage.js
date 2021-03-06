import Jumbo from '../components/Jumbo'
import Cards from '../components/Cards'
import Cat from "../components/CatAnimations/SleepyCat";
import "../components/CatAnimations/walkingCat.css";

const Homepage = () => {
  return (
    <div>
      <Jumbo />
      <Cards />
      <div className="container move">
        <div className="cat walking"></div>
      </div>
    </div>
  );
};

export default Homepage;
