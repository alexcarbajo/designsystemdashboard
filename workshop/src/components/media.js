import React from "react"
import { Link } from "gatsby"

export default props => 
    <div className={`${props.object} c-Media`}>
        <div className="c-Media__headline">
            <img className="c-Media__image" src={`${props.image}`} />
        </div>
        <div className="c-Media__content">
            <div className="c-Media__title">{props.title}</div>
            <div className="c-Media__description">
                {props.time} - {props.views} views
            </div>
        </div>
    </div>