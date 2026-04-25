import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./Features/RoutineSlice/RoutineSlice";

const Routine = () => {
    const dispatch = useDispatch();

    const { data, loading, error } = useSelector(
        (state) => state.routine
    );

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    if (loading)
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-10 w-10 border-4 border-blue-500 border-t-transparent"></div>
            </div>
        );

    if (error)
        return (
            <div className="text-red-500 text-center mt-10 text-lg">
                Error: {error}
            </div>
        );

    return (
  <div className="min-h-screen bg-gray-50 flex justify-center flex-col items-center  p-10">

    {/* Header */}
    <div className="text-center mb-10">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
        📅 Routine Dashboard
      </h1>
    </div>

    {/* Grid wrapper */}
    <div className="grid gap-18 md:grid-cols-2 lg:grid-cols-5 justify-center">
      {data?.map((item, index) => (
        <div
          key={item.id}
          className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm 
                     hover:shadow-xl hover:-translate-y-1 transition-all duration-300
                     w-full max-w-xs animate-fade-in"
          style={{ animationDelay: `${index * 80}ms` }}
        >
          {/* Top */}
          <div className="flex items-center gap-4">
            <img
              src={item.picture_link}
              alt={item.name}
              className="w-14 h-14 rounded-full object-cover border"
            />

            <div>
              <h2 className="text-lg font-bold text-black">
                {item.name}
              </h2>
              <p className="text-sm text-black">
                {item.department}
              </p>
            </div>
          </div>

          {/* Off day */}
          <div className="mt-3">
            <span className="inline-block px-3 py-1 text-xs rounded-full bg-red-100 text-red-600 font-medium">
              Off Day: {item.off_day}
            </span>
          </div>

          {/* Shifts */}
          <div className="mt-4 space-y-1 text-sm">
            {Object.entries(item.shifts).map(([day, shift]) => (
              <div
                key={day}
                className="flex justify-between py-1 border-b last:border-none border-gray-100"
              >
                <span className="text-text-black">{day}</span>

                <span
                  className={` text-black ${
                    shift === "OFF"
                      ? "text-red-500 font-bold"
                      : shift === "NIGHT"
                      ? "text-yellow-600 font-semibold"
                      : "text-green-600 font-semibold"
                  }`}
                >
                  {shift}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>

  </div>
    );
};

export default Routine;