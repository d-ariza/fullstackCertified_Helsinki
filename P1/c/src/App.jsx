import {useState} from "react";

export default function App(){
  const [ counter, setCounter ] = useState(0);

  // setTimeout(
  //   () => setCounter(counter + 1),1000
  // );

  function  handleClick () {
    setCounter(counter + 1);
    console.log('clicked');
  }
function zero(){
    return setCounter(0);
}
  return (
    <>
      {counter}
      <button onClick={handleClick}>plus</button>
      <button onClick={ zero}>zero</button>
    </>
  );
}