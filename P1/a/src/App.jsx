function Header(props) {
  // console.log(props);
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

function Part(props) {
  return (
    <>
      <p>{props.name} {props.exercises}</p>
    </>
  )
}

function Contents(props) {
  // console.log(props.parts[0].name)
  return (
    <>

      <Part name={props.parts[0].name} exercises={props.parts[0].exercises}/>
      <Part name={props.parts[1].name} exercises={props.parts[1].exercises}/>
      <Part name={props.parts[2].name} exercises={props.parts[2].exercises}/>
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
  const course = {
    course: 'Half stack application development',
    parts: [
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
      }

    ]
  }

  return (
    <>
      <Header course={course.course}/>
      <Contents parts={course.parts}/>
      <Total total={course.parts[0].exercises + course.parts[0].exercises + course.parts[0].exercises}/>
    </>
  )
}
