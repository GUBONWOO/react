import React, { useState } from 'react';

export default function AppMentor() {
  const [person, SetPerson] = useState({
    name: 'ellie',
    title: 'pront',
    mentors: [
      {
        name: 'bop',
        title: 'high-pront',
      },
    ],
  });
  return (
    <div>
      <h1>
        {person.name} is {person.title}
      </h1>
      <p>
        {person.name} mentor is {person.mentor.name}({person.mentor.title})
      </p>
      <button
        onClick={() => {
          const name = prompt(`what's your mentor's name?`);
          SetPerson((person) => ({
            ...person,
            mentor: { ...person.mentor, name },
          }));
        }}
      >
        change mentor's name
      </button>
      <button
        onClick={() => {
          const title = prompt(`what's your mentor's title?`);
          SetPerson((person) => ({
            ...person,
            mentor: { ...person.mentor, title },
          }));
        }}
      >
        change mentor's title
      </button>
    </div>
  );
}
