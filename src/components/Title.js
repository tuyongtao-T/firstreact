import React from 'react';
class Title extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '屠永涛123',
            age: 25
        }
    }
    render() {
        return (
           <div>你是我的小蘋果</div>
        )
    }
}
export default Title;