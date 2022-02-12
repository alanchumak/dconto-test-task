

function Rect(props){
    return(<div
              id={props.id}
              className="rect"
              style={{
                position: "absolute",
                left: `${props.x}px`,
                top: `${props.y}px`,
                width: `${155*props.scale}px`,
                height: `${85*props.scale}px`,
                'font-size': `${props.scale}em`
              }}
            >
              {props.name}
            </div>
    );
  }

function renderRects(data, rectCoords, displayDepth, scale=0.75){
    let rects = [];
    // let level = 0;
    initRects(data, rects);
  

  function initRects (node, rects, level=0){
    // console.log(node);
    if (level <= displayDepth) {
      rects.push(createRect(node));
      if (node.children)
        for (let child of node.children)  // to do recursion
          initRects(child, rects, level + 1);
    }
  }

  function createRect(node){
     let coord = rectCoords[node.id];
    return (<Rect 
        id={node.id} 
        key={'key-' + node.id} 
        name={node.name} 
        x={coord.x} 
        y={coord.y} 
        scale={scale}
      />);
  }

  return rects;
}

export default renderRects;