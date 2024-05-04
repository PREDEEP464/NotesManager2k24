import React, {useState} from 'react'
import ProfileInfo from '../Cards/ProfileInfo'
import { useNavigate } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'

const Navbar = ({ userInfo, onSearchNote, handleClearSearch }) => {

  const [searchQuery, setSearchQuery] = useState('');

  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const handleSearch = () => {
    if(searchQuery){
      onSearchNote(searchQuery);
    }
  };

  const onClearSearch = () => {
    setSearchQuery('');
    handleClearSearch();
  };

  return (
    <div className="bg-gray-100 flex items-center justify-between px-6 py-2 drop-shadow">
        <h2 className="text-3xl font-medium text text-orange-600 py-4">Notes  
        <span className='text-3xl font-medium text-blue-700 py-4'>Nest</span></h2>

        <SearchBar  value={searchQuery}
        onChange={({target}) => {
          setSearchQuery(target.value);
        }}
        handleSearch={handleSearch}
        onClearSearch={onClearSearch}
        />

        <ProfileInfo userInfo = {userInfo} onLogout={onLogout} /> 

    </div>
  )
}

export default Navbar