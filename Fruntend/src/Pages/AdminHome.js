import React, { useEffect } from "react";
import Chart from "chart.js/auto";
import "./admin.css";

function AdminHome() {
  useEffect(() => {
    // Function to initialize a chart
    const initChart = (id, type, data, options) => {
      const canvas = document.getElementById(id);
      if (!canvas) {
        console.error(`Canvas with id ${id} not found.`);
        return;
      }
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        console.error(`Context for canvas with id ${id} not found.`);
        return;
      }

      // Destroy any existing chart on this canvas
      if (ctx.chart) {
        ctx.chart.destroy();
      }

      // Create a new chart
      ctx.chart = new Chart(ctx, {
        type,
        data,
        options,
      });
    };

    // Data and options for each chart
    const commonOptions = {
      responsive: true,
      plugins: {
        legend: {
          labels: {
            color: "white", // Set legend label color to white
          },
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              let label = context.dataset.label || "";
              if (label) {
                label += ": ";
              }
              if (context.parsed.y !== null) {
                label += new Intl.NumberFormat().format(context.parsed.y);
              }
              return label;
            },
          },
          bodyColor: "white", // Set tooltip body color to white
          titleColor: "white", // Set tooltip title color to white
        },
      },
      scales: {
        x: {
          ticks: {
            color: "white", // Set x-axis label color to white
          },
        },
        y: {
          ticks: {
            color: "white", // Set y-axis label color to white
          },
        },
      },
    };

    // Data for each chart
    const chart1Data = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Performance",
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
        },
      ],
    };

    const chart2Data = {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
      datasets: [
        {
          label: "Daily Sales",
          data: [100, 200, 300, 400, 500],
          backgroundColor: "rgba(75, 192, 192)",
          borderColor: "rgb(255, 255, 255)",
          borderWidth: 1,
        },
      ],
    };

    const chart3Data = {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple"],
      datasets: [
        {
          label: "Completed Tasks",
          data: [12, 19, 3, 5, 2],
          backgroundColor: [
            "rgba(255, 99, 132)",
            "rgba(54, 162, 235)",
            "rgba(255, 206, 86)",
            "rgba(75, 192, 192)",
            "rgba(153, 102, 255)",
          ],
          borderColor: [
            "rgb(255, 255,255)",
            "rgb(255, 255, 255)",
            "rgb(255, 255, 255)",
            "rgb(255, 255, 255)",
            "rgb(255, 255, 255)",
          ],
          borderWidth: 1,
        },
      ],
    };

    // Delay chart initialization to ensure DOM elements are available
    const delay = 100; // milliseconds
    setTimeout(() => {
      initChart("chart1", "line", chart1Data, { ...commonOptions });
      initChart("chart2", "bar", chart2Data, { ...commonOptions });
      initChart("chart3", "pie", chart3Data, { ...commonOptions });
      // initChart("chart4", "doughnut", chart4Data, { ...commonOptions });
    }, delay);

    // Cleanup function to destroy charts if the component unmounts
    return () => {
      ["chart1", "chart2", "chart3"].forEach((id) => {
        const canvas = document.getElementById(id);
        if (canvas) {
          const ctx = canvas.getContext("2d");
          if (ctx.chart) {
            ctx.chart.destroy();
          }
        }
      });
    };
  }, []);

  return (
    <>
      <div className="card-chart card bgchart">
        <div className="card-header">
          <div className="row">
            <div className="text-left col-sm-6">
              <h5 className="card-category margin-left-custom">
                Total Shipments
              </h5>
              <h2 className="card-title">Performance</h2>
            </div>
            <div className="col-sm-6">
              <div
                data-toggle="buttons"
                role="group"
                className="btn-group-toggle float-right btn-group"
              >
                <label id="0" className="btn-simple active btn btn-info btn-sm">
                  <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                    Accounts
                  </span>
                  <span className="d-block d-sm-none">
                    <i className="tim-icons icon-single-02"></i>
                  </span>
                </label>
                <label id="1" className="btn-simple btn btn-info btn-sm">
                  <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                    Purchases
                  </span>
                  <span className="d-block d-sm-none">
                    <i className="tim-icons icon-gift-2"></i>
                  </span>
                </label>
                <label id="2" className="btn-simple btn btn-info btn-sm">
                  <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                    Sessions
                  </span>
                  <span className="d-block d-sm-none">
                    <i className="tim-icons icon-tap-02"></i>
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="chart-area d-flex justify-content-center">
            <canvas
              id="chart1"
              height="307"
              width="1087"
              className="chartjs-render-monitor"
            ></canvas>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-lg-3">
          <div className="card-stats card">
            <div className="card-body">
              <div className="row">
                <div className="col-5 g-1">
                  <div className="info-icon text-center icon-warning">
                    <i className="tim-icons icon-chat-33"></i>
                  </div>
                </div>
                <div className="col-7 g-1">
                  <div className="numbers">
                    <p className="card-category">Number</p>
                    <h3 className="card-title">150GB</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <div className="stats">
                <i className="tim-icons icon-refresh-01"></i> Update Now
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="card-stats card">
            <div className="card-body">
              <div className="row">
                <div className="col-5 g-1">
                  <div className="info-icon text-center icon-primary">
                    <i className="tim-icons icon-shape-star"></i>
                  </div>
                </div>
                <div className="col-7 g-1">
                  <div className="numbers">
                    <p className="card-category">Followers</p>
                    <h3 className="card-title">+45k</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <div className="stats">
                <i className="tim-icons icon-sound-wave"></i> Last Research
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="card-stats card">
            <div className="card-body">
              <div className="row">
                <div className="col-5 g-1">
                  <div className="info-icon text-center icon-success">
                    <i className="tim-icons icon-single-02"></i>
                  </div>
                </div>
                <div className="col-7 g-1">
                  <div className="numbers">
                    <p className="card-category">Users</p>
                    <h3 className="card-title">150,00</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <div className="stats">
                <i className="tim-icons icon-trophy"></i> Users feedback
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 g-1">
          <div className="card-chart card bgchart1">
            <div className="card-header">
              <h5 className="card-category margin-left-custom">
                Total Shipments
              </h5>
              <h3 className="card-title">
                <i className="tim-icons icon-bell-55 text-primary"></i> 763,215
              </h3>
            </div>
            <div className="card-body">
              <div className="chart-area d-flex justify-content-center">
                <canvas
                  id="chart2"
                  height="307"
                  width="412"
                  className="chartjs-render-monitor"
                ></canvas>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 g-1">
          <div className="card-chart card bgchart1">
            <div className="card-header">
              <h5 className="card-category margin-left-custom">Daily Sales</h5>
              <h3 className="card-title">
                <i className="tim-icons icon-delivery-fast text-info"></i>{" "}
                3,500€
              </h3>
            </div>
            <div className="card-body">
              <div className="chart-area d-flex justify-content-center">
                <canvas
                  id="chart3"
                  height="307"
                  width="412"
                  className="chartjs-render-monitor"
                ></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminHome;
