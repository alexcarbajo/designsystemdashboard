import React from "react"
import { Link } from "gatsby"
import Hamburger from '../assets/hamburger'
import Copy from '../assets/copy'
import LinkIcon from '../assets/link'
import Envelope from '../assets/envelope'
import Select from '../components/select'

export default () => 
    <div className="c-Menu">
        <div className="c-Menu__main">
            <Link to="/" className="c-Menu__item isActive">
                <Hamburger></Hamburger>
            </Link>
        </div>

        <div className="c-Menu__settings">
            <Select state="c-Select--alt">
                <option>EN</option>
            </Select>

            <Select state="c-Select--alt">
                <option>CLX</option>
            </Select>

            <Select state="c-Select--alt">
                <option>Standard</option>
            </Select>
        </div>

        <div className="c-Menu__footer">
            <a href="https://git.innofis.local/code-front-end/code-ui/code-ui-components/" target="_blank" rel="noopener noreferrer" className="c-Menu__item">
                <Copy></Copy>
            </a>
            <a href="https://www.crealogix.design/design-system" target="_blank" rel="noopener noreferrer" className="c-Menu__item">
                <LinkIcon></LinkIcon>
            </a>
            <a href="mailto:design-es@crealogix.com" className="c-Menu__item">
                <Envelope></Envelope>
            </a>
        </div>
    </div>