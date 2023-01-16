import React, { useEffect, useState } from "react";

const Table = ({ res, date, setInfo, info }) => {
  console.log("date", date);
  console.log(res[0].Date.substring(0, 10));

  // const [info, setInfo] = useState({});
  useEffect(() => {
    for (let i = 0; i < res.length; i++) {
      if (res[i].Date.toString().substring(0, 10) == date.toString()) {
        console.log("Match Date", res[i]);
        setInfo(res[i]);
        break;
      }
    }
  }, [date]);
  return (
    <div
      className="card mt-3"
      style={{
        border: "1px dotted black",
        width: "80%",
        margin: "0px auto",
        backgroundColor: "",
      }}
    >
      <div className="card-body">
        <table className="table table-borderless table-striped ">
          {/* <thead>
            <tr>
              <th scope="col">Header 1</th>
              <th scope="col">Header 2</th>
            </tr>
          </thead> */}
          <tbody>
            <tr>
              <td>Open</td>
              <td>{info.open ? info.open.toFixed(2) : 0}</td>
            </tr>
            <tr>
              <td>High</td>
              <td>{info.high ? info.high.toFixed(2) : 0}</td>
            </tr>
            <tr>
              <td>Low</td>
              <td>{info.low ? info.low.toFixed(2) : 0}</td>
            </tr>
            <tr>
              <td>Close</td>
              <td>{info.close ? info.close.toFixed(2) : 0}</td>
            </tr>
            <tr>
              <td>Adj. Close</td>
              <td>{info.adj_close ? info.adj_close.toFixed(2) : 0}</td>
            </tr>
            <tr>
              <td>Volume</td>
              <td>{info.Volume ? info.Volume : 0}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
