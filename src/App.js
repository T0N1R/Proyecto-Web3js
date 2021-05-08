import React, { Component } from 'react'
import Web3 from 'web3'
import './App.css'
import * as ReactBootStrap from "react-bootstrap";
import Form from './components/Form';
import { Info } from './components/Info';

class App extends Component {
  componentWillMount() {
    this.loadBlockchainData()
  }

  onChange() {
    this.loadBlockchainData()
  }

  async loadBlockchainData() {
    const web3 = new Web3("http://localhost:8721")
    const accounts = await web3.eth.getAccounts()
    const accountList = []
    const indexList = []
    const balanceList = []
    var i
    for (i = 0; i < accounts.length; i++) {
      let accountBalance = web3.utils.fromWei(await web3.eth.getBalance(accounts[i]), "ether")
      indexList.push(i)
      accountList.push([accounts[i]])
      balanceList.push(accountBalance)
    }

    console.log(indexList)
    console.log(accountList)
    console.log(balanceList)

    // {this.state.accountList.map(account => <tr> <td>{account[0]}</td> <td>{account[1]}</td> <td>{account[2]}</td> </tr>)}

    this.setState({
      webProvider: web3,
      accountList: accountList,
      account1: accounts[0],
      balance1: web3.utils.fromWei(await web3.eth.getBalance(accounts[0]), "ether"),
      account2: accounts[1],
      balance2: web3.utils.fromWei(await web3.eth.getBalance(accounts[1]), "ether"),
      account3: accounts[2],
      balance3: web3.utils.fromWei(await web3.eth.getBalance(accounts[2]), "ether"),
      account4: accounts[3],
      balance4: web3.utils.fromWei(await web3.eth.getBalance(accounts[3]), "ether"),
      account5: accounts[4],
      balance5: web3.utils.fromWei(await web3.eth.getBalance(accounts[4]), "ether"),
      account6: accounts[5],
      balance6: web3.utils.fromWei(await web3.eth.getBalance(accounts[5]), "ether"),
      account7: accounts[6],
      balance7: web3.utils.fromWei(await web3.eth.getBalance(accounts[6]), "ether"),
      account8: accounts[7],
      balance8: web3.utils.fromWei(await web3.eth.getBalance(accounts[7]), "ether"),
      account9: accounts[8],
      balance9: web3.utils.fromWei(await web3.eth.getBalance(accounts[8]), "ether"),
      account10: accounts[9],
      balance10: web3.utils.fromWei(await web3.eth.getBalance(accounts[9]), "ether"),
      blockNum: await web3.eth.getBlockNumber(),
      idNode: await web3.eth.getChainId(),
      gasPrice: await web3.eth.getGasPrice()
    })


  }

  constructor(props) {
    super(props)
    this.state = {
      account1: '',
      balance1: '',
      account2: '',
      balance2: '',
      account3: '',
      balance3: '',
      account4: '',
      balance4: '',
      account5: '',
      balance5: '',
      account6: '',
      balance6: '',
      account7: '',
      balance7: '',
      account8: '',
      balance8: '',
      account9: '',
      balance9: '',
      account10: '',
      balance10: '',
    }
  }

  render() {
    return (
      <div>
        <div className="center">
          <h1>Implementación Web3.js</h1>
        </div>

        <div className="container">

          <ReactBootStrap.Table striped bordered hover size="sm" responsive="true">
            <thead>
              <tr>
                <th>#</th>
                <th>Dirección</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>{this.state.account1}</td>
                <td>{this.state.balance1}</td>
              </tr>
              <tr>
                <td>2</td>
                <td>{this.state.account2}</td>
                <td>{this.state.balance2}</td>
              </tr>
              <tr>
                <td>3</td>
                <td>{this.state.account3}</td>
                <td>{this.state.balance3}</td>
              </tr>
              <tr>
                <td>4</td>
                <td>{this.state.account4}</td>
                <td>{this.state.balance4}</td>
              </tr>
              <tr>
                <td>5</td>
                <td>{this.state.account5}</td>
                <td>{this.state.balance5}</td>
              </tr>
              <tr>
                <td>6</td>
                <td>{this.state.account6}</td>
                <td>{this.state.balance6}</td>
              </tr>
              <tr>
                <td>7</td>
                <td>{this.state.account7}</td>
                <td>{this.state.balance7}</td>
              </tr>
              <tr>
                <td>8</td>
                <td>{this.state.account8}</td>
                <td>{this.state.balance8}</td>
              </tr>
              <tr>
                <td>9</td>
                <td>{this.state.account9}</td>
                <td>{this.state.balance9}</td>
              </tr>
              <tr>
                <td>10</td>
                <td>{this.state.account10}</td>
                <td>{this.state.balance10}</td>
              </tr>
            </tbody>
          </ReactBootStrap.Table>

          <div className="right">
            <Info blockNum={this.state.blockNum} idNode={this.state.idNode} gasPrice={this.state.gasPrice}></Info>
            <br/>
            <Form web={this.state.webProvider} onChange={this.onChange.bind(this)} ></Form>
          </div>

        </div>

      </div>
    );
  }
}

export default App;