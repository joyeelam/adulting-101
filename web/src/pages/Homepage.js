import Jumbo from '../components/Jumbo'
import Cards from '../components/Cards'
import Cat from "../components/CatAnimations/SleepyCat";
import "../components/CatAnimations/walkingCat.css";

const Homepage = () => {
  return (
    <div>
      <Jumbo />
      <Cards />
      <div className="container">
        <div className="cat walk-then-sit"></div>
      </div>
    </div>
  );
};

export default Homepage;
