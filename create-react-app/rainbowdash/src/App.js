import { useState } from 'react'

import './App.css';
import Hello from './Hello'
import Bye from './Bye'
import ChangeStudent from './ChangeStudent'

function App() {
  const [student, setStudent] = useState('Gottfried')

  const listOfStudents = ["Van", "Briana", "Nico"]

  console.log(useState('Jang'))

  const learner = "Joe"

  const sayBoo = () => console.log("boo")
  return (
    <div className="App App-header">
      <Hello name={learner} />
      <Hello name="Alison" />
      <Hello name={student} />
      <ChangeStudent setStudent={setStudent} sayBoo={sayBoo} />
      <Bye><h2>Abby</h2></Bye>
      {/* <div>{listOfStudents}</div> */}
      {listOfStudents.map(student => <Hello name={student} key={student} />)}
    </div>
  );
}

export default App;
