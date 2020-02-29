import React from 'react'
let listOfImages=[]
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  export default class Ball extends React.Component{
state={
count:1
}
importAll(r) {
    return r.keys().map(r);
}
componentWillMount() {
    listOfImages = this.importAll(require.context('../../../media/Event/', false, /\.(png|jpe?g|svg)$/));
}
updateCount=()=>{
    if(this.state.count!==4){
        this.setState({count:this.state.count+1})
    }else{
        this.setState({count:1})
    }
}
componentDidMount() {
    this.interval = setInterval(() => {
      this.updateCount()
    }, 3000);
  }
    render() {
        const {count}=this.state
        return (
          <div className="ball_container">    
          {listOfImages.map(item=>{return(
                <img src={item}  className={`ball`} style={{left:`${getRandomInt(100)}%`,top:`${getRandomInt(100)}%`}}/>
          )})}
          

          </div>
        )
      }
  }