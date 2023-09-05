import React, { useState } from 'react';

export default function AppMentor() {
  const [person, SetPerson] = useState(initialPerson);
  const handleDelete = () => {
    {
      const name = prompt(`누구`);
      SetPerson((person) => ({
        ...person,
        mentors: person.mentors.filter((m) => m.name !== name),
      }));
    }
  };
  const handleChange = () => {
    {
      const prev = prompt(`누구의 이름으로 변경`);
      const current = prompt(`무엇으로 변경`);
      SetPerson((person) => ({
        ...person,
        mentors: person.mentors.map((mentor) => {
          if (mentor.name === prev) {
            return { ...mentor, name: current };
          }
          return mentor;
        }),
      }));
    }
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
