function getSymbol(data){
    return data[Math.floor(Math.random()*data.length)]
}

class MachineComponent extends React.Component{
    render(){
        let data = this.props.data
        let s1 = getSymbol(data)
        let s2 = getSymbol(data)
        let s3 = getSymbol(data)
        let result
          if (s1 === s2 && s2 === s3) {
            result = 'You Win!!!'
          }
          else{
            result = 'You Lose!!'
          }
        
        return <div>
            <h1>{s1}{s2}{s3}</h1>
            <h1>{result}</h1>
        </div>
    }
}