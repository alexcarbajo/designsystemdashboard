import React from "react"
import { Link } from "gatsby"
import Hamburger from '../assets/hamburger'
import Copy from '../assets/copy'
import LinkIcon from '../assets/link'
import Envelope from '../assets/envelope'

export default () => 
    <div className="c-Menu">
        <div className="c-Menu__main">
            <Link To="index" className="c-Menu__item isActive">
                <Hamburger></Hamburger>
            </Link>
        </div>

        <div className="c-Menu__footer">
            <a href="#" className="c-Menu__item">
                <Copy></Copy>
            </a>
            <a href="https://www.crealogix.design/design-system" target="_blank" className="c-Menu__item">
                <LinkIcon></LinkIcon>
            </a>
            <a href="mailto:design-es@crealogix.com" className="c-Menu__item">
                <Envelope></Envelope>
            </a>
        </div>
    </div>