import React from 'react';

// function Hello() {
//   return (
//     <div>
//       <h1>hello,react</h1>
//       <h1>hello,我是屠永涛</h1>

//     </div>
//   );
// }
class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '屠永涛'
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h2>{this.props.age}</h2>
      </div>
    )
  }
}

export default Hello;