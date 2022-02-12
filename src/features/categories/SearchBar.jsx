import { useDispatch, useSelector } from 'react-redux';
import './CategoriesControl.css';
import { categoryFiltered } from './categoriesSlice'
import { categoryParentsById } from './searcher'


const SearchBar = () => {
    const data = useSelector(state => state.categories.data)
    const dispatch = useDispatch()

    const onFilterTextChanged = (e) => {
        let searchTerm = e.target.value;
        const categoryId = getNodeBySerachTerm(data, searchTerm)?.id;
        if (!categoryId) return;
        const parents = categoryParentsById(categoryId, data)
        const parentsId = parents.map(item => item.id)
        dispatch(categoryFiltered({ parentsId, categoryId }))
    }

    return (
        <div >
            <input className='searchBar' 
                type="text"
                placeholder="Search..."
                onChange={onFilterTextChanged}
            />
        </div>
    );
}



function getNodeBySerachTerm(data, searchTerm) {
    searchTerm = searchTerm.toLowerCase();
    if (data) {
        for (let i = 0; i < data.length; i++) {
            let lowCaseName = data[i].name.toLowerCase();
            if (lowCaseName.startsWith(searchTerm))
                return data[i];
            let found = getNodeBySerachTerm(data[i].children, searchTerm);
            if (found)
                return found;
            // return this.getNodeBySerachTerm(data[i].nodes, searchTerm);
        }
    }
}

export default SearchBar;