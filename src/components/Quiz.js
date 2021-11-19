import "../App.css";
import { Questions } from "../helpers/Questions";
import { useState, useEffect } from "react";
import axios from "axios";

import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";

function Quiz() {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [optionChosen, setOptionChosen] = useState("");
  const [questions, setQuestions] =useState([])
	const { score, setScore, setGameState } = useContext(GameStateContext);
	useEffect(() => {
		axios
			.get("https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean")
			.then((response) => setQuestions(response.data.results));
	}, []);
  console.log(questions.category)

	const chooseOption = (option) => {
		setOptionChosen(option);
	};

	const nextQuestion = () => {
		if (Questions[currentQuestion].asnwer === optionChosen) {
			setScore(score + 1);
		}
		setCurrentQuestion(currentQuestion + 1);
	};

	const finishQuiz = () => {
		if (Questions[currentQuestion].asnwer === optionChosen) {
			setScore(score + 1);
		}
		setGameState("finished");
	};

	return (
		<div className="Quiz">
			<h1>{Questions[currentQuestion].Question_category}</h1>
			<div className="lower">
				<h1>{Questions[currentQuestion].prompt}</h1>
				<div className="questions">
					<button
						onClick={() => {
							chooseOption("optionA");
							if (currentQuestion === Questions.length - 1) {
								finishQuiz();
							} else {
								nextQuestion();
							}
						}}
					>
						{Questions[currentQuestion].optionA}
					</button>
					<button
						onClick={() => {
							chooseOption("optionB");
							if (currentQuestion === Questions.length - 1) {
								finishQuiz();
							} else {
								nextQuestion();
							}
						}}
					>
						{Questions[currentQuestion].optionB}
					</button>

					{/* {currentQuestion == Questions.length - 1 ? (
          <button onClick={finishQuiz} >Finish Quiz</button>
        ) :(<button onClick={nextQuestion}>Next</button>)} */}
				</div>
			</div>
		</div>
	);
}

export default Quiz;
