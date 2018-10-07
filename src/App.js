import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [{"acName":"IRA-5200", "acCash":"5763", "acPR":"2", "acTotal":"5625"},
            {"acName":"IRA-5200", "acCash":"5263", "acPR":"8", "acTotal":"3214"},
            {"acName":"IRA-5200", "acCash":"2763", "acPR":"3", "acTotal":"9856"}],
      sort: true      
    };
    this.getSort=this.getSort.bind(this);
  }
  getSort() {
    
    if(this.state.sort){
      const ASC = this.state.list.sort((a,b) => (a.acTotal > b.acTotal) ? 1 : ((b.acTotal > a.acTotal) ? -1 : 0));
      this.setState({
      list: ASC
      });
      
    } else {
      const DESC = this.state.list.sort((a,b) => (a.acTotal < b.acTotal) ? 1 : ((b.acTotal < a.acTotal) ? -1 : 0));
      this.setState({
      list: DESC
      });
      
    }

    this.setState({sort: !this.state.sort})
    
  }
  render() {
    return (
      <div className="App">
       <table>
       <thead>
       <tr><th>Account</th><th><a onClick={this.getSort}>{this.state.sort ? '>' : '<'}Available Cash</a></th></tr>
       </thead>
       <tbody>
          {this.state.list.map((item) => <tr key={item.acTotal}><td>{item.acName}</td><td>{item.acCash}</td></tr>)}         
          
       </tbody>
       </table> 
      </div>
    );
  }
}

export default App;
