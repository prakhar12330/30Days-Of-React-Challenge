//Que: Write a simple component called App that displays a button with the text "Click me!" and logs a Clicked! message to the console when clicked.
const App = () => {
	// Edit this component

	function log()
	{
		console.log("Clicked!");
	}
	return <button onClick={log()} data-testid="button">Click me!</button>
}

export default App

