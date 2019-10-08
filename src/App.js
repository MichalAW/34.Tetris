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
		currentPiece : [ [1,0],[1,1],[1,2] ]
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
			


	rotate = () =>{
		let boardCopy = this.state.board.slice();
		let currentPieceCopy = this.state.currentPiece.slice();
		
		currentPieceCopy[0][0] += -1
		currentPieceCopy[0][1] += 1
		currentPieceCopy[1][0] += 0
		currentPieceCopy[1][1] += 0
		currentPieceCopy[2][0] += 1
		currentPieceCopy[2][1] += -1
		
		for(let i = 0; i < this.state.currentPiece.length; i++){
			boardCopy[this.state.currentPiece[i][0]][this.state.currentPiece[i][1]] = 'e'
		}
		
		for(let i = 0; i < currentPieceCopy.length; i++){
			boardCopy[currentPieceCopy[i][0]][currentPieceCopy[i][1]] = 'b'
		}
		
		this.setState({
			board: boardCopy,
			currentPiece: currentPieceCopy
		})
		console.log(this.state.board)
	}
  
	render(){ 
        return (
            <div>
                <button onClick = {this.rotate}>Rotate</button>
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