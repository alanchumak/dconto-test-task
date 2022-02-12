import { Component} from 'react';
import { useSelector } from 'react-redux';
import { Link } from './Link'
import { Arrow } from './Arrow'
import { Xwrapper } from 'react-xarrows';

export const Viewport = () => {
  const data = useSelector(state => state.linksTree.data)
  const displayDepth = useSelector(state => state.linksTree.displayDepth)

  const links = []
  const arrows = []
  
  const init = (node, graphHeight = 0) => { // при монтировании?
    links.push(<Link link={node} />)
    if (graphHeight + 1 > displayDepth)
      return
    for (let child of node.children) {
      arrows.push(<Arrow parentId={node.id} childId={child.id} />)
      init(child, graphHeight + 1)
    }
  }

  init(data)

  return <div className='viewport' >
    <Xwrapper>
      {links} {arrows}
    </Xwrapper>
  </div>
}


