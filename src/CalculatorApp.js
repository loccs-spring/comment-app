import React, {Component} from 'react'


class Input extends Component {
    constructor() {
        super()
        this.state = {
            num:0
        }

    }
    handleContentChange(event) {
        //console.log('change')
        this.setState(
            {
                num: event.target.value
            }
        )
        if (this.props.onSetNum) {
            //console.log(this.state.num)
            this.props.onSetNum(event.target.value)
        }
    }
    render () {
        return (
            <div>
                <input type='number' value={this.state.num}
                       onChange={this.handleContentChange.bind(this)} />
            </div>
        )
    }
}

class PercentageShower extends Component {
    constructor() {
        super()

    }
    render () {
        var out = new Number(this.props.num)
        out = out * 100
        out = out.toFixed(2);
        return (
            <div>{out}%</div>
        )
    }
}

class PercentageApp extends Component {
    constructor() {
        super()
        this.state = {num:0}

    }
    onSetNum(num) {
        this.setState({
            num: num
        })
    }
    render () {
        return (
            <div>
                <Input onSetNum={this.onSetNum.bind(this)}/>
                <PercentageShower num={this.state.num}/>
            </div>
        )
    }
}


export default PercentageApp






