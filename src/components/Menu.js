import React from 'react';
class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '屠永涛123',
            age: 25
        }
    }
    render() {
       const a = {
            width: '100px',
            height: '60px',
            backgroundColor: 'pink'
       }
        return (
            <li style={a}>{this.state.age}</li>
        )
    }
}
export default Menu;