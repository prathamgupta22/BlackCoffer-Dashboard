import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  PieChart,
  Pie,
  ScatterChart,
  Scatter,
  LineChart,
  Line,
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/data");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const countryCounts = data.reduce((counts, item) => {
    counts[item.country] = (counts[item.country] || 0) + 1;
    return counts;
  }, {});

  // Convert country counts object to an array of objects with name and value properties
  const pieData = Object.keys(countryCounts).map((country) => ({
    name: country,
    value: countryCounts[country],
  }));

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AF19FF"];
  return (
    <main className="main-container">
      <div className="charts">
        <LineChart
          width={600}
          height={300}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="published" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="intensity" stroke="#8884d8" />
        </LineChart>
        <ScatterChart
          width={800}
          height={400}
          margin={{ top: 20, right: 50, left: 50, bottom: 5 }}
        >
          <CartesianGrid />
          <XAxis type="number" dataKey="intensity" name="Intensity" />
          <YAxis type="category" dataKey="country" name="Country" />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <Legend />
          <Scatter name="Sector" data={data} fill="#8884d8" />
        </ScatterChart>
        <PieChart width={800} height={400}>
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
            label
          >
            {pieData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
        <BarChart
          width={800}
          height={400}
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 100 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="country" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="intensity" fill="#8884d8" />
          <Bar dataKey="sector" fill="#82ca9d" />
        </BarChart>
      </div>
    </main>
  );
}

export default Home;
