class Viewport1 extends Component {
    constructor(props) {
        super(props);
        this.state = { rectCoords: initRectCoords(props.data, props.displayDepth, props.scale) };
        console.log(props.data);
        this.isPressed = false;
        this.deltaX = 0;
        this.deltaY = 0;
        this.movedNodeId = -1;

    }

    componentDidUpdate(prevProps) {
        if (this.props != prevProps) {
            this.setState({
                rectCoords: initRectCoords(this.props.data, this.props.displayDepth, this.props.scale),
                // data: this.props.data
            });
        }
    }

    mouseDown = (e) => {
        this.movedNodeId = this.getClickedNodeID(e);
        console.log(this.movedNodeId);
        if (this.movedNodeId == -1)
            return;
        this.deltaX = e.clientX - this.state.rectCoords[this.movedNodeId].x;
        this.deltaY = e.clientY - this.state.rectCoords[this.movedNodeId].y;
        this.isPressed = true;
    }

    getClickedNodeID = (e) => {
        const width = 155 * this.props.scale;
        const height = 85 * this.props.scale;
        let id = -1;
        for (let key in this.state.rectCoords) {
            let coord = this.state.rectCoords[key];
            if (e.clientX > coord.x && e.clientX < coord.x + width)
                if (e.clientY > coord.y && e.clientY < coord.y + height)
                    id = key;
        }
        return id;
    }

    mouseMove = (e) => {
        if (!this.isPressed)
            return;
        let rectCoords1 = { ...this.state.rectCoords };
        rectCoords1[this.movedNodeId] = {
            x: e.clientX - this.deltaX,
            y: e.clientY - this.deltaY
        };
        this.setState({ rectCoords: rectCoords1 });
    }

    mouseUp = () => {
        this.isPressed = false;
    }

    render() {
        let rectCoords = this.isPressed
            ? this.state.rectCoords
            : initRectCoords(this.props.data, this.props.displayDepth, this.props.scale);
        // let rectCoords = this.state.rectCoords ;
        return (
            <div className='viewport'
            // onMouseDown={this.mouseDown}
            // onMouseMove={this.mouseMove}
            // onMouseUp={this.mouseUp}
            >

                {/* {renderRects(this.props.data, this.state.rectCoords, this.props.displayDepth)} */}
                {renderRects(this.props.data, rectCoords, this.props.displayDepth, this.props.scale)}
                {renderArrows(this.props.data, this.props.displayDepth, this.props.scale)}
            </div>
        );
    }
}

export default Viewport;

//   function renderRects(data, rectCoords, displayDepth, scale = 0.75) {
//     let rects = [];
//     // let level = 0;
//     initRects(data, rects);


//     function initRects(node, rects, level = 0) {
//       // console.log(node);
//       if (level <= displayDepth) {
//         rects.push(createRect(node));
//         if (node.children)
//           for (let child of node.children)  // to do recursion
//             initRects(child, rects, level + 1);
//       }
//     }

//     return rects
// }

//   function renderArrows(data, displayDepth, scale) {
//     let arrows = [];
//     initArrows(data, arrows);

//     function initArrows(node, res, level = 0) {
//       if (level < displayDepth) {
//         if (node.children)
//           for (let child of node.children) {
//             res.push(createArrow(node.id, child.id));
//             initArrows(child, res, level + 1);
//           }
//       }
//     }
//     return arrows;
//   }