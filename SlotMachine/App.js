class App extends React.Component{
    render(){
        return <div>
            <h1>Slot Machine!!!</h1>
            <MachineComponent data={['😍','🥰','😘']} />
        </div>
    }
}

ReactDOM.render(<App />, document.getElementById('root'))