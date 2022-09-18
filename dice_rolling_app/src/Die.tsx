import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import {
  faDiceOne,
  faDiceTwo,
  faDiceThree,
  faDiceFour,
  faDiceFive,
  faDiceSix,
} from '@fortawesome/free-solid-svg-icons'
import './Die.css'
import React from 'react'

interface DieState {
  face: string
  rolling: boolean
  display: any
}
class Die extends React.Component<any, DieState> {
  constructor(props: any) {
    super(props)

    this.state = {
      face: props.face,
      rolling: props.rolling,
      display: {
        one: faDiceOne,
        two: faDiceTwo,
        three: faDiceThree,
        four: faDiceFour,
        five: faDiceFive,
        six: faDiceSix,
      },
    }
  }
  render() {
    const { face, rolling } = this.props
    return (
      <div>
        <FontAwesomeIcon
          icon={this.state.display[face]}
          className={`Die ${rolling && 'Die-shaking'}`}
        />
      </div>
    )
  }
}

export default Die
