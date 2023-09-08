import React, { useCallback, useMemo, useReducer, memo } from 'react';
import personReducer from './reducer/person-reducer';
export default function AppMentorsButton() {
  // const [person, SetPerson] = useState(initialPerson);
  const [person, dispatch] = useReducer(personReducer, initialPerson);
  const handleDelete = useCallback(() => {
    const name = prompt(`누구`);
    dispatch({ type: 'deleted', name });
  }, []);
  const handleChange = useCallback(() => {
    const prev = prompt(`누구의 이름으로 변경`);
    const current = prompt(`무엇으로 변경`);
    dispatch({ type: 'updated', prev, current });
  }, []);
  const handleAdd = useCallback(() => {
    const name = prompt(`name`);
    const title = prompt(`title`);
    dispatch({ type: 'added', name, title });
  }, []);
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
      <Button text='change' onClick={handleChange} />
      <Button text='del' onClick={handleDelete} />
      <Button text='add' onClick={handleAdd} />
    </div>
  );
}

const Button = memo(({ text, onClick }) => {
  console.log('Button', text, 're-rendering');
  const result = useMemo(() => calculateSomething(), []);
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: 'black',
        color: 'white',
        borderRadius: '20px',
        margin: '0.4rem',
      }}
    >
      {`${text} ${result}`}
    </button>
  );
});

function calculateSomething() {
  for (let i = 0; i < 10000; i++) {
    console.log('wow');
  }
  return 10;
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
