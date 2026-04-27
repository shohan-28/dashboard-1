import React from "react";
import { HyperText } from "../../components/AppWithLoading/hyper-text";

const AppWithLoading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <HyperText className="text-3xl font-bold">
        Hover me
      </HyperText>
    </div>
  );
};

export default AppWithLoading;