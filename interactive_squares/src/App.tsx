import React from 'react'
import './App.css'

// const p1State = Array(3)
//   .fill(0)
//   .map(() => Array(3).fill(0))
const p1State = [
  [0, 1, 2],
  [10, 11, 12],
  [20, 21, 22],
]

const p2State = Array(3)
  .fill(0)
  .map(() => Array(3).fill(0))

const diceFaces = [1, 2, 3, 4, 5, 6]

function App() {
  const p1Cols = []
  const p2Cols = []
  for (let i = 0; i < p1State.length; i++) {
    p1Cols.push(<Col colData={p1State[i]} key={i} />)
    p2Cols.push(<Col colData={p2State[i]} key={i} />)
  }
  return (
    <>
      <div className="PlayerBoard">{p1Cols}</div>
      <div className="DiceRoller">Dice goes here!</div>
      <div className="PlayerBoard">{p2Cols}</div>
    </>
  )
}

const Col = (props: { colData: number[] }) => {
  // TODO: make the dice show in columns instead of rows
  const columns = []
  for (let i = 0; i < p1State[0].length; i++) {
    columns.push(<Dice colData={props.colData} num={i} key={`c-${i}`} />)
  }
  return <div className="colParent">{columns}</div>
}

const Dice = (props: { colData: number[]; num: number }) => {
  return (
    <div
      className="box"
      id={
        diceFaces.includes(props.colData[props.num])
          ? props.colData[props.num].toString()
          : 'empty'
      }
    >
      {props.colData[props.num]}
    </div>
  )
}

export default App
