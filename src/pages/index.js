import React from "react"
import Header from '../components/header'
import Sidebar from '../components/sidebar'
import Group from '../components/group'
import Component from '../components/component'
import ComponentItem from '../components/componentItem'
import Search from '../components/search'

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

                    <Component title="Objects">
                        <ComponentItem title="Page Layout Base"></ComponentItem>
                        <ComponentItem title="Public Layout"></ComponentItem>
                        <ComponentItem title="Private Layout"></ComponentItem>
                    </Component>

                    <Component title="Icons">
                        <ComponentItem title="Icon Base"></ComponentItem>
                    </Component>
                </Group>

                <Group title="Forms">
                    <Component title="Base">
                        <ComponentItem title="Text"></ComponentItem>
                        <ComponentItem title="Public Text"></ComponentItem>
                        <ComponentItem title="Password"></ComponentItem>
                        <ComponentItem title="Public Password"></ComponentItem>
                        <ComponentItem title="Number"></ComponentItem>
                        <ComponentItem title="Textarea"></ComponentItem>
                    </Component>

                    <Component title="Select">
                        <ComponentItem title="Select"></ComponentItem>
                        <ComponentItem title="Hierarchical Select" badge="mobile"></ComponentItem>
                    </Component>

                    <Component title="Checkbox">
                        <ComponentItem title="Checkbox"></ComponentItem>
                    </Component>

                    <Component title="Radiobutton">
                        <ComponentItem title="Radiobutton"></ComponentItem>
                    </Component>

                    <Component title="Autocomplete">
                        <ComponentItem title="Autocomplete"></ComponentItem>
                    </Component>

                    <Component title="Datepicker">
                        <ComponentItem title="Datepicker" badge="mobile"></ComponentItem>
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

            <div className="c-Footer__dropdown">
                <Search placeholder="Search component" state="c-Search--alt"></Search>
            </div>
        </div>
    </div>
