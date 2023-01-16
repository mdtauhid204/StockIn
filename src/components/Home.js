import Navbar from "./navbar";
import { useState, useEffect } from "react";
import Graph from "./Graph";
import Slider2 from "./slider2";
import Table from "./Table";
import { BiUpArrow } from "react-icons/fa";
import axios from "axios";
import DateFilter from "./DateFilter";

const Home = () => {
  const [index, setIndex] = useState("BSE");
  const [company, setCompany] = useState("Ashokley");
  const [data, setData] = useState([]);
  const [labels, setLabels] = useState([]);
  const [value, setValue] = useState([]);
  const [date, setDate] = useState("2023-01-12");
  const [info, setInfo] = useState({});
  const [dataIndex, setDataIndex] = useState([]);
  const [increase, setIncrease] = useState(0);
  const [price, setPrice] = useState(0);
  const [ok, setOk] = useState(1);

  const [data3, setData3] = useState({
    labels: [1],
    datasets: [
      {
        label: "First Dataset",
        data: [1],
        // backgroundColor: "#6F7CF0",
        borderColor: "#6F7CF0",
        backgroundImage:
          "linear-gradient(to bottom, #6f7cf0, #9b9bf4, #bfbbf8, #e0dcfc, #ffffff)",
        tension: 0.4,
        fill: true,
        pointStyle: "circle",
        pointBorderColor: "blue",
        pointBackgroundColor: "#fff",
        showLine: true,
      },
    ],
  });

  const getData = async (company) => {
    console.log(company);
    const res = await axios.get(
      "http://localhost:5000/api/company/" + company,
      { company: company },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data2 = res.data;
    var curDate = data2[0].Date;

    for (let i = 0; i < data2.length; i++) {
      if (data2[i].Date.toString().substring(0, 10) == date.toString()) {
        console.log("Match Date", data2[i]);
        setInfo(data2[i]);
        break;
      }
    }

    console.log(curDate.substring(0, 10));
    setData(data2);
    // console.log(data[0]);
    let lab = [];
    let value = [];
    for (let i = 0; i < data2.length; i++) {
      lab.push(data2[i].Date.substring(0, 10));
      value.push(data2[i].adj_close);
    }
    // setLabels(lab);
    // setValue(value);
    setData3({
      labels: lab,
      datasets: [
        {
          label: "First Dataset",
          data: value,
          // backgroundColor: "#6F7CF0",
          borderColor: "#6F7CF0",
          backgroundImage:
            "linear-gradient(to bottom, #6f7cf0, #9b9bf4, #bfbbf8, #e0dcfc, #ffffff)",
          tension: 0.4,
          fill: true,
          pointStyle: "circle",
          pointBorderColor: "blue",
          pointBackgroundColor: "#fff",
          showLine: true,
        },
      ],
    });
    fun(date);
    return;
  };

  const getIndex = async (company) => {
    console.log(company);
    const res = await axios.get(
      "http://localhost:5000/api/company/" + company,
      { company: company },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data4 = res.data;
    // console.log("NSE", data4);
    setDataIndex(data4);
    // console.log("bse", data4);
    for (let i = 0; i < data4.length; i++) {
      if (data4[i].Date.toString().substring(0, 10) === date.toString()) {
        // console.log("Match Date", res[i]);
        setPrice(data4[i].open);
        if (i - 1 >= 0) {
          setIncrease(data4[i].open - data4[i - 1].open);
          if (data4[i].open - data4[i - 1].open < 0) setOk(0);
          else setOk(1);
        }

        break;
      }
    }
    // fun(date);
    // console.log("Finally date", date);
  };
  useEffect(() => {
    getData(company);
    getIndex(index);
  }, [company, index]);

  const fun = (dt) => {
    console.log("fundate", dt);
    for (let i = 0; i < dataIndex.length; i++) {
      if (dataIndex[i].Date.toString().substring(0, 10) == date) {
        // console.log("Match Date", res[i]);
        setPrice(dataIndex[i].open);
        if (i - 1 >= 0) {
          setIncrease(dataIndex[i].open - dataIndex[i - 1].open);
          if (dataIndex[i].open - dataIndex[i - 1].open < 0) setOk(0);
          else setOk(1);
        }

        break;
      }
    }
  };

  useEffect(() => {
    fun(date);
  }, [date]);

  // const color=""

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2 col-sm-12 left">
          <Navbar setIndex={setIndex} setCompany={setCompany} res={data3} />
        </div>
        <div className="col-10 col-sm-12 right">
          <div className="row rightup mt-3">
            <div className="col-4" style={{ margin: "10px 2px" }}>
              <h2 className="headtext text-muted">{index} SENSEX</h2>
              <h2 className="headtext ">{`${price}`}</h2>
              <h3 className="headtext" style={{ color: ok ? "green" : "red" }}>
                <i
                  class="fa-sharp fa-solid fa-sort-up"
                  style={{ paddingTop: "2px" }}
                ></i>
                {`${increase.toFixed(3)} (${
                  price === 0 ? 0 : ((increase / price) * 100).toFixed(3)
                }%)`}
              </h3>
            </div>
            <div
              className="col-12 col-md-8"
              style={{ width: "50%", height: "" }}
            >
              <div className="card mt-3 ">
                <div className="card-title" style={{ fontWeight: "bold" }}>
                  Day Range
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <p style={{ width: "50%", fontWeight: "Bold" }}>
                    L<br></br>
                    {info.low ? info.low.toFixed(2) : 0}
                  </p>
                  <p
                    style={{
                      width: "50%",
                      textAlign: "right",
                      fontWeight: "Bold",
                    }}
                  >
                    H<br></br>
                    {info.high ? info.high.toFixed(2) : 0}
                  </p>
                </div>
                {/* <p
                  style={{
                    width: "100%",
                    height: "2px",
                    backgroundColor: "black",
                    margin: "0px 2px",
                  }}
                ></p> */}
                <input
                  id="slider"
                  type="range"
                  min={info.low}
                  max={info.high}
                  value={info.close}
                />
              </div>
            </div>
          </div>
          <div className="row rightdown">
            <div className="col-12 col-md-8">
              <h2 className="headtext">{company} CHART</h2>
              {data.length !== 0 && <Graph res={data3} />}
            </div>
            <div className="col-12 col-md-4 justify-content-center align-items-center">
              <DateFilter setDate={setDate} date={date} />
              {data.length !== 0 && (
                <Table res={data} date={date} info={info} setInfo={setInfo} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
