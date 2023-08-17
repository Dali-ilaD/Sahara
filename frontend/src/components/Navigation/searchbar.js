
import {FiSearch} from 'react-icons/fi'
import {useDispatch} from 'react-redux';
import { searchProduct } from '../../store/product';
import { useEffect, useState } from 'react';

function Searchbar() {

    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState('');


    const handleSearch = () => {
        if (searchQuery.trim() !== '') {
          dispatch(searchProduct(searchQuery));
        }
      };
 
    useEffect(() => {
        const delaySearchResults = setTimeout(() => {
        handleSearch();
        }, 300);

        return () => clearTimeout(delaySearchResults);
        },);

    const handleChange = (event) =>{
        setSearchQuery(event.target.value);
    }

    return(
        <>
            <div className='nav-search-bar'>
                <input type='text'  placeholder='What would you like to find?' value={searchQuery} onChange={handleChange}/>
                <button className='search-button'><FiSearch/></button>
            </div>
        </>
    )

}

export default Searchbar;