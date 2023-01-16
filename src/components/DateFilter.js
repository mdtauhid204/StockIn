import React, { useState } from "react";

const DateFilter = ({ date, setDate }) => {
  //   const [date, setDate] = useState("");

  const handleChange = (event) => {
    setDate(event.target.value);
    // console.log(date);
  };

  return (
    <div className="dateFilter ml-3">
      <label className="datefilterlabel">Select a date:</label>
      <input type="date" onChange={handleChange} value={date} />
    </div>
  );
};

export default DateFilter;
