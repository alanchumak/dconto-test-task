export const categoryParentsById = (id, data) => {
    const isFoundChild = (id, data, parents) => {
        if (data.find(item => item.id == id)) {
            return true;
        }
        else {
            for (let item of data) {
                if (item.children.length)
                    if (isFoundChild(id, item.children)) {
                        parents.push(item);
                        return true;
                    }
            }
            return false;
        }
    }

    const parents = [];
    if (data.find(item => item.id == id))
        return [];
    else {
        for (let item of data) {
            if (item.children.length)
                if (isFoundChild(id, item.children, parents)) {
                    parents.push(item);
                    return parents;
                }
        }
    }
}


// const getParentsById = (id, data) => {
//     var TreeModel = require('tree-model')
//     const tree = new TreeModel()
//     let path
//     for (let item of data) {
//         const root = tree.parse(item)
//         root.walk(function (node) {
//             // Halt the traversal by returning false
//             if (node.model.id === id) {
//                 path = node.getPath()
//                 return false;
//             }
//         });
//     }
//     path.pop()
//     return path.map(item => item.model)
// }