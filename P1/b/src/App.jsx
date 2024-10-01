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
      <Part name={props.part.p1.name} exercises={props.part.p1.exercises}/>
      <Part name={props.part.p2.name} exercises={props.part.p2.exercises}/>
      <Part name={props.part.p3.name} exercises={props.part.p3.exercises}/>
    </>
  )
}

function Total(props) {
  // console.log(props.part)
  return (
    <>
      <p>Number of exercises {props.part.p1.exercises + props.part.p2.exercises + props.part.p3.exercises}</p>
    </>
  )
}

export default function App() {
  const course = {
    name: 'Half stack application development',
  parts:{
    p1:{
      name: 'Fundamentals of react',
        exercises
    :
      10
    }
  ,
    p2:{
      name: 'Using props to pass data',
        exercises
    :
      7
    }
  ,
    p3:{
      name: 'State of a component',
        exercises
    :
      14
    }
  ,
  }
}
  return (
    <>
      <Header course={course.name}/>
      <Contents part={course.parts}/>
      <Total part={course.parts}/>
    </>
  )
}
