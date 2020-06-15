import React from 'react'
import SidebarMenu from './SidebarMenu.jsx'
import ToggleButton from './ToggleButton.jsx'

class Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: true,
    }
  }

  toggeleSidebar = () => {
    return this.setState({isVisible: !this.state.isVisible})
  }

  render() {
    return (
      <>
        <div className="container">
          <SidebarMenu isVisible={this.state.isVisible} />
          <ToggleButton handleClick={this.toggeleSidebar}>
            {' '}
            {this.state.isVisible ? 'Hide' : 'Show'}{' '}
          </ToggleButton>
        </div>
      </>
    )
  }
}

export default Container;
