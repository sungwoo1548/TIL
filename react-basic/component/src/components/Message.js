import React from 'react'

const Message = (pros) => {
    return (
        <div className="ui message">
            <div className="header">{pros.header}</div>
            <p>{pros.body}</p>
        </div>
    )
}

export default Message
