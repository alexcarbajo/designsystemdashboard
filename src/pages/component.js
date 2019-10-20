import React from "react"
import Header from '../components/header'
import Sidebar from '../components/sidebar'
import Selector from '../components/selector'
import Search from '../components/search'

export default () => 
    <div className="o-Dashboard">
        <Sidebar></Sidebar>
        

        <div className="o-Dashboard__content">
            <Header></Header>
            
            <Selector></Selector>

            <div className="o-Dashboard__item o-Dashboard__item--alt">

            </div>
        </div>

        <div className="c-Footer">
            <div className="c-Footer__item">
                Find
            </div>
            <div className="c-Footer__item isActive">
                View
            </div>
            
            <div className="c-Footer__item">
                States
            </div>

            <div className="c-Footer__dropdown">
                <Search placeholder="Search component" state="c-Search--alt"></Search>
            </div>
        </div>
    </div>
