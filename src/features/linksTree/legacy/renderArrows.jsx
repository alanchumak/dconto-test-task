import { useSelector } from "react-redux";
import Xarrow from "react-xarrows";

function renderArrows(data, displayDepth, scale) {
    let arrows = [];
    initArrows(data, arrows);

    function initArrows(node, res, level=0) {
        if (level < displayDepth) {
            if (node.children)
                for (let child of node.children) {
                    res.push(createArrow(node.id, child.id));
                    initArrows(child, res, level+1);
                }
        }
    }

    function createArrow(parentId, childId) {
        let headSize = (scale < 1)? 5*scale : 5;
        let strokeWidth = (scale < 1)? 4*scale : 4;
        return (<Xarrow key={parentId + '-' + childId}
            start={parentId}
            end={childId}
            path="straight"
            startAnchor="bottom"
            endAnchor="top"
            headSize={headSize}
            strokeWidth={strokeWidth}
        />
        );
    }

    return arrows;
}

export default renderArrows;

