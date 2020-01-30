import React, { Component } from 'react';
import PropTypes from 'prop-types';

const CONTEXT_OBSERVABLE_MAP = {
  isLogin: 0b001,
  name: 0b010,
  logout: 0b100,
};

const UserContext = React.createContext(
  {
    isLogin: false,
    name: 'Guest',
    logout: () => {},
  },
  (prev, next) => {
    let result = 0b000;
    if (prev.isLogin !== next.isLogin) result |= CONTEXT_OBSERVABLE_MAP.isLogin;
    if (prev.name !== next.name) result |= CONTEXT_OBSERVABLE_MAP.name;
    if (prev.logout !== next.logout) result |= CONTEXT_OBSERVABLE_MAP.logout;
    return result;
  }
);
// 0b000 - nic nie uległo zmianie
// 0b001 - zmianiła się wartość isLogin
// 0b010 - zmieniło się imię użytkownika
// 0b100 - zmieniły się funkcja

// 0b101 - zmieniła się wartość login i  funkcja logout
// 0b011 - zmieniła się wartość login i  imię użytkownika
// 0b110 - zmieniło się imię i funkcja logout
// 0b111 - zmieniło się wszystko

class UserProvider extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);

    this.state = {
      name: 'Krystian',
      isLogin: true,
      logout: this.logout,
    };
  }

  logout() {
    this.setState({ isLogin: false });
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

export { UserProvider, UserContext, UserConsumer, CONTEXT_OBSERVABLE_MAP };
