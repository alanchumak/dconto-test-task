import { useSelector } from 'react-redux';
import './CategoriesControl.css';
import { categoryParentsById} from './searcher'

export const CategoryPathsTable = () => {
    const data = useSelector(state => state.categories.data)
    const selectionState = useSelector(state => state.categories.selectionState)
    
    const rows = () => {
        const rows = [];
        for (let id in selectionState) {
            if (selectionState[id]) {
                let item = getNodeById(data, id);
                rows.push(<CategoryPathRow category={item} />)
            }
        }
        return rows;
    }

    return (
        <table>
            <TableHead />
            <tbody>{rows()}</tbody>
        </table>
    )
}

const TableHead = () => {
    return (
        <thead>
            <tr className='system-grid-headers'>
                <th className="thSelectedItemTable">Название</th>
                <th>Путь</th>
            </tr>
        </thead>
    )
}

const CategoryPathRow = ({category}) => {
    const data = useSelector(state => state.categories.data)

    // const parents = getParentNameGraph(data, category.id);
    const parents = categoryParentsById(category.id, data);
    const parentsNames = parents.reverse().map(item => item.name)
    const pathArr = parentsNames.concat(category.name)
    const path = pathArr.join('\\');
    return(
        <tr key={category.id}>
            <td>{category.name}</td>
            <td>{path}</td>
        </tr>
    )
}

function getNodeById(data, id) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].id == id)
            return data[i];
        let found = getNodeById(data[i].children, id);
        if (found)
            return found;
    }
}
