import React from 'react';
import { FaEye, FaSearch, FaCalendarAlt, FaDirections, FaMousePointer, FaLink } from 'react-icons/fa';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { HiMenu } from 'react-icons/hi';
import { FiShare2 } from 'react-icons/fi';

const statisticsData = [
  {
    name: 'Interactions',
    value: 231,
    change: '+12%',
    icon: <HiOutlineUserGroup className="text-[#5259a6] w-6 h-6" />,
  },
  {
    name: 'Views',
    value: 111,
    change: '-3%',
    icon: <FaEye className="text-[#5259a6] w-6 h-6" />,
  },
  {
    name: 'Searches',
    value: 23,
    change: '+18%',
    icon: <FaSearch className="text-[#5259a6] w-6 h-6" />,
  },
  {
    name: 'Bookings',
    value: 14,
    change: '+10%',
    icon: <FaCalendarAlt className="text-[#5259a6] w-6 h-6" />,
  },
  {
    name: 'Directions',
    value: 10,
    change: '-3%',
    icon: <FaDirections className="text-[#5259a6] w-6 h-6" />,
  },
  {
    name: 'Website Clicks',
    value: 7,
    change: '-1%',
    icon: <FaMousePointer className="text-[#5259a6] w-6 h-6" />,
  },
];

export default function Screen3() {
  return (
    <div className="flex flex-col min-h-screen bg-white p-4 font-sans overflow-y-auto">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold text-[#5259a6]">SonicLinker</h1>
        <div className="flex items-center space-x-4">
          <img
            src="https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover border border-gray-300"
          />
          <HiMenu className="text-gray-600 w-6 h-6 cursor-pointer" />
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        {statisticsData.map((stat, index) => (
          <div
            key={index}
            className="bg-purple-50 p-4 rounded-lg shadow-sm flex flex-col justify-between relative"
          >
            {/* Name and Icon */}
            <div className="flex items-center justify-between mb-2">
              <p className="text-base font-semibold text-gray-700">{stat.name}</p>
              <div className="bg-white p-2 rounded-full">{stat.icon}</div>
            </div>

            {/* Value and Percentage */}
            <div className="flex items-center">
              <p className="text-xl font-bold text-gray-800">{stat.value}</p>
              <p
                className={`text-sm font-semibold px-5 ${stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'
                  }`}
              >
                {stat.change}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Recommended Actions */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold text-gray-800">Recommended actions</h2>
        <div className="mt-3 p-4 rounded-lg">
          <h2 className="text-lg text-black font-bold py-2">Get more reviews</h2>
          <p className="text-sm text-gray-500 mb-2">
            Sharing your GBP link with your customers
          </p>
          <div className="flex items-center space-x-2">
            <div className="relative flex-1">
              <FaLink
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black"
                style={{ fontWeight: 300 }}
              />
              <input
                type="text"
                readOnly
                value="https://njenwiJkZeeljknweoiho..."
                className="w-full bg-gray-100 text-gray-500 pl-10 p-2 rounded-lg border border-gray-300"
              />
            </div>
            <button className="bg-[#5259a6] text-white px-4 py-2 rounded-lg text-sm flex items-center justify-center h-[42px]">
              <FiShare2 className="text-white w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Keyword Selection */}
      <div className="mt-6">
        <h3 className="text-lg font-bold text-gray-800">
          Choose keywords to rank better on:
        </h3>
        <div className="mt-4">
          {[
            'Japanese food near me',
            'Best asian restaurant near me',
            'Best asian restaurant near me',
            'Best asian restaurant near me',
          ].map((keyword, index) => (
            <label key={index} className="flex items-center mb-2">
              <input
                type="checkbox"
                className="mr-2 h-4 w-4 text-[#5259a6] border-gray-300 rounded"
              />
              <span className="text-sm text-gray-700">{keyword}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
