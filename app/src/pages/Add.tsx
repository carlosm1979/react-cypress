import React from 'react'
export const Add = ({onUpdate}) => (<><label htmlFor='name'>Name</label> <input type="text" id="name" onChange={(event) => onUpdate(event.target.value)} /></>)