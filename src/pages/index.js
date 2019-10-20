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
                <Group title="Views">
                    <Component title="Login">
                        <ComponentItem title="Standard" badge="desktop"></ComponentItem>
                        <ComponentItem title="Classic" badge="desktop"></ComponentItem>
                    </Component>

                    <Component title="MFA">
                        <ComponentItem title="Standard" badge="desktop"></ComponentItem>
                        <ComponentItem title="Classic" badge="desktop"></ComponentItem>
                    </Component>

                    <Component title="Dashboard">
                        <ComponentItem title="Standard" badge="desktop"></ComponentItem>
                        <ComponentItem title="Classic" badge="desktop"></ComponentItem>
                    </Component>

                    <Component title="Transaction">
                        <ComponentItem title="Standard" badge="desktop"></ComponentItem>
                        <ComponentItem title="Classic" badge="desktop"></ComponentItem>
                    </Component>
                </Group>
                
                <Group title="Shared">
                    <Component title="Layout">
                        <ComponentItem title="Grid"></ComponentItem>
                        <ComponentItem title="Shell"></ComponentItem>
                        <ComponentItem title="Header"></ComponentItem>
                        <ComponentItem title="Footer"></ComponentItem>
                        <ComponentItem title="Bottom CTA Area"></ComponentItem>
                        <ComponentItem title="Sidebar" badge="mobile"></ComponentItem>
                    </Component>

                    <Component title="Objects">
                        <ComponentItem title="Page Layout Base"></ComponentItem>
                        <ComponentItem title="Public Layout"></ComponentItem>
                        <ComponentItem title="Private Layout"></ComponentItem>
                        <ComponentItem title="Modal"></ComponentItem>
                    </Component>

                    <Component title="Icons">
                        <ComponentItem title="Icon Base"></ComponentItem>
                    </Component>

                    <Component title="Skeletons">
                        <ComponentItem title="Skeleton base"></ComponentItem>
                        <ComponentItem title="Skeleton with Shell"></ComponentItem>
                    </Component>

                    <Component title="HTML to Canvas" badge="mobile">
                        <ComponentItem title="HTML to Canvas"></ComponentItem>
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

                    <Component title="Dropdown">
                        <ComponentItem title="Dropdown"></ComponentItem>
                    </Component>

                    <Component title="Datepicker" badge="mobile">
                        <ComponentItem title="Datepicker field" badge="mobile"></ComponentItem>
                        <ComponentItem title="Datepicker" badge="mobile"></ComponentItem>
                    </Component> 
                </Group>

                <Group title="Table and List">
                    <Component title="Table" badge="desktop">
                        <ComponentItem title="Table"></ComponentItem>
                    </Component>

                    <Component title="List" badge="mobile">
                        <ComponentItem title="Normal"></ComponentItem>
                        <ComponentItem title="With Shell"></ComponentItem>
                        <ComponentItem title="With Skeleton"></ComponentItem>
                        <ComponentItem title="List Item"></ComponentItem>
                        <ComponentItem title="Filter List"></ComponentItem>
                    </Component>
                </Group>

                <Group title="Components">
                    <Component title="Buttons">
                        <ComponentItem title="Button primary"></ComponentItem>
                        <ComponentItem title="Button secondary"></ComponentItem>
                        <ComponentItem title="Button tertiary"></ComponentItem>
                    </Component>

                    <Component title="Text and Titles">
                        <ComponentItem title="Text"></ComponentItem>
                        <ComponentItem title="Title"></ComponentItem>
                    </Component>

                    <Component title="Tab">
                        <ComponentItem title="Normal"></ComponentItem>
                        <ComponentItem title="Fixed"></ComponentItem>
                    </Component>

                    <Component title="Hub" badge="mobile">
                        <ComponentItem title="Hub"></ComponentItem>
                    </Component>

                    <Component title="Separator" badge="mobile">
                        <ComponentItem title="Separator"></ComponentItem>
                    </Component>

                    <Component title="Notification">
                        <ComponentItem title="Notification"></ComponentItem>
                    </Component>

                    <Component title="Steppers">
                        <ComponentItem title="Stepper"></ComponentItem>
                        <ComponentItem title="Wizard"></ComponentItem>
                    </Component>

                    <Component title="Progress Bar">
                        <ComponentItem title="Standard"></ComponentItem>
                    </Component>

                    <Component title="Badge">
                        <ComponentItem title="Badge"></ComponentItem>
                    </Component>

                    <Component title="Carousel">
                        <ComponentItem title="Carousel"></ComponentItem>
                        <ComponentItem title="Select Carousel"></ComponentItem>
                    </Component>

                    <Component title="Account Selector">
                        <ComponentItem title="Standard"></ComponentItem>
                        <ComponentItem title="Por hacer Table Account Selector"></ComponentItem>
                    </Component>

                    <Component title="Chart">
                        <ComponentItem title="Chart"></ComponentItem>
                    </Component>

                    <Component title="Contextual Link">
                        <ComponentItem title="Contextual Link"></ComponentItem>
                    </Component>

                    <Component title="Translate">
                        <ComponentItem title="Translate"></ComponentItem>
                    </Component>

                    <Component title="Menu">
                        <ComponentItem title="Menu"></ComponentItem>
                    </Component>

                    <Component title="Panel">
                        <ComponentItem title="Panel"></ComponentItem>
                    </Component>

                    <Component title="Notification Panel">
                        <ComponentItem title="Notification Panel"></ComponentItem>
                    </Component>

                    <Component title="Bill input">
                        <ComponentItem title="Bill input"></ComponentItem>
                    </Component>

                    <Component title="Contextual Menu">
                        <ComponentItem title="Contextual Menu"></ComponentItem>
                    </Component>

                    <Component title="Card Button">
                        <ComponentItem title="Card Button"></ComponentItem>
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
