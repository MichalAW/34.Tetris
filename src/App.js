import React, { Component } from 'react';
function Square(props){
	// key for all colorss
	function getColor(key){
		switch(key) {
			case "e" : return 'grey';
			case "b" : return 'blue';
			case "v" : return 'violet';
			case "g" : return 'green';
			case 'r' : return 'red';	
		}
	}
	
	let stylez = {
	    backgroundColor: getColor(props.colorKey)
	} 
	
	
    return (
		<td style={stylez}></td>
    );
}


class App extends React.Component{
	state = {
		board : [
			['e','e','e'],
			['b','b','b'],
			['e','e','e']
		],
	}
	
	makeRow = (num) =>{
		return(
			<section className="cols">
				<div className="col-one">
					<tr className="grey-row">
						<Square colorKey={this.state.board[num][0]}/>
						<Square colorKey={this.state.board[num][1]}/>	
						<Square colorKey={this.state.board[num][2]}/>
					</tr>
					<tr className="blue-row">
						<Square colorKey={this.state.board[num][0]}/>
						<Square colorKey={this.state.board[num][1]}/>	
						<Square colorKey={this.state.board[num][2]}/>
					</tr>
					<tr className="violet-row">
						<Square colorKey={this.state.board[num][0]}/>
						<Square colorKey={this.state.board[num][1]}/>	
						<Square colorKey={this.state.board[num][2]}/>
					</tr>
				</div>
				<div className="col-two">
					<tr className="grey-row">
						<Square colorKey={this.state.board[num][0]}/>
						<Square colorKey={this.state.board[num][1]}/>	
						<Square colorKey={this.state.board[num][2]}/>
					</tr>
					<tr className="blue-row">
						<Square colorKey={this.state.board[num][0]}/>
						<Square colorKey={this.state.board[num][1]}/>	
						<Square colorKey={this.state.board[num][2]}/>
					</tr>
					<tr className="violet-row">
						<Square colorKey={this.state.board[num][0]}/>
						<Square colorKey={this.state.board[num][1]}/>	
						<Square colorKey={this.state.board[num][2]}/>
					</tr>
				</div>
				<div className="col-three">
					<tr className="grey-row">
						<Square colorKey={this.state.board[num][0]}/>
						<Square colorKey={this.state.board[num][1]}/>	
						<Square colorKey={this.state.board[num][2]}/>
					</tr>
					<tr className="blue-row">
						<Square colorKey={this.state.board[num][0]}/>
						<Square colorKey={this.state.board[num][1]}/>	
						<Square colorKey={this.state.board[num][2]}/>
					</tr>
					<tr className="violet-row">
						<Square colorKey={this.state.board[num][0]}/>
						<Square colorKey={this.state.board[num][1]}/>	
						<Square colorKey={this.state.board[num][2]}/>
					</tr>
				</div>
			</section>
		)		
	}
  
	render(){ 
        return (
            <div>
                <table>
                    <tbody>
                        {this.makeRow(0)}
                        {this.makeRow(1)}
                        {this.makeRow(2)}				
                    </tbody>
                </table>
            </div>
        )
    }
}

export default App;