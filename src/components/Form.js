import React, { Component } from 'react'


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
        this.props.web.eth.sendTransaction({to: this.state.opcion1, from: this.state.opcion2, value: this.props.web.utils.toWei(this.state.monto, "ether")})
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
                <label>Opcion 1</label>
                <input
                    type="text"
                    value={this.state.opcion1}
                    onInput={this.handleOption1Change}
                />

                <br />

                <label>Opcion 2</label>
                <input
                    type="text"
                    value={this.state.opcion2}
                    onInput={this.handleOption2Change}
                />

                <br />

                <label>Monto</label>
                <input
                    type="number"
                    value={this.state.monto}
                    onInput={this.handleMonto}
                />
                <button type="submit">Transferir</button>
            </form>
        );
    }
}

export default Form