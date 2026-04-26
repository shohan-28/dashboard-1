

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./Features/RoutineSlice/RoutineSlice";

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
      <div className="w-full lg:w-1/4 border-b lg:border-b-0 lg:border-r bg-white p-4 lg:p-6 overflow-y-auto">
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
          <div className="bg-white rounded-2xl shadow-md p-4 lg:p-6 flex flex-col md:flex-row gap-6">

            {/* LEFT COLUMN */}
            <div className="w-full md:w-1/3 flex flex-col items-center md:border-r md:pr-4">
              <img
                src={selectedMember.picture_link}
                alt=""
                className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-2xl object-cover border-4 border-blue-200"
              />

              <h1 className="mt-4 text-base lg:text-lg font-semibold text-gray-800 text-center">
                {selectedMember.name}
              </h1>

              <p className="text-sm text-gray-500 text-center">
                {selectedMember.department}
              </p>

              <p className="mt-2 text-xs text-red-700 bg-red-100 px-3 py-1 rounded-full">
                Off Day: {selectedMember.off_day}
              </p>
            </div>

            {/* RIGHT COLUMN */}
            <div className="w-full md:w-2/3">
              <h2 className="text-base lg:text-lg font-semibold mb-4 text-gray-700 text-center md:text-left">
                Weekly Routine
              </h2>

              <div className="space-y-2">
                {Object.entries(selectedMember?.shifts || {}).map(
                  ([day, shift]) => (
                    <div
                      key={day}
                      className="flex justify-between items-center bg-gray-50 px-3 py-2 rounded-lg"
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
        )}
      </div>

    </div>
  );
};

export default Member;