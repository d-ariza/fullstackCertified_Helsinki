function Header(props) {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

function Content(props) {
  return (
    <>
      <p>{props.name} {props.exercises}</p>
    </>
  )
}

function Total(props) {
  return (
    <>
      <p>Number of exercises {props.total}</p>
    </>
  )
}

export default function App() {

  const course = 'Half stack application development';
  const part1 = 'Fundamentals of react';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;

  return (
    <>
      <Header course={course}/>
      <Content name={part1} exercises={exercises1} />
      <Content name={part2} exercises={exercises2} />
      <Content name={part3} exercises={exercises3} />
      <Total total = {exercises1 + exercises2 + exercises3} />
    </>
  )
}
