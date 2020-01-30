import React, { Component } from 'react';
import PropTypes from 'prop-types';

const UserContext = React.createContext({ isLogin: false, name: 'Guest' });

class UserProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Guest',
      isLogin: false,
    };
  }

  render() {
    const { children } = this.props;
    return (
      <UserContext.Provider value={{ ...this.state }}>
        {children}
      </UserContext.Provider>
    );
  }
}
// ES6 - static propTypes it is ES7
UserProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

UserContext.displayName = 'User';

const UserConsumer = UserContext.Consumer;

export { UserProvider, UserContext, UserConsumer };
