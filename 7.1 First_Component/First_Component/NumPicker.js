function getNum(){
	return Math.floor(Math.random() * 10) + 1
}

class NumPicker extends React.Component{
	render(){
		let num = getNum()
		return <div>
			<h1>Your Number is : {num}</h1>
			{
				num === 7 && <img src='https://media2.giphy.com/media/xTiTnet7xRv1GPTShi/giphy.gif?cid=ecf05e478wvc8lg2fjutyoxwpqidwgp52ivxe67a34w4sir1&rid=giphy.gif&ct=g' />
			}
		</div>
	}
}

ReactDOM.render(<NumPicker />,document.getElementById('root'))