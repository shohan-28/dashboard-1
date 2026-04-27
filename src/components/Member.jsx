

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./Features/RoutineSlice/RoutineSlice";
import './Picturedsm.css';
import 'animate.css';

const Member = () => {
  const dispatch = useDispatch();

  const { data, loading, error } = useSelector(
    (state) => state.routine
  );

  const [selectedMember, setSelectedMember] = useState(null);

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
    <div className="min-h-screen flex flex-col lg:flex-row bg-gray-50">

      {/* LEFT SIDE - MEMBERS */}
      <div className="w-full lg:w-2/4 border-b lg:border-b-0 lg:border-r bg-white p-4 lg:p-6 overflow-y-auto">
        <h2 className="text-lg lg:text-xl font-bold mb-4 text-gray-700">
          👥 Members
        </h2>

        <div className="space-y-2">
          {data?.map((member) => (
            <div
              key={member.id}
              onClick={() => setSelectedMember(member)}
              className={`p-3 rounded-lg cursor-pointer transition 
            hover:bg-blue-50 
            ${selectedMember?.id === member.id
                  ? "bg-blue-100"
                  : "bg-white"
                }`}
            >
              <p className="font-semibold text-gray-800 text-sm lg:text-base">
                {member.name}
              </p>
              <p className="text-xs text-gray-500">
                {member.department}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE - DETAILS */}
      <div className="w-full p-4 lg:p-6 bg-gray-100">

  {!selectedMember ? (
    <div className="text-center mt-20 text-black">
      Select a Member to view Routine
    </div>
  ) : (
    <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-md p-4 lg:p-6 grid grid-cols-1 md:grid-cols-2 gap-4">

      {/* LEFT COLUMN */}
      <div className="flex flex-col items-center md:border-r md:pr-6 w-full animate__animated animate__backInLeft">

        <img
          src={selectedMember?.picture_link}
          alt=""
          className="w-36 h-36 md:w-52 md:h-52 lg:w-84 lg:h-64 object-cover rounded-2xl border-4 border-blue-200 shohanPic"
        />

        <h1 className="mt-4 text-2xl uppercase font-bold text-gray-800 text-center  ">
          {selectedMember?.name}
        </h1>

        <p className="text-ns text-green-400 text-center">
          {selectedMember?.department}
        </p>

        <p className="mt-2 text-xs text-red-800 bg-red-100 px-3 py-1 rounded-full">
          Off Day: {selectedMember?.off_day}
        </p>
      </div>

      {/* RIGHT COLUMN */}
      <div className="md:col-span-1 w-full">

        <h2 className="text-lg font-semibold mb-4 text-gray-700 text-center md:text-left">
          Weekly Routine
        </h2>

        <div className="space-y-3">
          {Object.entries(selectedMember?.shifts || {}).map(
            ([day, shift]) => (
              <div
                key={day}
                className="flex justify-between items-center bg-gray-50 px-4 py-3 rounded-lg shadow-sm"
              >
                <span className="text-gray-700 font-medium text-sm lg:text-base">
                  {day}
                </span>

                <span
                  className={`text-sm font-semibold ${
                    shift === "OFF"
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
  )}
</div>

    </div>
  );
};

export default Member;