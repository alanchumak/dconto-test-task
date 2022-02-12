import { useSelector, useDispatch } from 'react-redux';
import { displayDepthChanged } from './linksTreeSlice'
import './LinksTreeControl.css';


export const DisplayDepthBar = () => {
    const displayDepth = useSelector(state => state.linksTree.displayDepth)
    const dispatch = useDispatch()

    const onDisplayDepthChange = (e) => {
        dispatch(displayDepthChanged({ displayDepth: e.target.value }))
    }

    return (
        <label> Глубина отображения:&nbsp;
            <input type="number" min={1} value={displayDepth} onChange={onDisplayDepthChange} />
        </label>
    )
}