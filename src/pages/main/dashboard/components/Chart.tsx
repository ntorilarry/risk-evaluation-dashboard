import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const Chart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Initialize the chart instance
    const myChart = echarts.init(chartRef.current);

    // Data for bars and axis labels
    let dataAxis = ["Consolidated", "Stable", "Local", "Industry", "Laggers"];
    let topAxisLabels = [
      "Fragmented",
      "Volatile",
      "Global",
      "New players",
      "Early adopters",
    ];
    let bottomAxisLabels = [
      "Market maturity",
      "Market situation",
      "Competitors",
      "Competition",
      "Customers",
    ];
    let data = [6.6, 6.3, 5.7, 5, 5.3];

    const option = {
      xAxis: [
        {
          // Main X-axis for bar categories (center)
          data: dataAxis,
          axisLabel: {
            outside: true,
            color: "#3a0c78",
            fontSize: "12px",
            fontFamily: "Poppins",
            fontWeight: "500",
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          z: 10,
        },
        {
          // Top X-axis for additional labels
          data: topAxisLabels,
          position: "top",
          axisLabel: {
            color: "#3a0c78",
            fontSize: "12px",
            fontWeight: "500",
            fontFamily: "Poppins",
            margin: 10, // Space between labels and axis
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
        },
        {
          // Bottom X-axis for additional labels
          data: bottomAxisLabels,
          position: "bottom",
          axisLabel: {
            fontFamily: "Poppins",
            color: "#3a0c78",
            fontSize: "14px",
            fontWeight: "600",
            margin: 40, // Space between labels and axis
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
        },
      ],
      yAxis: {
        min: 0, // Minimum value on Y axis
        max: 10, // Maximum value on Y axis
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: "#3a0c78",
        },
        splitLine: {
          lineStyle: {
            color: "#00000019", // Set Y-axis grid lines to black
          },
        },
      },
      series: [
        {
          type: "bar",
          showBackground: true,
          backgroundStyle: {
            color: "#bb94e7",
            borderRadius: [50, 50, 50, 50],
          },
          itemStyle: {
            color: "#3a0c78",
            borderRadius: [50, 50, 50, 50],
            barWidth: 10,
          },
          barCategoryGap: "80%",
          data: data,
          label: {
            show: true,
            position: "top", // Show labels inside the bars
            color: "#3a0c78", // Label color (can be adjusted if needed)
            fontWeight: "bold",
            fontFamily: "Poppins",
            distance: 40,
          },
        },
      ],
    };

    // Set the chart options
    myChart.setOption(option);

    // Cleanup chart instance on component unmount
    return () => {
      myChart.dispose();
    };
  }, []);

  return (
    <div>
      <div className="bg-[#d7aefd] mx-auto py-6">
        <div className="w-full h-[50vh] m-auto" ref={chartRef}></div>
      </div>
    </div>
  );
};

export default Chart;
