import { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";
ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);

function Graph({ res }) {
  // console.log(res);
  // console.log("lab", lab);
  // console.log("value", company, value);
  // for (let i = 0; i < res.length; i++) {
  //   lab.push(res[i].Date);
  //   value.push(res[i].adj_close);
  // }
  // console.log("value");
  // console.log(value);
  // console.log(lab);
  // console.log(value);
  // const [data, setData] = useState({
  //   labels: lab,
  //   datasets: [
  //     {
  //       label: "First Dataset",
  //       data: value,
  //       // backgroundColor: "#6F7CF0",
  //       borderColor: "#6F7CF0",
  //       backgroundImage:
  //         "linear-gradient(to bottom, #6f7cf0, #9b9bf4, #bfbbf8, #e0dcfc, #ffffff)",
  //       tension: 0.4,
  //       fill: true,
  //       pointStyle: "circle",
  //       pointBorderColor: "blue",
  //       pointBackgroundColor: "#fff",
  //       showLine: true,
  //     },
  //   ],
  // });

  return (
    <div id="graph" className="App" style={{ width: "100%", height: "60vh" }}>
      <Line data={res}>Hello</Line>
    </div>
  );
}

export default Graph;
