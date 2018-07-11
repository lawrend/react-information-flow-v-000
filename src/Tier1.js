import React, { Component } from 'react'
import { getRandomColor, getReducedColor } from './randomColorGenerator.js'
import Tier2 from './Tier2'


export default class Tier1 extends Component {

  constructor(props) {
    super(props)
    const initialColor = getRandomColor()
    const initialChildColor = getReducedColor(initialColor)
    const initialGrandChildColor = getReducedColor(initialChildColor)
    this.state = {
      color: initialColor,
      childColor: initialChildColor,
      grandChildColor: initialGrandChildColor,
    }
    this.clickOnTier = this.clickOnTier.bind(this)
  }

  clickOnTier = (event) => {
    let newRando = getRandomColor();
    let singleReduction = getReducedColor(newRando);
    let doubleReduction = getReducedColor(singleReduction);

    if(event.target.className === 'tier3') {
       this.setState({
        grandChildColor: newRando,
      })
    } else if(event.target.className ==='tier2') {
        this.setState({
        childColor: newRando,
        grandChildColor: singleReduction,
      })
    } else {
        this.setState({
        color: newRando,
        childColor: singleReduction,
        grandChildColor: doubleReduction,
      })
    };
  }

  render() {
    return (
      <div onClick={this.clickOnTier} className="tier1" style={{backgroundColor: this.state.color, color: this.state.color}}>
        <Tier2 clickOnTier={this.clickOnTier} color={this.state.color} childColor={this.state.childColor}grandChildColor={this.state.grandChildColor}/>
        <Tier2 clickOnTier={this.clickOnTier} color={this.state.color} childColor={this.state.childColor} grandChildColor={this.state.grandChildColor}/>
      </div>
    )
  }
}
