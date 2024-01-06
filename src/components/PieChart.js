import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { Pie } from "react-chartjs-2";

Chart.register(CategoryScale);
 
const PieChart = ({rowData}) => {
  const [chartData, setChartData] = useState({
    labels: [
        "successful",
        "unsuccessful"
    ],
    datasets: [
      {
        label: "Successful",
        data: rowData.map((data) => data.successful),
        backgroundColor: [
          "rgba(75,192,192,1)",
        "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  });

  
 
  return (
    <div className="App">
      <Pie
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "space mission"
            }
          }
        }}
      />
    </div>
  );
}
export default PieChart;