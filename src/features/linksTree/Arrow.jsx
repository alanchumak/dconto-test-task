import Xarrow from "react-xarrows";
import { useSelector } from 'react-redux';


export const Arrow = ({ parentId, childId }) => {
    const scale = useSelector(state => state.linksTree.scale)
    let headSize = (scale < 1) ? 5 * scale : 5;
    let strokeWidth = (scale < 1) ? 4 * scale : 4; // поправить масштаб!!

    return (
        <Xarrow key={parentId + '-' + childId}
            start={parentId}
            end={childId}
            path="straight"
            startAnchor="bottom"
            endAnchor="top"
            headSize={headSize}
            strokeWidth={strokeWidth}
        />
    )
} 