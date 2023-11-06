import { createContext } from 'react';

const UserContext = createContext({ loggedInUser: 'default user from context api' });

export default UserContext;
