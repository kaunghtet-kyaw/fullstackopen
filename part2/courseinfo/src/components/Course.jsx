const Header = ({ name }) => (
  <h1>{name}</h1>
);

const Total = ({ parts }) => {
  const total = parts.reduce((s, p) => s + p.exercises, 0);
  return (
    <b>
      total of {total} exercises
    </b>
  );
}

const Part = ({ name, exercises }) => (
  <p>
    {name} {exercises}
  </p>
);

const Content = ({ parts }) => {
  return (
    parts.map(part =>
      <Part key ={part.id} name = {part.name} exercises={part.exercises} />
    )
  );
}

const Course = ({ course }) => (
  <div>
    <Header name={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </div>
);

export default Course;
