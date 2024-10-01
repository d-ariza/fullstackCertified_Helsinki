function Header(props) {
  // console.log(props);
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

function Part(props) {
  // console.log(props)
  return (
    <>
      <p>{props.name} {props.exercises}</p>
    </>
  )
}

function Contents(props) {
  // console.log(props);
  return (
    <>
      <Part name={props.part.part1.name} exercises={props.part.part1.exercises}/>
      <Part name={props.part.part2.name} exercises={props.part.part2.exercises}/>
      <Part name={props.part.part3.name} exercises={props.part.part3.exercises}/>
    </>
  )
}

function Total(props) {
  // console.log(props)
  return (
    <>
      <p>Number of exercises {props.total}</p>
    </>
  )
}

export default function App() {
  const course = 'Half stack application development';
  const parts = {
    part1:
      {
        name: 'Fundamentals of react',
        exercises: 10
      },
    part2:
      {
        name: 'Using props to pass data',
        exercises: 7
      },
    part3:
      {
        name: 'State of a component',
        exercises: 14
      },
  }
  return (
    <>
      <Header course={course}/>
      <Contents part={parts}/>
      <Total total={parts.part1.exercises + parts.part2.exercises + parts.part3.exercises}/>
    </>
  )
}
