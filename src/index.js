import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';



import CommentApp from './CommentApp'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import PercentageApp from "./CalculatorApp";
import Clock from "./Clock"

class Index extends Component {
    constructor() {
        super()
        this.state = {isShowClock: true}
    }

    handleShowOrHide() {
        this.setState({
            isShowClock: !this.state.isShowClock
        })
    }

    render () {
        return(
            <div>
                {this.state.isShowClock ? <Clock /> : null}
                <button onClick={this.handleShowOrHide.bind(this)} > 显示或隐藏</button>
            </div>
        )
    }
}



class Post extends Component {
    render () {
        return (<p ref={p => {this.p = p} }
                   onClick={() => {console.log(this.p.clientHeight)}}>


            {this.props.content}</p>)
    }
}


class Card extends Component {
    render () {
        return (
            <div className='card'>
                <div className='card-content'>
                    {this.props.children}
                </div>
            </div>
        )
    }
}





class BlackBorderContainer extends Component {
    /* TODO */
    render() {
        return(
            <div>
                {this.props.children.map((child,i) => {
                    return(
                        <div key={i} className="border">{child}</div>
                    )
                })}

            </div>
        )
    }
}


const getDefaultStyledPost = (defaultStyle) => {
    /* TODO */
    class Post extends Component {
        render( ) {
            const newStyle = {...defaultStyle, ...this.props.style}
            return(<p style={newStyle}> </p>)
        }
    }
    return Post
}

ReactDOM.render(<CommentApp />, document.getElementById('root'));
registerServiceWorker();
