import React, {Component} from 'react';

class Itembox extends Component{
	render(){
		let {itemName,detail} = this.props;
		return(
				<div className="itemBox">
					<div className ="itemHeader">{itemName}</div>
					<div className ="itemDetail">
						Item {detail}
					</div>
				</div>
			);
	};
}

export default Itembox;