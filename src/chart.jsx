import React from "react";
import Chart from "react-apexcharts";

 function DonutExample() {
  const donutOptions = {
    chart: { type: "donut" },
    labels: ["Bitcoin", "Ethereum", "Solana", "Dogecoin"],
    colors: ["#f59e0b", "#6366f1", "#22c55e", "#ef4444"],
    legend: { position: "right", labels: { colors: "#fff" } },
    dataLabels: {
      enabled: false,
      formatter: (val) => `${val.toFixed(1)}%`,
      style: { colors: ["#fff"] },
    },
    plotOptions: {
      pie: {
        donut: {
          size: "55%",
          labels: {
            show: true,
            total: {
              show: true,
              label: "Portfolio",
              formatter: () => "100%",
            },
          },
        },
      },
    },
    
    tooltip: { enabled: false },
   stroke: {
  show: true,     
  width: 0,      
  colors: ["transparent"], 
}
  };

  const donutSeries = [21, 64.8, 14.4, 14.4];

  return (
    <div className="bg-gray-900 p-6 rounded-xl text-white w-[400px]">
      <Chart options={donutOptions} series={donutSeries} type="donut" height={250} />
    </div>
  );
}

export default DonutExample;