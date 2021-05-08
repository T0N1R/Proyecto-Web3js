import React, { Component } from 'react'

export class Info extends Component {

    render() {
        return(
            <div>
                <p>CURRENT BLOCK: {this.props.blockNum}</p>
                <p>CURRENT CHAIN ID: {this.props.idNode}</p>
                <p>GAS PRICE: {this.props.gasPrice}</p>
            </div>
        )
    }
}