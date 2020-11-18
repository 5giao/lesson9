import React, { Component } from 'react'
import list from "../../Mock/data"
import Detail from "../../component/Detail"

class Home extends Component {
    state = {
        car: [],
        isShow: false,
        search: []
        //search: ['A', "B", 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', "O", 'P', 'Q', "R", 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    }
    componentDidMount() {
        const arr = [];
        list.data.forEach((item, index) => {
            if (!arr.includes(item.Spelling.slice(0, 1))) {
                arr.push(item.Spelling.slice(0, 1))
            }
        })
        console.log(arr, 'arr')
        this.setState({
            car: list.data,
            search: arr
        })
    }
    show() {
        this.setState({
            isShow: !this.state.isShow
        })
    }
    scrollTo(item) {
        // const arr = []
        // this.state.car.forEach((val, ind) => {
        //     if (val.Spelling.slice(0, 1) === item) {
        //         arr.push(ind);
        //         console.log(arr)
        //     }
        // })
        const index=this.state.car.findIndex((val)=>val.Spelling.slice(0, 1) === item)
        window.scrollTo(0, index * 60)
    }
    render() {
        console.log(this.state.car)
        const { car, isShow, search } = this.state;
        return <div className="home">
            <ul className='car'>
                {
                    car.map((item, index) => {
                        return <li key={index} onClick={() => { this.show() }}>
                            <img src={item.CoverPhoto} alt="" />
                            {item.Name}
                        </li>
                    })
                }
            </ul>
            <ul className='search'>
                {
                    search.map((item, index) => {
                        return <li key={index} onClick={() => { this.scrollTo(item) }}>{item}</li>
                    })
                }
            </ul>
            {isShow ? <Detail /> : ''}
        </div>
    }
}

export default Home