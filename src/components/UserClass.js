import React from 'react';

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    //useState in Class components
    this.state = {
      // count: 1,
      // //create another state
      // count1: 0,
      userInfo: {
        name: 'Dummy',
        location: 'Bangalore',
      },
    };
    // console.log('child constructor called!!');
  }

  async componentDidMount() {
    // console.log('child component did mount called!!');
    const data = await fetch('https://api.github.com/users/leeton012');
    const json = await data.json();
    console.log('🚀 ~ file: UserClass.js:20 ~ UserClass ~ componentDidMount ~ json:', json);

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log('componment did upfate called!!');
  }

  render() {
    console.log('child render called!!');
    const { name, location, avatar_url, login } = this.state.userInfo;
    // const { count, count1 } = this.state;
    return (
      <div className='user-card'>
        <div className='user'>
          <img src={avatar_url} />
          <h2>Name: {name}</h2>
          <h2>Location: {location}</h2>
          <h2>Contact: {login}</h2>
        </div>
      </div>
    );
  }
}

export default UserClass;

/**
 *  ----- Mounting ------
 * Constructor will call with dummy data
 * Render will call with Dummy data  <HTML Dummy/>
 * Component Did Mount will call
 *      <Api call>
 *      <this.state will update with updated value>
 *
 * ..... Update
 *  Render will call with new api data
 *  <HTML will update with new data>
 *   ComponentDidiUpdate will call
 *
 *
 */
