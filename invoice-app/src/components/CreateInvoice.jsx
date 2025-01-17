import React from "react";
import { ArrowLeft } from "lucide-react";
import { FaUser, FaFileAlt, FaStickyNote, FaPen, FaCamera } from "react-icons/fa";

export default function CreateInvoice() {
  return (
    <div className="max-w-lg mx-auto bg-white min-h-screen p-4">
      {/* Header */}
      <div className="bg-blue-500 text-white pb-4 pt-6 px-4 -mr-4 -ml-4 -mt-4 flex justify-between items-center">
        <button className="text-lg border rounded-2xl">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-lg font-semibold">Invoice</h1>
        <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
      </div>

      {/* Invoice Details */}
      <div className="mt-6">
        {/* Details */}
        <h2 className="text-gray-500 ml-1 text-sm font-bold">Details</h2>
        <div className="border rounded-2xl shadow-sm p-4 mb-4 mt-2">
          <p className="text-sm text-gray-400 font-semibold mt-1">No. #10</p>
          <p className="text-lg font-semibold">Mar 02, 2023</p>
          <p className="text-sm text-gray-400 font-semibold">Due on Mar 09, 2023</p>
        </div>

        {/* Client */}
        <h2 className="text-gray-500 ml-2 text-sm font-bold">Client</h2>
        <div className="border mt-2 rounded-2xl shadow-sm p-4 mb-4 flex items-center space-x-4">
          <div className="w-10 h-10 bg-gray-100 text-blue-500 rounded-full flex items-center justify-center">
            <FaUser size={20} />
          </div>
          <p className="text-blue-500 font-semibold">+ Add client details</p>
        </div>

        {/* Items */}
        <h2 className="text-gray-500 ml-2 text-sm font-bold">Items</h2>
        <div className="border rounded-2xl mt-2 shadow-sm p-4 mb-4 flex items-center space-x-4">
          <div className="w-10 h-10 bg-gray-100 text-blue-500 rounded-full flex items-center justify-center">
            <FaFileAlt size={20} />
          </div>
          <p className="text-blue-500 font-semibold">+ Add items</p>
        </div>

        {/* Total */}
        <h2 className="text-gray-500 ml-2 text-sm font-bold">Total</h2>
        <div className="border rounded-2xl mt-2 shadow-sm p-4 mb-4">
          <div className="flex justify-between mt-1">
            <p className="text-gray-400 font-semibold -mt-1">Subtotal</p>
            <p className="text-gray-400 font-semibold">₹0.0</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-400 font-semibold">Tax</p>
            <p className="text-gray-400 font-semibold">₹0.0</p>
          </div>
          <div className="flex justify-between mt-3 border-t pt-3">
            <p className="font-semibold">Total</p>
            <p className="font-semibold">₹0.0</p>
          </div>
        </div>

        {/* Note */}
        <h2 className="text-gray-500 ml-2 text-sm font-bold">Note</h2>
        <div className="border rounded-2xl mt-2 shadow-sm p-4 mb-4 flex items-center space-x-4">
          <div className="w-10 h-10 bg-gray-100 text-blue-500 rounded-full flex items-center justify-center">
            <FaStickyNote size={20} />
          </div>
          <p className="font-semibold">+ Add note</p>
        </div>

        {/* Signature */}
        <h2 className="text-gray-500 ml-2 text-sm font-bold">Signature</h2>
        <div className="border rounded-xl mt-2 shadow-sm p-4 mb-4 flex items-center space-x-4">
          <div className="w-10 h-10 bg-gray-100 text-blue-500 rounded-full flex items-center justify-center">
            <FaPen size={20} />
          </div>
          <p className="font-semibold">+ Add signature</p>
        </div>

        {/* Photo */}
        <h2 className="text-gray-500 ml-2 text-sm font-bold">Photo</h2>
        <div className="border rounded-2xl mt-2 shadow-sm p-4 mb-6 flex items-center space-x-4">
          <div className="w-10 h-10 bg-gray-100 text-blue-500 rounded-full flex items-center justify-center">
            <FaCamera size={20} />
          </div>
          <p className="font-semibold">+ Add photo</p>
        </div>

        {/* Save and Share Buttons */}
        <div className="flex justify-between space-x-4">
          <button className="w-full bg-blue-500 text-white py-3 rounded-xl font-medium">
            Save
          </button>
          <button className="w-full border  text-blue-500 py-3 rounded-xl font-medium">
            Share
          </button>
        </div>
      </div>
    </div>
  );
}
