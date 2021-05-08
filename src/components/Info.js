import React, { Component } from 'react'
import './Info.css'

export class Info extends Component {

    render() {
        return(
            <div>
                <p className="texto">CURRENT BLOCK: {this.props.blockNum}</p>
                <p className="texto">CURRENT CHAIN ID: {this.props.idNode}</p>
                <p className="texto">GAS PRICE: {this.props.gasPrice}</p>
            </div>
        )
    }
}