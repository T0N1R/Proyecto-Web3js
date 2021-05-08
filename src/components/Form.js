import React, { Component } from 'react'
import "./Form.css"


export class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            opcion1: '',
            opcion2: '',
            monto: 0
        }
    }
    mySubmitHandler = (event) => {
        event.preventDefault();
        console.log(this.state);
        let option1Clean = this.state.opcion1.replace(/\s+/g, '')
        let option2Clean = this.state.opcion2.replace(/\s+/g, '')
        this.props.web.eth.sendTransaction({to: option1Clean, from: option2Clean, value: this.props.web.utils.toWei(this.state.monto, "ether")})
        this.props.onChange()
    }

    handleOption1Change = (event) => {
        this.setState({
            opcion1: event.target.value
        })

        console.log(this.state)
    }

    handleOption2Change = (event) => {
        this.setState({
            opcion2: event.target.value
        })

        console.log(this.state)
    }

    handleMonto = (event) => {
        this.setState({
            monto: event.target.value
        })
        console.log(this.state)
    }

    render() {
        return (
            <form onSubmit={this.mySubmitHandler}>

                <h4>Transferir ETH</h4>

                <label className="texto">Cuenta Destino: </label>
                <br/>
                <input
                    type="text"
                    value={this.state.opcion1}
                    onInput={this.handleOption1Change}
                />

                <br/>
                <br/>

                <label className="texto">Cuenta Origen: </label>
                <br/>
                <input
                    type="text"
                    value={this.state.opcion2}
                    onInput={this.handleOption2Change}
                />

                <br />
                <br/>

                <label className="texto">Monto</label>
                <br/>
                <input
                    type="number"
                    value={this.state.monto}
                    onInput={this.handleMonto}
                />
                <br/>
                <br/>
                <button type="submit">Transferir</button>
            </form>
        );
    }
}

export default Form