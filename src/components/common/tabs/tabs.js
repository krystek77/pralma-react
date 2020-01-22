import React from 'react';
import PropTypes from 'prop-types';
import Tab from './tab';
import styles from './tabs.module.scss';

class Tabs extends React.Component {
  constructor(props) {
    super();
    this.state = {
      activeTab: props.defaultActiveTab,
    };
  }

  handleTab(activeTab) {
    this.setState({ activeTab });
  }

  renderMenu() {
    const { children } = this.props;
    return (
      <div className={styles.tabs__menu}>
        {React.Children.map(children, (tab, index) => {
          if (tab.type === Tab) {
            return (
              <button
                type='button'
                key={tab.props.titleTab}
                className={styles.tabs__button}
                onClick={() => this.handleTab(index)}>
                {tab.props.titleTab}
              </button>
            );
          }
          throw new Error('The element provided is not of correct type');
        })}
      </div>
    );
  }

  render() {
    const { activeTab } = this.state;
    const { children } = this.props;
    return (
      <div className={styles.tabs}>
        {this.renderMenu()}
        {React.Children.toArray(children)[activeTab]}
      </div>
    );
  }
}

Tabs.propTypes = {
  defaultActiveTab: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

Tabs.defaultProps = {
  defaultActiveTab: 0,
};

export default Tabs;
