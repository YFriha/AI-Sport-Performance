import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
} from "chart.js";
import { Line } from "react-chartjs-2";
import PropTypes from "prop-types";

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale);
const PerformanceGraph = ({ performanceData }) => {
  const data =
    //
    {
      fill: true,
      backgroundColor: "rgba(244, 144, 128, 0.8)",
      labels: performanceData.map((dataPoint) => dataPoint.date),
      datasets: [
        {
          label: "Goals",
          data: performanceData.map((dataPoint) => dataPoint.goals),
          backgroundColor: "transparent",
          borderColor: "#9cd6d1",
          pointBorderColor: "#009688",
          pointBorderWidth: 4,
          tension: 0.5,
          // pointHoverBackgroundColor: "#80b6f4",
          // fill: true,
          // backgroundColor: "rgba(244, 144, 128, 0.8)"
          // backgroundColor: "rgba(244, 144, 128, 0.8)"
        },
      ],
    };

  const options = {
    plugins: { legend: false },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: 0,
        max: 10,
        ticks: {
          fontColor: "rgba(0,0,0,0.5)",
          stepSize: 1,
          callback: (value) => value + "but",
        },
        grid: {
          borderDash: [10],
        },
        gridLines: {
          drawTicks: false,
          display: false,
        },
      },
    },
  };

  return (
    <div
          className=" row justify-content-between "
          style={{ border: " #cecece" }}
        >
          <div
            // style={{
            //   marginRight: "60px",
            // }}
            className="col-md-4"
          ></div>
    <div style={{ width: "450px", height: "250px", marginLeft: "20px",justifyContent:"space-between",marginBottom:"10px" }}>
      <Line data={data} 
// @ts-ignore
      options={options} />
      
    </div>
    </div>
  );
};
PerformanceGraph.propTypes = {
  performanceData: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      goals: PropTypes.number.isRequired,
      assists: PropTypes.number.isRequired,
      // Add more properties as needed
    })
  ).isRequired,
};
export default PerformanceGraph;
