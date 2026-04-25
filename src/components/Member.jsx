

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
    <div className="min-h-screen flex justify-center bg-gray-50">

      {/* LEFT SIDE - MEMBERS */}
      <div className="w-2/3 border-r bg-white p-6 overflow-y-auto">
        <h2 className="text-xl font-bold mb-4 text-gray-700">
          👥 Members
        </h2>

        <div className="space-y-2">
          {data?.map((member) => (
            <div
              key={member.id}
              onClick={() => setSelectedMember(member)}
              className={`p-3 rounded-lg cursor-pointer transition 
                hover:bg-blue-50 
                ${
                  selectedMember?.id === member.id
                    ? "bg-blue-100"
                    : "bg-white"
                }`}
            >
              <p className="font-semibold text-gray-800">
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
      <div className="">
          {!selectedMember ? (
            <div className="text-center mt-20 text-black">
              Select a Member to view Routine
            </div>
          ) : (
            <div>
              <div>
                <img src={selectedMember.picture_link}
                alt=""
                className="">
                </img>
              </div>
              <div>
                <h1>{selectedMember.name}</h1>
                <h1>{selectedMember.department}</h1>
              </div>
            </div>
          )}
      </div>

    </div>
  );
};

export default Member;