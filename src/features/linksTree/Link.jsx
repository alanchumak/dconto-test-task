import { useSelector } from 'react-redux';
import './LinksTreeControl.css';
import { useXarrow } from 'react-xarrows'


export const Link = ({ link }) => {
    const scale = useSelector(state => state.linksTree.scale)
    const point = useSelector(state => state.linksTree.linkCoordinates[link.id])

    const updateXarrow = useXarrow() // for update xarrows

    const css = {
        position: "absolute",
        left: `${point.x}px`,
        top: `${point.y}px`,
        width: `${155 * scale}px`,
        height: `${85 * scale}px`,
        'font-size': `${scale}em`
    }

    return (
        <div id={link.id} className="rect" style={css}>
            {link.name}
        </div>
    )
}