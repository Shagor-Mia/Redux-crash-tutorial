import React from "react";

function Button({ children, type, handler }) {
  const style =
    type === "danger"
      ? " bg-red-500 text-white px-3 py-2 rounded-shadaw"
      : " bg-blue-500 text-white px-3 py-2 rounded-shadaw";
  return (
    <button className={style} onClick={handler}>
      {children}
    </button>
  );
}

export default Button;
