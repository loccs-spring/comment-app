import React, {Component} from 'react'

class Post extends Component {
    constructor() {
        super()
        this.state = {
            content: '数据加载中...'
        }
    }

    componentWillMount() {
        this.handleRefresh()
    }
    handleRefresh() {
        this.setState({content: '数据加载中...'})
        getPostData().then((postContent) => {
            this.setState({content: postContent})
        })
    }
    render() {
        return (
            <div>
                <div className="post-content">{this.state.content}</div>
                <button onClick={this.handleRefresh.bind(this)}></button>
            </div>
        )
    }





    getPostData() {
        return new Promise((resolve, reject) =>
        {
            resolve()
        })

    }


}