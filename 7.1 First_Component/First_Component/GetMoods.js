function getMood(){
	let moods = ['Angry', 'Sad', 'Depressed','Paranoid', 'Silly', 'Happy','Excited']
	return moods[Math.floor(Math.random() * moods.length)]
}

class GetMoods extends React.Component{
	render(){
		return <div>
			<h1>My Current Mood is : {getMood()}!</h1>
		</div>
	}
}

ReactDOM.render(<GetMoods />,document.getElementById('root'))