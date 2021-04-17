import React, { Component } from 'react'
import axios from 'axios'

export default class LatestUpdate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            baseAPI: props.baseAPI
        }
    }
    componentDidMount() {
        const { baseAPI } = this.state
        axios.get(`${baseAPI}/updatelog/log.json`)
            .then(res => this.setState({ data: res.data }))
    }

    render() {
        const { data } = this.state
        // console.log('data', data)
        return (
            <div className="card">
                <h1 className="card-heading">Latest Update</h1>
                <div className="custom-scroller">
                    {data && data.reverse().map((item, index) => (<div key={index} className="card mb-2 mx-2">
                        <div className="card-body">
                            <div className="card-title">{item.update}</div>
                            <div className="card-text">
                                {new Date(item.timestamp * 1000).toLocaleString(undefined, { timeZone: 'Asia/Kolkata' })}
                            </div>
                        </div>
                    </div>))
                    }
                </div>
            </div>
        )
    }
}
