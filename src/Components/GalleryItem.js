import { useState } from 'react'

function GalleryItem({song}) {
    const [isExpanded, setIsExpanded] = useState(false)
    const {trackName} = song;
    
    const handleClick = () => {
        setIsExpanded(!isExpanded);
    }

    const simpleStyles = {display: 'inline-block'}
    const expandedStyles = {};

    return (
        <div onClick={handleClick} style={isExpanded ? expandedStyles : simpleStyles}>
            <p>{trackName}</p>
        </div>
    )
}

export default GalleryItem