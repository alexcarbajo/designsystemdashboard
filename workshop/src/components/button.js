import React from "react"

export default props => 
<a 
    className={`c-Button c-Button--${props.type}`}
    href={`props.href`}
    rel="noopener noreferrer">{props.title}
</a>