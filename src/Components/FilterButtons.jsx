import React from "react";
import classNames from "classnames";

function FilterButtons({ dataButtons, onHandleSizeClick }) {
  return (
    <div className="flex flex-col w-52 h-96 px-10">
      <h1 className="text-xl"> Sizes:</h1>
      <div>
        {dataButtons.map((button, i) => {
          return (
            <div key={i}>
              <button
                className={classNames(
                  "w-11",
                  "h-10",
                  "mb-5",
                  "rounded-full",
                  !button.select ? "bg-slate-300" : "bg-black ",
                  !button.select ? "text-black" : "text-white "
                )}
                onClick={() => onHandleSizeClick(button.buttonValue)}
              >
                {button.buttonValue}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FilterButtons;
