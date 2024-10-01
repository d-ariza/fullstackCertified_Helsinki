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
      <Part name={props.part[0].name} exercises={props.part[0].exercises}/>
      <Part name={props.part[1].name} exercises={props.part[1].exercises}/>
      <Part name={props.part[2].name} exercises={props.part[2].exercises}/>
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
  const parts = [
      {
        name: 'Fundamentals of react',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      },
  ]
  return (
    <>
      <Header course={course}/>
      <Contents part={parts}/>
      <Total total={parts[0].exercises + parts[1].exercises + parts[2].exercises}/>
    </>
  )
}
