import * as React from 'react';
import './App.css';
// じゃんけん定義
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
        {/* <header className="App-header">
          <h1 className="App-title">じゃんけん</h1>
          <h3>手を選んでくだしゃい</h3>
          
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default App;

// JankenClass
export class Janken extends React.Component < {} , {myJankenValue: number; enemyJankenValue: number; result: string; } > { 
  // コンストラクタ初期設定
  constructor(props: {}) {
    super(props);
    this.state = {
      myJankenValue: 0,
      enemyJankenValue: 1,
      result: '',
    };
    // this.handleJankenChange = this.handleJankenChange.bind(this);
  }
  // じゃんけん処理
  handleJankenChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const enemyHand = Math.floor(Math.random() * 3);
    let resultText = '';
    if (parseInt(e.currentTarget.value, 10) === enemyHand) {
      resultText = 'draw';
    } else {
      console.warn(handtypes[parseInt(e.currentTarget.value, 10)].win);
      console.warn(handtypes[enemyHand].lose);
      resultText = handtypes[parseInt(e.currentTarget.value, 10)].win === handtypes[enemyHand].id ? 'win' : 'lose';
      // if (handtypes[parseInt(e.currentTarget.value, 10)].win === handtypes[enemyHand].lose) {
      //   resultText = '勝ち';
      // } else {
      //   resultText = '負け';
      // }
    }
    // データをセット
    this.setState(
      {myJankenValue: parseInt(e.currentTarget.value, 10),
       enemyJankenValue: enemyHand,
       result: resultText
       }
    );
  }

  render() {
    // 表示
    return (
      <div className="wrap">
        <div className="game-control">
          <input type="image" src="img/guu.png" name="guu" value="0" id="guu" alt="guu" height="50" width="50" onClick={this.handleJankenChange}/>
          <input type="image" src="img/tyoki.png" name="tyoki" value="1" id="tyoki" alt="tyoki" height="50" width="50" onClick={this.handleJankenChange}/>
          <input type="image" src="img/paa.png" name="paa" value="2" id="paa" alt="paa" height="50" width="50" onClick={this.handleJankenChange}/>
        </div>
        <p>you:<img width="25" src={window.location.origin + '/img/' + handtypes[this.state.myJankenValue].id + '.png'} alt=""/></p>
        <p>cpu:<img width="25" src={window.location.origin + '/img/' + handtypes[this.state.enemyJankenValue].id + '.png'} alt=""/></p>
          結果:<span className={this.state.result}>{this.state.result}</span>
        </div>
      
    );
  }
}
