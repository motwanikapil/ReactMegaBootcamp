class Hello extends React.Component{
  static defaultProps = {
    from : 'Anonymous',
    to : 'Anonymous',
    bangs : 1
  }
  render(){
    
    let bang = "!".repeat(this.props.bangs)
    return <div>
      <h1>Hello {this.props.to} from {this.props.from}{bang}</h1>
    </div>
  }
}