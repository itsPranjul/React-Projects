import React, { useState } from "react";
import Dashboard from "./components/Dashboard"; // Your first component
import CreateInvoice from "./components/CreateInvoice"; // Your second component

export default function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Buttons */}
      <div className="flex justify-center space-x-4 py-4">
        <button
          onClick={() => setCurrentPage("dashboard")}
          className={`px-4 py-2 rounded-lg font-medium ${
            currentPage === "dashboard" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Dashboard
        </button>
        <button
          onClick={() => setCurrentPage("createInvoice")}
          className={`px-4 py-2 rounded-lg font-medium ${
            currentPage === "createInvoice" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Create Invoice
        </button>
      </div>

      {/* Render the current page */}
      <div className="mt-4">
        {currentPage === "dashboard" && <Dashboard />}
        {currentPage === "createInvoice" && <CreateInvoice />}
      </div>
    </div>
  );
}
