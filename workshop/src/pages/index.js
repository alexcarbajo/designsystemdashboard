import React from "react"
import { Link } from "gatsby"
import Codeui from '../assets/codeui'
import Menu from '../components/menu'
import Search from '../components/search'
import Select from '../components/select'
import Group from '../components/group'
import Component from '../components/component'
import ComponentItem from '../components/componentItem'

export default () => 
    <div className="o-Dashboard">
        <div className="o-Dashboard__sidebar">
            <div className="o-Dashboard__logo">
                <Link to="/">
                    <Codeui></Codeui>
                </Link>
            </div>

            <div className="o-Dashboard__menu">
                <Menu></Menu>
            </div>
        </div>

        <div className="o-Dashboard__content">
            <div className="o-Dashboard__header">
                <Search placeholder="Find component"></Search>

                <Select>
                    <option>English</option>
                    <option>Arab</option>
                </Select>

                <Select>
                    <option>CLX</option>
                    <option>NCB</option>
                    <option>BAJ</option>
                    <option>SAIB</option>
                </Select>

                <Select>
                    <option>Standard</option>
                    <option>Gold</option>
                    <option>Silver</option>
                    <option>Platinum</option>                    
                </Select>
            </div>

            <div className="o-Dashboard__item">
                <Group title="Shared">
                    <Component title="Layout">
                        <ComponentItem title="Grid"></ComponentItem>
                        <ComponentItem title="Shell"></ComponentItem>
                    </Component>
                </Group>

                <Group title="Shared">
                    <Component title="Layout" badge="Desktop">
                        <ComponentItem title="Grid"></ComponentItem>
                        <ComponentItem title="Shell"></ComponentItem>
                    </Component>

                    <Component title="Layout">
                        <ComponentItem title="Grid"></ComponentItem>
                        <ComponentItem title="Shell"></ComponentItem>
                    </Component>

                    <Component title="Layout">
                        <ComponentItem title="Grid"></ComponentItem>
                        <ComponentItem title="Shell"></ComponentItem>
                    </Component>
                </Group>

                <Group title="Shared">
                    <Component title="Layout">
                        <ComponentItem title="Grid" badge="mobile"></ComponentItem>
                        <ComponentItem title="Shell"></ComponentItem>
                    </Component>

                    <Component title="Layout" badge="mobile">
                        <ComponentItem title="Grid"></ComponentItem>
                        <ComponentItem title="Shell"></ComponentItem>
                    </Component>

                    <Component title="Layout">
                        <ComponentItem title="Grid"></ComponentItem>
                        <ComponentItem title="Shell"></ComponentItem>
                    </Component>
                </Group>

                <Group title="Shared">
                    <Component title="Layout">
                        <ComponentItem title="Grid"></ComponentItem>
                        <ComponentItem title="Shell"></ComponentItem>
                    </Component>

                    <Component title="Layout">
                        <ComponentItem title="Grid"></ComponentItem>
                        <ComponentItem title="Shell"></ComponentItem>
                    </Component>

                    <Component title="Layout">
                        <ComponentItem title="Grid"></ComponentItem>
                        <ComponentItem title="Shell"></ComponentItem>
                    </Component>
                </Group>
            </div>
        </div>
    </div>
