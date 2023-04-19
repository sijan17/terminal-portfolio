import React, { useState, useEffect } from "react";

const SlideIn = ({ speed = 500, delay = 0, children }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let timeout;
    if (!show) {
      timeout = setTimeout(() => {
        setShow(true);
      }, delay);
    }
    return () => clearTimeout(timeout);
  }, [show, delay]);

  return (
    <div className="overflow-hidden">
      {React.Children.map(children, (child, index) => (
        <div
          key={`slide-in-${index}`}
          className={`transition-transform transform-gpu duration-300 ${
            show ? "opacity-1 scale-[1] " : "opacity-0 scale-[0.7]"
          }`}
          style={{ transitionDuration: `${speed}ms` }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default SlideIn;
