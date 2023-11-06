import User from './User';
import UserClass from './UserClass';
import { Component } from 'react';
import UserContext from '../utils/UserContext';

class AboutUs extends Component {
  constructor(props) {
    super(props);
    console.log('parent constructr called!!');
  }

  componentDidMount() {
    console.log('parent component did mount called!!');
  }

  render() {
    console.log('Parent render called');
    return (
      <div>
        <h1>About Us</h1>
        <h2>This is Namaste React Course by Akshay Saiuni</h2>
        <h3>Enjoying</h3>
        <h4 className='func-comp'>Functional Component</h4>
        <User name={'Prince - Functional comp'} />
        <h4 className='cls-comp'>Class Based Component</h4>
        <UserClass name={'Prince - Class Comp'} />
        {/**classbased component is not havinghook so we have to pass this way */}
        <div>
          LoggedIn user:{' '}
          <UserContext.Consumer>
            {({ loggedInUser }) => <h4 className='text-xl font-bold'>{loggedInUser}</h4>}
          </UserContext.Consumer>
        </div>
      </div>
    );
  }
}

// const AboutUs = () => {
//   return (
//     <div>
//       <h1>About Us</h1>
//       <h2>This is Namaste React Course by Akshay Saiuni</h2>
//       <h3>Enjoying</h3>
//       <h4 className='func-comp'>Functional Component</h4>
//       <User name={'Prince - Functional comp'} />
//       <h4 className='cls-comp'>Class Based Component</h4>
//       <UserClass name={'Prince - Class Comp'} />
//     </div>
//   );
// };

export default AboutUs;
