import React from "react";

const Dashboard = ({ darkModey }) => {
  return (
    <>
      <div
        className={`flex flex-col items-center justify-center ${
          darkModey ? "text-white" : "text-black"
        }`}
      >
        <h1 className="text-4xl font-bold">Dark Mode Toggle</h1>
        <p className="text-lg">This is a sample text.</p>
      </div>
    </>
  );
};

export default Dashboard;
