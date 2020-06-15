import React from 'react';
import Body from "./Body.jsx";

class SidebarMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenu: 'home',
    }

    this.addClass = ''
  }

  getClass = () =>  {
    if (this.props.isVisible) {
      this.addClass = 'visible'
    } else {
      this.addClass = 'hide'
    }
    return this.addClass;
  }

 
  render() {
   return (
    <>
        <div className="flex">
            <ul className = {this.getClass() + " " + "sidebar"}>
                <li onClick= {() => this.setState({activeMenu : "home"})}>Home</li>
                <li onClick= {() => this.setState({activeMenu : "about"})}>About</li>
                <li onClick= {() => this.setState({activeMenu : "contact"})}>Contact</li>
            </ul>
            
            <Body activeMenu = {this.state.activeMenu}/>
        </div>
    </>
   )
  }
}
export default SidebarMenu
