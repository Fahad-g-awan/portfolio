import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["Home", "About", "Work", "Skills", "Contact"].map((item, index) => (
        <a
          key={item + index}
          href={`#${item}`}
          style={active === item ? { backgroundColor: "#313BAC" } : {}}
          className="app__navigation-dot"
        />
      ))}
    </div>
  );
};

export default NavigationDots;
