// Que: Create a component called App that displays the number of times the user has hovered a button with the text “Hover Me”. The count should be displayed in an h1 element and updated each time the user hovers over the button. The initial value of the count should be set to 0.

import {useState} from 'react';
const App = () => {
	//returns a statefull value and a function to change it. 
	const [count,setCount]= useState(0);
	return (
		<div>
			<button data-testid="button" 
			onMouseEnter={
				function(){
                 return setCount(count+1);
				}
			}
			>Hover Me</button>
			<h1 data-testid="count">{count}</h1>
		</div>
	)
}

export default App
