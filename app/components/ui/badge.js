import React from "react";

const Badge = ({ children, className }) => {
  return (
    <span
      className={`px-3 py-1 text-sm font-semibold rounded-full ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
