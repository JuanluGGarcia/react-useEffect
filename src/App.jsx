import { useEffect, useState } from 'react';

const App = () => {
	// const [counter, setCounter] = useState(1);
	// const [todo, setTodo] = useState([]);
	const [pxScroll, setPxScroll] = useState(0);

	useEffect(() => {
		console.log('USE EFFECT');
		window.addEventListener('scroll', () => changePxScroll(setPxScroll));

		return () => {
			console.log('CLEAN UP');
			window.removeEventListener('scroll', changePxScroll);
		};
		// si counter es menor o igual a 0 no se ejecuta useEffect
		// 	if (counter <= 0) return;
		// 	fetchToDo(setTodo, counter);
		// }, [counter]); // cuando cambie counter, se ejecuta de nuevo useEffect
	}, [pxScroll]);
	return (
		<>
			<h1 style={{ position: 'fixed' }}>Te has desplazado {pxScroll}px</h1>
			{/* <h1>{todo.id}</h1>
			<h1>{todo.title}</h1>

			<h1>{counter}</h1>
			<button onClick={() => setCounter(counter + 1)}>+1</button>
			<button onClick={() => setCounter(1)}>Reset</button>
			<button onClick={() => setCounter(counter - 1)}>-1</button> */}
		</>
	);
};

const changePxScroll = setPxScroll => {
	setPxScroll(Math.round(scrollY));
};

// const fetchToDo = async (setTodo, counter) => {
// 	const response = await fetch(
// 		`https://jsonplaceholder.typicode.com/todos/${counter}`
// 	);

// 	const data = await response.json();
// 	setTodo(data);
// };

export default App;
