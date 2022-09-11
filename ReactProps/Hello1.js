class Hello1 extends React.Component{
    render(){
        console.log(this.props)
        let bangs = "!".repeat(this.props.bangs)
        return <div>
            <h1>Hi {this.props.to} from {this.props.from} {bangs}</h1>
            <img src={this.props.img} />
        </div>
    }
}