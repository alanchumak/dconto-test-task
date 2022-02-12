import { CategoriesList } from './CategoriesList.jsx';
import React, { Component } from 'react';
import SearchBar from './SearchBar';
import { CategoryPathsTable } from './CategoryPathsTable.jsx';
import './CategoriesControl.css';
import NodesManagingBar from './NodesManagingBar';
import { useSelector } from 'react-redux';


export const CategoriesControl = () => {
    const categories = useSelector(state => state.categories.data)
    return (
        <div className='rootElement'>
            <div className='layer'>
                <SearchBar/>
                <NodesManagingBar />
                <CategoriesList categories={categories} />
            </div>
            <div className='layer1'>
                <CategoryPathsTable />
            </div> 
            
        </div>
    )
} // поч span не работает
// с полосой прокрутки что-то сделать