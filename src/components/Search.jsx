import React, { useEffect, useState } from 'react';
import { LuTextSearch } from "react-icons/lu";
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from './Features/RoutineSlice/RoutineSlice';

const Search = () => {
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector(
  (state) => state.routine
);
    // const members = useSelector((state) => state.members.members);
    const [search,setSearch] = useState("");
    const filterMembers = data?.filter((member)=>member?.name?.toLowerCase().includes(search.toLowerCase()));
    

     useEffect(() => {
        dispatch(fetchUsers());
      }, [dispatch]);
    
      if (loading)
        return (
          <div className="flex justify-center items-center h-screen">
            <div className="animate-spin w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full"></div>
          </div>
        );
    
      if (error)
        return (
          <div className="text-red-500 text-center mt-10">
            {error}
          </div>
        );
    return (
        <div className='space-y-2 container mx-auto'>
            <h1 className='text-3xl text-blue-800'>Search</h1>
            <div className='flex justify-center items-center gap-2'>
                <input 
                type='Search' 
                
                value={search}
                onChange={((e)=> setSearch(e.target.value))}
                placeholder=' Search now' 
                className='p-2 border-l-red-300 border-r-red-300 border-2 rounded-2xl'></input>
                <p className='text-3xl bg-amber-200 rounded-2xl p-1 border-l-blue-400 border-r-blue-400 border-2 active:opacity-70 active:scale-95 transition cursor-pointer'><LuTextSearch /></p>
            </div>

            <div>
                { search === "" ? (<h1>Search member</h1>) : (filterMembers?.map ((member)=> (
                    
                    <h2 key={member.id}>{member.name}</h2>
                )))}
            </div>
        </div>
    );
};

export default Search;