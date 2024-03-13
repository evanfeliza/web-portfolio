import React, { createElement } from 'react'


const GeneratedIcon = ({ icon }: { icon: string }) => {
    const classRegex = /className\s*=\s*\"([^"]+)\"/;
    const match = classRegex.exec(icon);
    const className = match ? match[1] : '';
    const generateIcon = createElement('i',
        { className: className })
    return (
        <>{generateIcon}</>
    )
}

export default GeneratedIcon