
import React, { Component } from 'react';

class Nav extends Component{

constructor(props) {
super(props);
this.clickMe=this.clickMe.bind(this);
this.state = {
	isOpened:false,
};
}

clickMe()
{
this.setState({isOpened: !this.state.isOpened});
}

render() {
	let dropdownText;
	if (this.state.isOpened)
	{dropdownText = <div>Вы нажали на меня</div>;}
	
return (
<div onClick={this.clickMe}>
	Нажмите на меня!
	{dropdownText}
</div>

)
}
}

export default Nav;