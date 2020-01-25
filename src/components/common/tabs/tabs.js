import React from 'react';
import PropTypes from 'prop-types';
import Tab from './tab';
import Button from '../button';
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
    const { activeTab } = this.state;

    return (
      <div className={styles.tabs__menu}>
        {React.Children.map(children, (tab, index) => {
          if (tab.type === Tab) {
            return (
              <>
                <Button
                  key={tab.props.titleTab}
                  label={tab.props.titleTab}
                  active={activeTab === index}
                  handleClickButton={() => this.handleTab(index)}
                />
                {/* <button
                  type='button'
                  key={tab.props.titleTab}
                  className={
                    activeTab === index
                      ? `${styles.tabs__button} ${styles['tabs__button-active']}`
                      : styles.tabs__button
                  }
                  onClick={() => this.handleTab(index)}>
                  <h3 className={styles.tabs__title}>{tab.props.titleTab}</h3>
                </button> */}
              </>
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
