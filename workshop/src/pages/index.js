import React from "react"
import Header from '../components/header'
import Sidebar from '../components/sidebar'
import Group from '../components/group'
import Component from '../components/component'
import ComponentItem from '../components/componentItem'

export default () => 
    <div className="o-Dashboard">
        <Sidebar></Sidebar>
        

        <div className="o-Dashboard__content">
            <Header></Header>

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
        </div>
    </div>
