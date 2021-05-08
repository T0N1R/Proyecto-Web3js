import React, { Component } from 'react'
import './Info.css'

export class Info extends Component {

    render() {
        return(
            <div>
                <h4>Información General</h4>
                <p className="texto">Bloque actual: {this.props.blockNum}</p>
                <p className="texto">CHAIN ID: {this.props.idNode}</p>
                <p className="texto">Precio de gas: {this.props.gasPrice}</p>
            </div>
        )
    }
}