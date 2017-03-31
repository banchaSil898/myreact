import React, {Component} from 'react';

class Itembox extends Component{
	render(){
		let {itemName,detail} = this.props;
		return(
				<div className="itemBox">
					<div>{itemName}</div>
					<div>
						Item {detail}
					</div>
				</div>
			);
	};
}

export default Itembox;