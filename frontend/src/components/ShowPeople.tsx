import classes from "./ShowPeople.module.css";

interface person {
  name: string;
  img: string;
  bio: string;
}

export default function () {
  const people: person[] = [
    {
      name: "John Smith",
      img: "pictures/person_1.jpg",
      bio: `"Legend says he posts daily haikus that can move giants to tears."`,
    },
    {
      name: "Samantha Lee",
      img: "pictures/person_2.jpg",
      bio: `"Renowned for her witty puns that have earned her a legion of adoring fans."`,
    },
    {
      name: "Trevor Brown",
      img: "pictures/person_3.jpg",
      bio: `"His philosophical rambles keep his followers contemplating the meaning of life."`,
    },
  ];


  return (
    <>
      <div className={classes.container}>
      <p className={classes.heading} >Every person you meet adds a unique stroke to your canvas.</p>
          <Person person = {people[0]} />
          <Person person = {people[1]} />
          <Person person = {people[2]} />

      </div>
    </>
  );
}

const Person = ({person}: {person:person} ) => {
  return (
    <div>
      <img className={classes.img} src={person.img} alt="" />
      <h3 className={classes.name}> {person.name} </h3>
      <p className={classes.bio}> {person.bio} </p>
    </div>
  );
};
