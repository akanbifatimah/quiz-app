import "../App.css";
import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";

function Menu() {
	const { gameState, setGameState, userName, setUserName } =
		useContext(GameStateContext);
	return (
		<div className="Menu">
			<b>
				
				<h3>
					Welcome to the <br /> Trivia Challenge!
				</h3>
			</b>
      <h4>You will be presented <br /> with 10 true or false <br /> questions.</h4>

      <h4>Can you score 100%?</h4>

			<button
				onClick={() => {
					setGameState("playing");
				}}
			>
				Begin
			</button>
		</div>
	);
}

export default Menu;
