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

    // Function to determine the risk level based on the value
    const getRiskLevel = (value) => {
      if (value >= 7) return "High Risk";
      if (value >= 5 && value < 7) return "Medium Risk";
      return "Low Risk";
    };

    // Color gradients based on risk level
    const getGradientColor = (value) => {
      if (value >= 7) {
        // High risk: Darker purple gradient
        return {
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            { offset: 0, color: "#5e37ab" }, // Darker at top
            { offset: 1, color: "#bb94e7" }, // Lighter at bottom
          ],
        };
      } else if (value >= 5 && value < 7) {
        // Medium risk: Mid-tone gradient
        return {
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            { offset: 0, color: "#895cb3" },
            { offset: 1, color: "#d1b3f1" },
          ],
        };
      } else {
        // Low risk: Light purple gradient
        return {
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            { offset: 0, color: "#b89fd9" },
            { offset: 1, color: "#e8d4ff" },
          ],
        };
      }
    };

    const option = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
        // Tooltip formatter to show risk level
        formatter: function (params) {
          let value = params[0].value;
          let riskLevel = getRiskLevel(value);
          return `Value: ${value}<br/>Risk Level: ${riskLevel}`;
        },
      },
      xAxis: [
        {
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
        // Top X-axis for additional labels(topAxisLabels)
        {
          data: topAxisLabels,
          position: "top",
          axisLabel: {
            color: "#3a0c78",
            fontSize: "12px",
            fontWeight: "500",
            fontFamily: "Poppins",
            margin: 10,
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
        },

        // Bottom X-axis for additional labels(bottomAxisLabels)
        {
          data: bottomAxisLabels,
          position: "bottom",
          axisLabel: {
            fontFamily: "Poppins",
            color: "#3a0c78",
            fontSize: "14px",
            fontWeight: "600",
            margin: 40,
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
        },
      ],
      yAxis: [
        {
          min: 0,
          max: 10,
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
              color: "#00000019",
            },
          },
        },

        //Legend
        {
          type: "value",
          position: "right",
          min: 1,
          max: 10,
          axisLabel: {
            show: true,
            formatter: function (value) {
              if (value === 10) {
                return `{riskLabel|High Risk}\n{innovationLabel|Strong need for \n innovation}`;
              }
              if (value === 5) {
                return `{riskLabel|Medium Risk}\n{innovationLabel|Need for \n innovation}`;
              }
              if (value === 1) {
                return `{riskLabel|Low Risk}\n{innovationLabel|Low need for \n innovation}`;
              }
            },
            rich: {
              riskLabel: {
                color: "#3a0c78",
                fontWeight: "bold",
                fontSize: 12,
                fontFamily: "Poppins",
              },
              innovationLabel: {
                color: "#7a49ab",
                fontSize: 10,
                fontFamily: "Poppins",
                marginTop: "10px",
              },
            },
          },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
          },
        },
      ],

      series: [
        {
          type: "bar",
          showBackground: true,
          backgroundStyle: {
            color: "#bb94e7",
            borderRadius: [50, 50, 50, 50],
          },
          itemStyle: {
            color: function (params) {
              return getGradientColor(params.value);
            },
            borderRadius: [50, 50, 50, 50],
            barWidth: 10,
          },
          barCategoryGap: "80%",
          data: data,
          label: {
            show: true,
            position: "top",
            color: "#3a0c78",
            fontWeight: "bold",
            fontFamily: "Poppins",
            distance: 40,
          },
          emphasis: {
            itemStyle: {
              color: "#5e37ab",
            },
          },
          animation: true,
          animationDuration: 5000,
          animationEasing: "elasticOut",
        },
      ],
    };
    // Set the chart options
    myChart.setOption(option);

    // Make the chart responsive on window resize
    const resizeChart = () => {
      myChart.resize();
    };

    window.addEventListener("resize", resizeChart);

    // Cleanup chart instance and remove event listener on component unmount
    return () => {
      myChart.dispose();
      window.removeEventListener("resize", resizeChart);
    };
  }, []);

  return (
    <div className="bg-[#d7aefd] mx-auto py-6">
      <div className="w-full overflow-x-auto">
        <div
          className="min-w-[800px] md:min-w-full h-[75vh] m-auto"
          ref={chartRef}
        ></div>
      </div>
    </div>
  );
};

export default Chart;
