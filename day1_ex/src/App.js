
import './App.css';
import upper, { text1, text2, text3 } from "./file1";
import p from "./file2"
import { males, females} from "./file2"
import { Welcome, MultiWelcome } from "./file3"

let person = p;
const { firstName, email } = person;
const personv2 = { person, phone: 123456, friends: [...males, ...females] }



function App() {
  return (
    <div>
      <h2>Ex1</h2>
      <p>{text1}</p>
      <p>{text2}</p>
      <p>{text3}</p>
      <p>{upper("please uppercase me")}</p>

      <h2>Ex2</h2>
      <p>name: {firstName} email: {email}</p>
      {console.log([...males, ...females])}
      {console.log([...males, "Kurt", "Helle", ...females, "Tina"])}
      {console.log(personv2)}

      <h2>Ex3</h2>
      <MultiWelcome />
    </div>
  )
}

export default App;
