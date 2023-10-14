import React from 'react';

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    //useState in Class components
    this.state = {
      count: 1,
      //create another state
      count1: 0,
    };
    console.log('child constructor called!!');
  }

  componentDidMount() {
    console.log('child component did mount called!!');
  }

  render() {
    console.log('child render called!!');
    const { name } = this.props;
    const { count, count1 } = this.state;
    return (
      <div className='user-card'>
        <div className='user'>
          <h2>Name: {name}</h2>
          <h2>Count: {count}</h2>
          <h2>Count1: {count1}</h2>
          <button
            onClick={() => {
              this.setState({
                count: this.state.count + 1,
              });
            }}>
            COUNT ++
          </button>
          <h2>Location: Kolkata</h2>
          <h2>Contact: @PrinceM47510445</h2>
        </div>
      </div>
    );
  }
}

export default UserClass;
