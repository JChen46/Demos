import React from 'react'
import Die from './Die'
import './DiceRoller.css'

interface DiceState {
  sides: string[]
  die1: string
  die2: string
  rolling: boolean
}

class DiceRoller extends React.Component<{}, DiceState> {
  constructor(props: any) {
    super(props)

    this.state = {
      sides: ['one', 'two', 'three', 'four', 'five', 'six'],
      die1: 'one',
      die2: 'two',
      rolling: false,
    }
    this.roll = this.roll.bind(this)
  }

  roll() {
    const { sides } = this.state
    this.setState({
      die1: sides[Math.floor(Math.random() * sides.length)],
      die2: sides[Math.floor(Math.random() * sides.length)],
      rolling: true,
    })

    console.log(
      `new states: die1: ${this.state.die1}, die2: ${this.state.die2}`
    )

    // Start timer of one second when rolling starts
    setTimeout(() => {
      // Set rolling to false when timer is done
      this.setState({ rolling: false })
    }, 1000)
  }

  render() {
    const handleBtn = this.state.rolling ? 'RollDice-rolling' : ''
    const { die1, die2, rolling } = this.state
    return (
      <div className="RollDice">
        <div className="RollDice-container">
          <Die face={die1} rolling={rolling} />
          <Die face={die2} rolling={rolling} />
        </div>
        <button
          className={handleBtn}
          disabled={this.state.rolling}
          onClick={this.roll}
        >
          {this.state.rolling ? 'Rolling' : 'Roll Dice!'}
        </button>
      </div>
    )
  }
}

export default DiceRoller
