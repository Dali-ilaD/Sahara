import {FiSearch} from 'react-icons/fi'

function Searchbar() {


    

    return(
        <>
            <div className='nav-search-bar'>
                <input type='text'  placeholder='Search bar'/>
                <button className='search-button'><FiSearch/></button>
            </div>
        </>
    )

}

export default Searchbar;