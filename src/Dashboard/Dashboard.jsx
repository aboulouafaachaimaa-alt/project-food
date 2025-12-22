import React, { useState, useEffect } from 'react';
import { Search, Bell, Sun, Moon, Menu, X, Home, BarChart2, DollarSign, Users, Settings, LogOut, TrendingUp, ShoppingCart, Activity, ChevronRight } from 'lucide-react';

const PremiumDashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => setMounted(true), 100);
  }, []);

  const stats = [
    { icon: Users, label: 'Total Users', value: '24,582', change: '+12.5%', gradient: 'bg-gradient-to-br from-purple-500 to-pink-500' },
    { icon: DollarSign, label: 'Revenue', value: '$482.5K', change: '+23.1%', gradient: 'bg-gradient-to-br from-blue-500 to-cyan-500' },
    { icon: TrendingUp, label: 'Conversion', value: '3.24%', change: '+5.2%', gradient: 'bg-gradient-to-br from-green-500 to-emerald-500' },
    { icon: ShoppingCart, label: 'Orders', value: '8,492', change: '+18.3%', gradient: 'bg-gradient-to-br from-orange-500 to-red-500' }
  ];

  const menuItems = [
    { icon: Home, label: 'Dashboard', active: true },
    { icon: BarChart2, label: 'Analytics', active: false },
    { icon: DollarSign, label: 'Sales', active: false },
    { icon: Users, label: 'Users', active: false },
    { icon: Settings, label: 'Settings', active: false }
  ];

  const activities = [
    { icon: Users, text: 'New user registered', time: '2 min ago', bgColor: 'bg-purple-500' },
    { icon: DollarSign, text: 'Payment received $2,450', time: '15 min ago', bgColor: 'bg-green-500' },
    { icon: ShoppingCart, text: '12 new orders placed', time: '1 hour ago', bgColor: 'bg-blue-500' },
    { icon: Activity, text: 'Server maintenance completed', time: '3 hours ago', bgColor: 'bg-orange-500' }
  ];

  const transactions = [
    { id: '#TRX-001', customer: 'Sarah Johnson', amount: '$234.50', status: 'Completed', date: '2024-12-11' },
    { id: '#TRX-002', customer: 'Michael Chen', amount: '$892.00', status: 'Pending', date: '2024-12-11' },
    { id: '#TRX-003', customer: 'Emma Williams', amount: '$456.75', status: 'Completed', date: '2024-12-10' },
    { id: '#TRX-004', customer: 'James Brown', amount: '$125.30', status: 'Failed', date: '2024-12-10' }
  ];

  return (
    <div className={`min-h-screen transition-all duration-500 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-gray-50 via-purple-50 to-blue-50'}`}>
      
      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 h-full z-40 transition-all duration-500 overflow-hidden ${
        sidebarOpen ? 'w-64' : 'w-0'
      } ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-2xl`}>
        <div className={`p-6 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Dashboard Pro
          </h1>
        </div>
        
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.label}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                item.active
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : darkMode 
                    ? 'text-gray-300 hover:bg-gray-700' 
                    : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <item.icon size={20} />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
          
          <button className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 mt-8 ${
            darkMode ? 'text-red-400 hover:bg-gray-700' : 'text-red-600 hover:bg-red-50'
          }`}>
            <LogOut size={20} />
            <span className="font-medium">Logout</span>
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <div className={`transition-all duration-500 ${sidebarOpen ? 'ml-64' : 'ml-0'}`}>
        
        {/* Header */}
        <header className={`sticky top-0 z-30 backdrop-blur-xl shadow-lg ${
          darkMode ? 'bg-gray-800 bg-opacity-80' : 'bg-white bg-opacity-80'
        }`}>
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className={`p-2 rounded-xl transition-all duration-300 ${
                  darkMode ? 'hover:bg-gray-700 text-white' : 'hover:bg-gray-100 text-gray-800'
                }`}
              >
                {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              
              <div className="relative hidden md:block">
                <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
                  darkMode ? 'text-gray-400' : 'text-gray-500'
                }`} size={20} />
                <input
                  type="text"
                  placeholder="Search anything..."
                  className={`pl-12 pr-4 py-2 w-80 rounded-xl focus:outline-none transition-all duration-300 ${
                    darkMode 
                      ? 'bg-gray-700 text-white placeholder-gray-400' 
                      : 'bg-gray-100 text-gray-800 placeholder-gray-500'
                  }`}
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-xl transition-all duration-300 ${
                  darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                }`}
              >
                {darkMode ? <Sun size={24} className="text-yellow-400" /> : <Moon size={24} className="text-purple-600" />}
              </button>
              
              <button className={`relative p-2 rounded-xl transition-all duration-300 ${
                darkMode ? 'hover:bg-gray-700 text-white' : 'hover:bg-gray-100 text-gray-800'
              }`}>
                <Bell size={24} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className={`flex items-center space-x-2 p-2 rounded-xl transition-all duration-300 ${
                    darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                  }`}
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold">
                    JD
                  </div>
                </button>
                
                {showUserMenu && (
                  <div className={`absolute right-0 mt-2 w-48 rounded-xl shadow-2xl py-2 ${
                    darkMode ? 'bg-gray-800' : 'bg-white'
                  }`}>
                    <a href="#" className={`block px-4 py-2 ${darkMode ? 'hover:bg-gray-700 text-white' : 'hover:bg-gray-100 text-gray-800'}`}>Profile</a>
                    <a href="#" className={`block px-4 py-2 ${darkMode ? 'hover:bg-gray-700 text-white' : 'hover:bg-gray-100 text-gray-800'}`}>Settings</a>
                    <a href="#" className="block px-4 py-2 text-red-600 hover:bg-red-50">Logout</a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6 space-y-6">
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 hover:scale-105 ${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                }`}
                style={{
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? 'translateY(0)' : 'translateY(32px)',
                  transitionDelay: `${i * 100}ms`
                }}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl ${stat.gradient} shadow-lg`}>
                      <stat.icon className="text-white" size={24} />
                    </div>
                    <span className="text-green-500 text-sm font-semibold">{stat.change}</span>
                  </div>
                  <h3 className={`text-3xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    {stat.value}
                  </h3>
                  <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Charts & Activities */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Revenue Chart */}
            <div className={`lg:col-span-2 rounded-2xl shadow-xl p-6 ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            }`}>
              <h2 className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                Revenue Overview
              </h2>
              <div className="h-64 flex items-end justify-around space-x-2">
                {[65, 45, 75, 55, 85, 70, 90, 60, 80, 70, 95, 85].map((height, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-purple-600 to-blue-600 rounded-t-lg transition-all duration-1000 hover:opacity-80 cursor-pointer"
                    style={{
                      height: mounted ? `${height}%` : '0%',
                      transitionDelay: `${i * 50}ms`
                    }}
                  ></div>
                ))}
              </div>
              <div className="flex justify-around mt-4 text-xs text-gray-500">
                {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map(m => (
                  <span key={m}>{m}</span>
                ))}
              </div>
            </div>

            {/* Recent Activities */}
            <div className={`rounded-2xl shadow-xl p-6 ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            }`}>
              <h2 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                Recent Activity
              </h2>
              <div className="space-y-4">
                {activities.map((activity, i) => (
                  <div
                    key={i}
                    className="flex items-start space-x-3 transition-all duration-300 hover:translate-x-2"
                    style={{
                      opacity: mounted ? 1 : 0,
                      transitionDelay: `${400 + i * 100}ms`
                    }}
                  >
                    <div className={`${activity.bgColor} p-2 rounded-lg shadow-lg`}>
                      <activity.icon className="text-white" size={16} />
                    </div>
                    <div className="flex-1">
                      <p className={`text-sm ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                        {activity.text}
                      </p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Transactions Table */}
          <div className={`rounded-2xl shadow-xl p-6 overflow-hidden ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className="flex items-center justify-between mb-4">
              <h2 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                Latest Transactions
              </h2>
              <button className="text-purple-600 hover:text-purple-700 flex items-center space-x-1">
                <span className="text-sm font-medium">View All</span>
                <ChevronRight size={16} />
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className={`border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                    <th className={`text-left py-3 px-4 text-sm font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>ID</th>
                    <th className={`text-left py-3 px-4 text-sm font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Customer</th>
                    <th className={`text-left py-3 px-4 text-sm font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Amount</th>
                    <th className={`text-left py-3 px-4 text-sm font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Status</th>
                    <th className={`text-left py-3 px-4 text-sm font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((tx) => (
                    <tr
                      key={tx.id}
                      className={`border-b transition-all duration-300 ${
                        darkMode ? 'border-gray-700 hover:bg-gray-700' : 'border-gray-100 hover:bg-gray-50'
                      }`}
                    >
                      <td className={`py-4 px-4 text-sm font-mono ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {tx.id}
                      </td>
                      <td className={`py-4 px-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                        {tx.customer}
                      </td>
                      <td className={`py-4 px-4 font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                        {tx.amount}
                      </td>
                      <td className="py-4 px-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          tx.status === 'Completed' ? 'bg-green-100 text-green-700' :
                          tx.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {tx.status}
                        </span>
                      </td>
                      <td className={`py-4 px-4 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {tx.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Create Invoice', 'Add New User', 'Generate Report'].map((action, i) => (
              <button
                key={action}
                className="p-6 rounded-2xl shadow-xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-purple-600 to-blue-600 text-white font-semibold text-lg"
                style={{
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? 'translateY(0)' : 'translateY(32px)',
                  transitionDelay: `${1000 + i * 100}ms`
                }}
              >
                {action}
              </button>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default PremiumDashboard;