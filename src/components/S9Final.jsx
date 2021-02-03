import React, { Component } from "react";
import UncontrolledLottie from './UncontrolledLottie';




class S9Final extends Component {
	

	state = {
		username: "",
	};
 
	UNSAFE_componentWillReceiveProps = (newProps) => {
		this.setState({ username: newProps.username });
	};

	render() {
		return (
			
			<div className="container pt-0 main-content-container">
				<h1 className="center"> You Are On Your Way To Saving!</h1>
				<br></br>
                <div id="target"> 
				{/* <UncontrolledLottie /> */}
				
				</div>
            </div>
		);
	}
}

export default S9Final;