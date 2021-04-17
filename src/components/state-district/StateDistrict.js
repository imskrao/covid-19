import React, { Component } from 'react'
import axios from 'axios'

import { base_api } from '../../constant'

import './style.css'

export default class StateDistrict extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        axios.get(`${base_api}/state_district_wise.json`)
            .then(res => this.setState({ data: res.data }))
            .catch(error => console.log(error))
    }

    renderTable(data) {
        // console.log('data table', data)
        return (<div className="distric-table">
            <table>
                <thead>
                    <tr>
                        <th>Active</th>
                        <th>Confirmed</th>
                        <th>Deceased</th>
                        <th>Recovered</th>
                        {/* <th>notes</th> */}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{data.active}</td>
                        <td>{data.confirmed}</td>
                        <td>{data.deceased}</td>
                        <td>{data.recovered}</td>
                        {/* <td>{data.notes}</td> */}
                    </tr>
                </tbody>
            </table>
        </div>)
    }

    renderParticularDistricData(data) {
        return Object.keys(data).map((item, index) => {
            return (<div key={index} className="table-outer">
                <div className="table-title">{item}</div>
                {this.renderTable(data[item])}
            </div>)
        })
    }

    renderDistricData(data) {
        return Object.keys(data).map((item, index) => {
            if (item === 'districtData') {
                return (<React.Fragment key={index}>
                    { this.renderParticularDistricData(data[item])}
                </React.Fragment>
                )
            }
            return null
        })
    }

    renderStateData() {
        const { data } = this.state
        return Object.keys(data).map((item, index) => {
            if (item !== 'State Unassigned') {
                return (<div key={index} className="card">
                    <h1 className="card-subtitle">{item}</h1>
                    { this.renderDistricData(data[item])}
                </div>)
            }
            return null
        })
    }

    render() {
        return (
            <div className="card">
                <h1 className="card-heading">State District Wise Data</h1>
                {this.renderStateData()}
            </div>
        )
    }
}
