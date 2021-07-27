import './static/Trivia.css'
import {useSelector} from 'react-redux'

import Settings from "../containers/quiz/Settings";
import Question from "../containers/quiz/Question";
import Final from "../containers/quiz/Final";

import Cat4 from "../components/CatAnimations/SmolCat";


const Trivia = () => {
  const questions = useSelector((state) => state.questions);
  const questionIndex = useSelector((state) => state.index);

  let component;

  if (questions.length && questionIndex + 1 <= questions.length) {
    component = <Question />;
  } else if (!questions.length) {
    component = <Settings />;
  } else {
    component = <Final category={questions[0].category} />;
  }

  return (
    <div className="quiz-container">
      {component}
      <Cat4 />

    </div>
  );
};

export default Trivia;
