class App1 extends React.Component{
    render(){
        return (
          <div>
            <Hello1
              to='Ringo'
              from='Paul'
              bangs={4}
              isFunny
              data={[1, 2, 3, 4, 5]}
              img='https://images.unsplash.com/photo-1660846600128-7f9d0a42b87e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80'
            />
          </div>
        )
    }
}

ReactDOM.render(<App1 />, document.getElementById('root'))