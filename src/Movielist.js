import React from "react";
import Film from "./Film";
export const Movielist = ({ MovieData, handledelete, handleseen }) => {

  return (
    <div className="list">
      {MovieData.map((el) => (
        <Film Movie={el} handledelete={handledelete} handleseen={handleseen} />
      ))}
    </div>
  );
};