import React from 'react';
import './CategoriesControl.css';
import { useDispatch, useSelector } from 'react-redux'
import { categoryClicked, categorySelected, selectIsExpandedById } from './categoriesSlice'


export const CategoriesList = ({ categories }) => {
  const items = categories.map((item, i) =>
    <Category key={i.toString()} category={item} />
  )
  return <ul>{items}</ul>
}


const Category = ({category}) => {
  const id = category.id
  // const isExpanded = useSelector(state => state.categories.expansionState[category.id]) //todo
  const isExpanded = useSelector(state => selectIsExpandedById(state, id)) //todo
  const isSelected = useSelector(state => state.categories.selectionState[id])
  const currentFocusedItemId = useSelector(state => state.categories.currentFocusedItemId)  

  const dispatch = useDispatch()

  const onSelected = () => {
    dispatch(categorySelected({ categoryId: id }))
  }

  const onClicked = () => {
    dispatch(categoryClicked({ categoryId: id}))
  }

  let btnClassName = currentFocusedItemId === id ? 'focused' : 'unfocused';
  // console.log(id + ' ' + btnClassName);
  return (
    <div>
      <input
        type="checkbox"
        className='checkBox'
        checked={isSelected}
        onChange={onSelected}
      />
      <button
        className={btnClassName}
        id={id}
        onClick={onClicked}
      >
        {category.name}
      </button>
      {isExpanded && <CategoriesList categories={category.children}/> }
    </div>
  );
}
