import Header from "./components/Header";
import UserInput from "./components/UserInput";
import ResultsTable from "./components/ResultsTable";
import { useState } from "react";

const INITIAL_VALUES = {
	initialInvestment: 10000,
	annualInvestment: 1200,
	expectedReturn: 6,
	duration: 10,
};

function App() {
  const [values, setValues] = useState(INITIAL_VALUES);

  const inputIsValid = values.duration > 0;
  
  function handleInputChange(id, value) {
    setValues(prevValues => {
      const newValues = {
        ...prevValues,
        [id]: Number(value), // or +value parses it to number too
      };
      return newValues; // Return the updated state for React
    });
  }

  return (
		<main>
			<Header />
			<UserInput onAnyValueChange={handleInputChange} values={values}/>
			{inputIsValid ? <ResultsTable values={values} /> : <p className="center">Please enter valid information</p>}
		</main>
	);
}

export default App
