import { useQuiz } from "../contexts/QuizContext";

function StartScreen() {
  const { numQuestions, dispatch } = useQuiz();

  return (
    <div className="start">
      <h2>Welcome to The Quizify!</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <p className="start-text">The Quizify welcome screen features a clean, modern UI with a 15-question React challenge. It includes a cheerful emoji, a "Let's start" button, and footer links to GitHub and LinkedIn, offering a professional yet playful introduction.</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's start
      </button>
    </div>
  );
}

export default StartScreen;
