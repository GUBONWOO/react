import React from 'react';
import { useImmer } from 'use-immer';

export default function AppMentorsImmer() {
  const [person, updatePerson] = useImmer(personReducer, initialPerson);
  const handleDelete = () => {
    const name = prompt(`누구`);
    updatePerson((person) => {
      const index = person.mentors.findIndex((m) => m.name === name);
      person.mentors.splice(index, 1);
    });
  };
  const handleChange = () => {
    const prev = prompt(`누구의 이름으로 변경`);
    const current = prompt(`무엇으로 변경`);
    updatePerson((person) => {
      const mentor = person.mentors.find((m) => m.name === prev);
      mentor.name = current;
    });
  };
  const handleAdd = () => {
    const name = prompt(`name`);
    const title = prompt(`title`);
    updatePerson((person) => person.mentors.push({ name, title }));
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
