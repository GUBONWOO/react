import React, { useReducer } from 'react';
import personReducer from './reducer/person-reducer';
export default function AppMentor() {
  // const [person, SetPerson] = useState(initialPerson);
  const [person, dispatch] = useReducer(personReducer, initialPerson);
  const handleDelete = () => {
    const name = prompt(`누구`);
    dispatch({ type: 'deleted', name });
  };
  const handleChange = () => {
    const prev = prompt(`누구의 이름으로 변경`);
    const current = prompt(`무엇으로 변경`);
    dispatch({ type: 'updated', prev, current });
  };
  const handleAdd = () => {
    const name = prompt(`name`);
    const title = prompt(`title`);
    dispatch({ type: 'added', name, title });
  };
  return (
    <div>
      <h1>
        {person.name} is {person.title}
      </h1>
      <p>{person.name} mentor is :</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button onClick={handleChange}>change mentor's name</button>
      <button onClick={handleDelete}>Delete mentor</button>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

const initialPerson = {
  name: 'ellie',
  title: 'pront',
  mentors: [
    {
      name: 'bop',
      title: 'high-pront',
    },
    {
      name: 'james',
      title: 'high-pront',
    },
  ],
};
