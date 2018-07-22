import * as React from 'react';
import './App.css';

const handtypes = [
  {
      'id': 'guu',
      'text': 'グー',
      'win': 'tyoki',
      'lose': 'paa'
  }, {
      'id': 'tyoki',
      'text': 'チョキ',
      'win': 'paa',
      'lose': 'guu'
  }, {
      'id': 'paa',
      'text': 'パー',
      'win': 'guu',
      'lose': 'tyoki'
  }
];

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">じゃんけん</h1>
          <h3>手を選んでくだしゃい</h3>
          
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

export class Janken extends React.Component < {} , {myJankenValue: number; enemyJankenValue: number; result: string; } > { 
  constructor(props: {}) {
    super(props);
    this.state = {
      myJankenValue: 0,
      enemyJankenValue: 1,
      result: ''
    };
    // this.handleJankenChange = this.handleJankenChange.bind(this);
  }

  handleJankenChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const enemyHand = Math.floor(Math.random() * 3);
    let resultText = '';
    if (parseInt(e.currentTarget.value, 10) === enemyHand) {
      resultText = '引き分け';
    } else {
      resultText = handtypes[parseInt(e.currentTarget.value, 10)].win === handtypes[enemyHand].lose ? '勝ち' : '負け';
      // if (handtypes[parseInt(e.currentTarget.value, 10)].win === handtypes[enemyHand].lose) {
      //   resultText = '勝ち';
      // } else {
      //   resultText = '負け';
      // }
    }

    this.setState(
      {myJankenValue: parseInt(e.currentTarget.value, 10),
       enemyJankenValue: enemyHand,
       result: resultText
       }
    );
  }

  render() {
    
    return (
      <div>
        <div className="game-control">
          <input type="image" src="img/guu.png" name="guu" value="0" id="guu" alt="guu" height="50" width="50" onClick={this.handleJankenChange}/>
          <input type="image" src="img/tyoki.png" name="tyoki" value="1" id="tyoki" alt="tyoki" height="50" width="50" onClick={this.handleJankenChange}/>
          <input type="image" src="img/paa.png" name="paa" value="2" id="paa" alt="paa" height="50" width="50" onClick={this.handleJankenChange}/>
        </div>
          プレイヤー:<span className="result_player">{this.state.myJankenValue}{/*ここにプレイヤーの出した手を表示*/}</span>
          CPU:<span className="result_cpu">{this.state.enemyJankenValue}{/* ここにCPUの出した手を表示*/}</span>
          結果:<p className="result_box">{this.state.result}</p>
        </div>
      
    );
  }
}
