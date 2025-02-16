import React, { useState } from "react";

const Tabs = ({ children }) => {
  return <div>{children}</div>;
};

const TabsList = ({ children }) => {
  return <div className="flex gap-4 border-b pb-2">{children}</div>;
};

const TabsTrigger = ({ children, onClick, active }) => {
  return (
    <button
      className={`px-4 py-2 rounded-md ${
        active ? "bg-blue-500 text-white" : "bg-gray-200"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const TabsContent = ({ children, active }) => {
  return active ? <div className="p-4">{children}</div> : null;
};

export { Tabs, TabsList, TabsTrigger, TabsContent };
