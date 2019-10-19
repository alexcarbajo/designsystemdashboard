import React from "react"
import { Link } from "gatsby"
import ItemList from "../components/itemList"
import Header from "../components/header"
import Button from "../components/button"

export default () => 
    <div class="o-Layout">
        <div class="o-Layout__item">
            <Header headerText="Workshop" />
            <ItemList />

            <Button type="primary" title="Button" href="#">asd</Button>
            <Link className="c-Link c-Link--highlight" to="/contact/">Contact</Link>
        </div>
    </div>
