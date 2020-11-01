import { persons } from "./file2";
import PropTypes from 'prop-types';

export function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

 function WelcomePerson(props) {
    const {firstName, lastName, email} = props.person
    return <p>{firstName} {lastName} {email}</p>;
}

export function MultiWelcome() {
    return <div>

            <Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edith" />

            <WelcomePerson person={persons[0]} />
            <WelcomePerson person={persons[1]} />
            <WelcomePerson person={persons[2]} />
            
            {persons.map(person => <WelcomePerson key={person.email}
                person={person} />)}

        </div>

    ;
}

WelcomePerson.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
}

WelcomePerson.defaultProps = {
    firstName : "test",
    lastName: "test",
    email:"test"
}

