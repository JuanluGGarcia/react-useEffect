import { useState } from 'react';

const App = () => {
	const [counter, setCounter] = useState(0);
	return (
		<>
			<h1>{counter}</h1>
			<button onClick={() => setCounter(counter + 1)}>+1</button>
			<button onClick={() => setCounter(0)}>Reset</button>
			<button onClick={() => setCounter(counter - 1)}>-1</button>
		</>
	);
};

export default App;
