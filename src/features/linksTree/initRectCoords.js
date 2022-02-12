function initRectCoords(data, displayDepth, scale) { // todo: формировать словарь координат
    const rectWidth = 155*scale;
    const rectHeight = 85*scale;
    const space = 30*scale;
    const depth =  getDepth(data);
    let rightXArr = new Array(depth).fill(0);
    let coords = {};

    function getDepth(obj) {
        let depth = 0;
        if (obj.children) {
            obj.children.forEach(function (d) {
                let tmpDepth = getDepth(d)
                if (tmpDepth > depth) {
                    depth = tmpDepth
                }
            })
        }
        return 1 + depth;
    }

    function initCoords(data, level = 0) {
        for (let node of data.children)
            initCoords(node, level + 1);
        setCoord(data, level);
    }

    function setCoord(node, level) {
        let x = getX(node, level) ; 
        setRightX(x, level);
        let y = level * (rectHeight + space);
        coords[node.id] = { x: x, y: y };
    }

    
    function getX(node, level) {
        let x = !node.children.length || (level == displayDepth) ? getLeafX(level) : getParentNodeX(node);
        if(x < rightXArr[level])
            x = offsetX(x, node, level);
        return x;
    }

    function getLeafX(level){
        return rightXArr[level] + space;
    }

    function getParentNodeX(node){
        let count = node.children.length;
        let firstChildX = coords[node.children[0].id].x;
        let lastChildX = coords[node.children[count - 1].id].x;
        return (firstChildX + lastChildX) / 2;
    }

    function offsetX(x, node, level){
        let x1 = rightXArr[level] + space;
        let offset = (x1 - x);
        offsetChildrenXOf(node, offset, level);
        return x1;
    }

    function offsetChildrenXOf(node, offset, level){
        if(node.children.length){
            for(let child of node.children) {
                coords[child.id].x += offset;
                offsetChildrenXOf(child, offset, level + 1);
            }
            let lastChild = node.children[node.children.length - 1]; 
            setRightX(coords[lastChild.id].x, level+1);
        }
    }

    function setRightX(x, level) {
        rightXArr[level] = x + rectWidth;
    }

    initCoords(data);
    return coords;
}

export default initRectCoords;

