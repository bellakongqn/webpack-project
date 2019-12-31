'use strict'

import React from 'react'
import ReactDom from 'react-dom'
import './search.less'
import logo from './images/desk.png'

class Search extends React.Component{
    render(){
        return(
            <div className="search-text">
                <img src={logo } alt=""/>
                Search Text
            </div>
        )
    }
}

ReactDom.render(
    <Search />,
    document.getElementById('root')
)
