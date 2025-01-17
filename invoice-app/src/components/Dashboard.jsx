import { useState } from 'react'

export default function Dashboard() {
  const [invoices] = useState([
    {
      id: '#10',
      date: 'Mar 02, 2023',
      amount: 100.0,
      description: 'Lorem ipsum',
      dueInDays: 4
    },
    {
      id: '#10',
      date: 'Mar 02, 2023',
      amount: 100.0,
      description: 'Lorem ipsum',
      dueInDays: 4
    },
    {
      id: '#10',
      date: 'Mar 02, 2023',
      amount: 100.0,
      description: 'Lorem ipsum',
      dueInDays: 4
    }
  ])

  return (
    <div className="max-w-lg mx-auto min-h-screen bg-white">
      {/* Top curved header */}
      <div className="bg-blue-500 rounded-b-[30px] pb-16 pt-8">
        <div className="px-4 pt-4 relative">
            <h1 className="text-white text-lg text-center absolute inset-0 flex items-center justify-center mt-4 font-semibold">Invoice</h1>
            <div className="w-8 h-8 bg-gray-200 rounded-full absolute top-0 right-4" />
        </div>
      </div>
      {/* Stats cards - positioned to overlap with header */}
<div className="px-4 -mt-4">
  <div className="bg-white rounded-2xl p-6 shadow-md flex justify-between items-center">
    {/* Amount Raised */}
    <div className="bg-blue-100 rounded-lg p-4 flex-1 text-center mr-2">
      <p className="text-sm text-gray-600">Amount Raised</p>
      <p className="text-2xl font-semibold">₹10,000</p>
    </div>

    {/* Amount Paid */}
    <div className="rounded-lg p-4 flex-1 text-center">
      <p className="text-sm text-gray-600">Amount Paid</p>
      <p className="text-2xl font-semibold text-gray-800">₹5,000</p>
    </div>
  </div>
</div>


      {/* Recent invoices section */}
      <div className="px-4 mt-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-gray-600">Recent</h2>
          <button className="text-black-500 font-semibold text-sm">View all</button>
        </div>

        {/* Invoice list */}
        <div className="space-y-4">
          {invoices.map((invoice, index) => (
            <div key={index} className="flex justify-between py-2 border mt-2 rounded-2xl">
              <div className="space-y-1 space-x-2">
                <p className='ml-2'>No. {invoice.id}</p>
                <p className="text-sm text-gray-500">{invoice.date}</p>
                <button className="text-sm border px-3 rounded ">
                  Saved
                </button>
              </div>
              <div className="text-right space-y-1">
                <p className="text-gray-600 space-x-1 mr-2">{invoice.description}</p>
                <p className='mr-2'>₹{invoice.amount}</p>
                <p className="text-sm text-gray-500 mr-2">Due in {invoice.dueInDays} days</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Create new invoice button */}
      <div className=" my-20 bottom-4 left-4 right-4 px-4">
        <button className="w-full bg-blue-500 text-white py-3 rounded-xl font-medium">
          + Create new Invoice
        </button>
      </div>
    </div>
  )
}