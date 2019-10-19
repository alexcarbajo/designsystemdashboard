import React from "react"
import { Link } from "gatsby"
import Media from "../components/media"

export default props => 
    <div className="o-ItemList">
        <div className="o-itemList__headline">
            <div className="o-ItemList__title">
                Baking How-to
            </div>
            <div className="o-itemList__menu">
                <Link className="c-Link" to="/contact/">See all ></Link>
            </div>
        </div>
        <div className="o-ItemList__list">
            <Media
                object="o-ItemList__item"
                title="How to level cake tops"
                image="https://images.unsplash.com/photo-1543362906-acfc16c67564?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=450&q=80"
                time="0:46"
                views="67.6k"
            />
            <Media
                object="o-ItemList__item"
                title="How to level cake tops"
                image="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=450&q=80"
                time="0:46"
                views="67.6k"
            />
            <Media
                object="o-ItemList__item"
                title="How to level cake tops"
                image="https://images.unsplash.com/photo-1543362906-acfc16c67564?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=450&q=80"
                time="0:46"
                views="67.6k"
            />
            <Media
                object="o-ItemList__item"
                title="How to level cake tops"
                image="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=450&q=80"
                time="0:46"
                views="67.6k"
            />
        </div>
    </div>