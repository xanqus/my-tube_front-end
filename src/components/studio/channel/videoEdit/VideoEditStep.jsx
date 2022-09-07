import React from "react";

const VideoEditStep = ({ stepNumber, setStepNumber }) => {
  return (
    <ul class="flex justify-center progressbar mt-8">
      <li className="flex flex-col list-none float-left w-1/3 relative text-center">
        <div
          className="absolute w-32 h-20 top-0 left-1/2 -translate-x-16 -translate-y-4 hover:bg-blue-200 hover:cursor-pointer rounded-md z-0"
          onClick={() => {
            setStepNumber(0);
          }}
        ></div>
        <div
          className={`bg-white w-6 h-6 leading-6 border block mx-auto mt-0 mb-2.5 rounded-full border-blue-500 text-white z-10 pointer-events-none ${
            stepNumber == 0 ? "border-4" : "bg-blue-500"
          }`}
        >
          <div className="z-10 pointer-events-none">
            {stepNumber == 0 ? "" : "✓"}
          </div>
        </div>
        <div className="z-10 pointer-events-none">세부정보</div>
        <div
          className={`absolute w-[calc(100%-1.5rem)] h-0.5 top-[11px] left-1/2 translate-x-3 z-10 pointer-events-none ${
            stepNumber === 0 ? "bg-gray-400" : "bg-blue-500"
          }`}
        ></div>
      </li>
      <li className="flex flex-col list-none float-left w-1/3 relative text-center">
        <div
          className="absolute w-32 h-20 top-0 left-1/2 -translate-x-16 -translate-y-4 hover:bg-blue-200 hover:cursor-pointer rounded-md z-0"
          onClick={() => {
            setStepNumber(1);
          }}
        ></div>
        <div className="bg-white w-6 h-6 leading-6 border-4 block mx-auto mt-0 mb-2.5 rounded-full border-blue-500 text-white z-10 pointer-events-none">
          <div className="z-10 pointer-events-none"></div>
        </div>
        <div className="z-10 pointer-events-none">공개 상태</div>
      </li>
    </ul>
  );
};

export default VideoEditStep;
