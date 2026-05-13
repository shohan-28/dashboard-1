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
  const [inputValue, setInputValue] = useState("");
  const [search, setSearch] = useState("");
  const filterMembers = data?.filter((member) => member?.name?.toLowerCase().includes(search.toLowerCase()));
  const handleSearch = () => { setSearch(inputValue) };


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
      <div className='flex justify-center items-center pb-10 gap-2'>
        <input
          type='Search'

          value={inputValue}
          onChange={((e) => setInputValue(e.target.value))}
          placeholder=' Search now'
          className='p-2 border-l-red-300 border-r-red-300 border-2 rounded-2xl'></input>
        <button
          onClick={handleSearch}
          className='text-3xl bg-amber-200 rounded-2xl p-1 border-l-blue-400 border-r-blue-400 border-2 active:opacity-70 active:scale-95 transition cursor-pointer'><LuTextSearch /></button>
      </div>

      <div>
        {search === "" ? (<h1>Search member</h1>) : (filterMembers?.map((member) => (

          <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-md p-4 lg:p-6 grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* LEFT COLUMN */}
            <div className="flex flex-col items-center md:border-r md:pr-6 w-full mx-auto animate__animated animate__backInLeft">

              <img
                src={member?.picture_link}
                alt=""
                className="w-36 h-36 md:w-52 md:h-52 lg:w-94 lg:h-144 mx-auto  rounded-2xl border-4 border-blue-200 shohanPic"
              />

              <h1 className="mt-4 text-2xl uppercase font-bold text-gray-800 text-center  ">
                {member?.name}
              </h1>

              <p className="text-ns text-green-400 text-center">
                {member?.department}
              </p>

              <p className="mt-2 text-xs text-red-800 bg-red-100 px-3 py-1 rounded-full">
                Off Day: {member?.off_day}
              </p>
            </div>

            {/* RIGHT COLUMN */}
            <div className="md:col-span-1 w-full">

              <h2 className="text-lg font-semibold mb-4 text-gray-700 text-center md:text-left">
                Weekly Routine
              </h2>

              <div className="space-y-3">
                {Object.entries(member?.shifts || {}).map(
                  ([day, shift]) => (
                    <div
                      key={day}
                      className="flex justify-between items-center bg-gray-50 px-4 py-3 rounded-lg shadow-sm"
                    >
                      <span className="text-gray-700 font-medium text-sm lg:text-base">
                        {day}
                      </span>

                      <span
                        className={`text-sm font-semibold ${shift === "OFF"
                            ? "text-red-500"
                            : shift === "NIGHT"
                              ? "text-yellow-500"
                              : "text-green-600"
                          }`}
                      >
                        {shift}
                      </span>
                    </div>
                  )
                )}
              </div>

            </div>

          </div>

        )))}
      </div>
    </div>
  );
};

export default Search;