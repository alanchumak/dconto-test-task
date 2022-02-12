import './CategoriesControl.css';
import { allCategoriesExpanded, 
    allCategoriesCollapsed, 
    allCategoriesDeselected, 
    allCategoriesSelected } from './categoriesSlice'
import { useDispatch } from 'react-redux';


const NodesManagingBar = () => {
    const dispatch = useDispatch()

    const onAllCategoriesSelected = () => {
        dispatch(allCategoriesSelected())
    }

    const onAllCategoriesDeselected = () => {
        dispatch(allCategoriesDeselected())
    }

    const onAllCategoriesCollapsed = () => {
        dispatch(allCategoriesCollapsed())
    }

    const onAllCategoriesExpanded = () => {
        dispatch(allCategoriesExpanded())
    }

    return (
        <div >
            <button className='nodesManagingBarButton1 btn1' onClick={onAllCategoriesSelected}></button>
            <button className='nodesManagingBarButton1 btn2' onClick={onAllCategoriesDeselected}></button>
            <button className='nodesManagingBarButton1 btn3' onClick={onAllCategoriesExpanded}></button>
            <button className='nodesManagingBarButton1 btn4' onClick={onAllCategoriesCollapsed}></button>
        </div>

    );
}

export default NodesManagingBar;