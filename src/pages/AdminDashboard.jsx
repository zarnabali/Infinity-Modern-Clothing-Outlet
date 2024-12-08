import React, { useState, useRef, useEffect } from "react";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import { gsap } from "gsap";

// Register Chart.js components
ChartJS.register(
  LineElement, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  BarElement,
  Title,
  Tooltip,
  Legend
);

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState("Dashboard");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const contentRef = useRef(null);
  const chartRef = useRef(null);

  // GSAP animation for content transitions
  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 0.5, ease: "power3.out" }
    );

    const chartElement = chartRef.current;
    if (chartElement) {
      gsap.from(chartElement, {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: "power4.out",
      });
    }
  }, [activeSection]);

  // Dummy data for the sales chart
  const salesData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Sales This Week",
        data: [120, 200, 150, 170, 220, 180, 250],
        fill: false,
        backgroundColor: "#3b82f6",
        borderColor: "#3b82f6",
      },
      {
        label: "Sales Last Week",
        data: [100, 180, 130, 160, 200, 160, 230],
        fill: false,
        backgroundColor: "#f59e0b",
        borderColor: "#f59e0b",
      },
    ],
  };

  // Dummy data for the bar chart (Total Sales)
  const barData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Total Sales",
        data: [1500, 2500, 1800, 2200, 2700, 2400, 2800],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };
  // Dummy data for Vendor Management table
  const vendors = [
    {
      name: "Vendor A",
      registrationDate: "01/01/2024",
      status: "Active",
      performance: "85%",
    },
    {
      name: "Vendor B",
      registrationDate: "15/02/2024",
      status: "Inactive",
      performance: "60%",
    },
    {
      name: "Vendor C",
      registrationDate: "20/03/2024",
      status: "Active",
      performance: "90%",
    },
  ];

  const barOptions = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `$${tooltipItem.raw}`;
          },
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
    animation: {
      duration: 1000,
      easing: "easeInOutQuart",
    },
  };

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const handleDarkModeToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`flex h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'} font-arimo`}>
      {/* Sidebar */}
      <aside className={`w-64 ${isDarkMode ? 'bg-gray-800 text-gray-200' : 'bg-gray-800 text-gray-200'} flex flex-col`}>
        <div className="p-6 text-2xl font-bold border-b border-gray-700">Admin Dashboard</div>
        <nav className="flex flex-col mt-4">
          {["Dashboard", "Vendor Management", "Product Oversight", "System Management", "Reports"].map((item) => (
            <button
              key={item}
              onClick={() => handleSectionChange(item)}
              className={`py-3 px-6 text-left hover:bg-gray-700 focus:outline-none ${activeSection === item ? "bg-gray-700" : ""}`}
            >
              {item}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex flex-col flex-grow">
        {/* Header */}
        <header className="flex items-center justify-between p-4 bg-white shadow-md font-montserrat">
          <div className="text-2xl font-semibold">Welcome, Admin</div>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 border border-black bg-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              className="relative p-2 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none"
              onClick={handleDarkModeToggle}
            >
              🌙
            </button>
            <div
              className="w-10 h-10 bg-gray-300 rounded-full"
              onClick={() => (window.location.href = "/login")}
            > Logout</div>
          </div>
        </header>

        {/* Content Area */}
        <main ref={contentRef} className="flex-grow p-6 overflow-auto font-montserrat">
          {activeSection === "Dashboard" && (
            <section>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="p-6 bg-white shadow-lg rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 font-arimo">Total Sales (This Week)</h3>
                  <p className="text-3xl font-bold text-blue-500">$16,000</p>
                  <p className="text-green-500">+15% from last week</p>
                  <div className="mt-6">
                    <Bar ref={chartRef} data={barData} options={barOptions} />
                  </div>
                </div>
                <div className="p-6 bg-white shadow-lg rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 font-arimo">Sales Overview</h3>
                  <Line data={salesData} />
                </div>
              </div>

              <div className="mt-6">
                <h2 className="text-2xl font-semibold mb-4">Product Oversight</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[1, 2, 3].map((product) => (
                    <div key={product} className="bg-white shadow-lg rounded-lg p-4">
                      <img
                        src={`https://via.placeholder.com/300x200?text=Product+${product}`}
                        alt={`Product ${product}`}
                        className="w-full h-40 object-cover mb-4 rounded"
                      />
                      <h3 className="text-xl font-semibold">Product {product}</h3>
                      <p className="text-gray-600">Category: Electronics</p>
                      <div className="mt-4 flex gap-2">
                        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                          Edit
                        </button>
                        <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {activeSection === "Vendor Management" && (
            <section>
              <h2 className="text-2xl font-semibold mb-6">Vendor Management</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-lg rounded-lg">
                  <thead>
                    <tr className="bg-gray-200 text-left">
                      <th className="py-3 px-6">Vendor Name</th>
                      <th className="py-3 px-6">Registration Date</th>
                      <th className="py-3 px-6">Status</th>
                      <th className="py-3 px-6">Performance</th>
                      <th className="py-3 px-6">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {vendors.map((vendor, index) => (
                      <tr key={index} className="border-t">
                        <td className="py-3 px-6">{vendor.name}</td>
                        <td className="py-3 px-6">{vendor.registrationDate}</td>
                        <td className="py-3 px-6">
                          <span
                            className={`px-2 py-1 text-sm rounded-full ${
                              vendor.status === "Active"
                                ? "bg-green-200 text-green-800"
                                : "bg-red-200 text-red-800"
                            }`}
                          >
                            {vendor.status}
                          </span>
                        </td>
                        <td className="py-3 px-6">{vendor.performance}</td>
                        <td className="py-3 px-6">
                          <div className="flex gap-2">
                            <button className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600">
                              Approve
                            </button>
                            <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
                              Reject
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {activeSection === "Product Oversight" && (
            <section>
              <h2 className="text-2xl font-semibold mb-6">Product Oversight</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Dummy Product Cards */}
                {[1, 2, 3, 4, 5, 6].map((product) => (
                  <div key={product} className="bg-white shadow-lg rounded-lg p-4">
                    <img
                      src={`https://via.placeholder.com/300x200?text=Product+${product}`}
                      alt={`Product ${product}`}
                      className="w-full h-40 object-cover mb-4 rounded"
                    />
                    <h3 className="text-xl font-semibold">Product {product}</h3>
                    <p className="text-gray-600">Category: Electronics</p>
                    <span
                      className={`inline-block px-2 py-1 text-sm rounded-full ${
                        product % 2 === 0
                          ? "bg-green-200 text-green-800"
                          : "bg-red-200 text-red-800"
                      }`}
                    >
                      {product % 2 === 0 ? "Approved" : "Rejected"}
                    </span>
                    <div className="mt-4 flex gap-2">
                      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                        Edit
                      </button>
                      <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {activeSection === "System Management" && (
            <section>
              <h2 className="text-2xl font-semibold mb-6">System Management</h2>
              {/* Add system management functionalities here */}
              <div className="p-6 bg-white shadow-lg rounded-lg">
                <p className="text-gray-700">System management features will be here.</p>
              </div>
            </section>
          )}

          {activeSection === "Reports" && (
            <section>
              <h2 className="text-2xl font-semibold mb-6">Reporting & Analytics</h2>
              {/* Add reporting and analytics functionalities here */}
              <div className="p-6 bg-white shadow-lg rounded-lg">
                <p className="text-gray-700">Reports and analytics charts will be here.</p>
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;