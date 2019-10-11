import React, { Component } from 'react';

function Square(props){
	
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
			<tr>
				<Square colorKey={this.state.board[num][0]}/>
				<Square colorKey={this.state.board[num][1]}/>	
				<Square colorKey={this.state.board[num][2]}/>
			</tr>
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