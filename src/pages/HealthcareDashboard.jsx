import React, { useState, useEffect, useMemo } from 'react';
import { 
  Users, 
  Calendar, 
  AlertTriangle, 
  CheckCircle, 
  Plus, 
  CreditCard, 
  Settings, 
  FileText, 
  BarChart3,
  Bell,
  User
} from 'lucide-react';

// Mock data - in a real app you would fetch this from an API
const upcomingVaccinesData = [
  {
    name: 'Priya Sharma',
    dob: '05/05/2022',
    age: '2 years',
    vaccine: 'Polio Vaccine',
    due: 'Tomorrow',
    status: 'schedule',
    avatar: 'PS'
  },
  {
    name: 'Arjan Patel',
    dob: '08/11/2023',
    age: '6 months',
    vaccine: 'DPT Booster',
    due: '3 days',
    status: 'schedule',
    avatar: 'AP'
  },
  {
    name: 'Kavya Singh',
    dob: '22/03/2023',
    age: '1 year',
    vaccine: 'Hepatitis B',
    due: '5 days',
    status: 'schedule',
    avatar: 'KS'
  }
];

const overdueVaccinesData = [
  {
    name: 'Rahul Kumar',
    age: '3 years',
    vaccine: 'Polio Vaccine',
    overdue: '15 days',
    avatar: 'RK'
  },
  {
    name: 'Ananya Gupta',
    age: '8 months',
    vaccine: 'Measles Vaccine',
    overdue: '8 days',
    avatar: 'AG'
  }
];

const DashboardContent = ({ upcomingVaccines, overdueVaccines }) => {
  return (
    <>
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Children</p>
              <p className="text-2xl font-bold text-gray-900">1,247</p>
            </div>
            <Users className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Upcoming Vaccines</p>
              <p className="text-2xl font-bold text-yellow-600">23</p>
            </div>
            <Calendar className="w-8 h-8 text-yellow-500" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Overdue Vaccines</p>
              <p className="text-2xl font-bold text-red-600">8</p>
            </div>
            <AlertTriangle className="w-8 h-8 text-red-500" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Completed Today</p>
              <p className="text-2xl font-bold text-green-600">12</p>
            </div>
            <CheckCircle className="w-8 h-8 text-green-500" />
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 mb-8">
        <button className="flex-1 min-w-[200px] bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-700 transition-colors">
          <Plus className="w-4 h-4" />
          <span>Add Child</span>
        </button>
        <button className="flex-1 min-w-[200px] bg-teal-600 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-teal-700 transition-colors">
          <CreditCard className="w-4 h-4" />
          <span>View Digital Vaccine Card</span>
        </button>
        <button className="flex-1 min-w-[200px] bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-800 transition-colors">
          <Calendar className="w-4 h-4" />
          <span>Schedule Appointment</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Upcoming Vaccines */}
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="p-6 border-b">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Upcoming Vaccines</h3>
                <p className="text-sm text-gray-500">Next 7 days</p>
              </div>
            </div>
          </div>
          <div className="divide-y">
            {upcomingVaccines.map((vaccine, index) => (
              <div key={index} className="p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div 
                    className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center"
                    aria-label={`Avatar for ${vaccine.name}`}
                  >
                    <span className="text-sm font-medium text-blue-700">{vaccine.avatar}</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{vaccine.name}</p>
                    <p className="text-sm text-gray-500">DOB: {vaccine.dob} • Age: {vaccine.age}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{vaccine.vaccine}</p>
                  <p className="text-sm text-gray-500">Due: {vaccine.due}</p>
                  <button className="mt-1 bg-blue-600 text-white px-3 py-1 rounded text-xs hover:bg-blue-700 transition-colors">
                    Schedule
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t">
            <button className="text-blue-600 text-sm font-medium hover:text-blue-700">
              View All Upcoming
            </button>
          </div>
        </div>

        {/* Overdue Vaccines */}
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="p-6 border-b">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Overdue Vaccines</h3>
                <p className="text-sm text-gray-500">Requires immediate attention</p>
              </div>
            </div>
          </div>
          <div className="divide-y">
            {overdueVaccines.map((vaccine, index) => (
              <div key={index} className="p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div 
                    className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center"
                    aria-label={`Avatar for ${vaccine.name}`}
                  >
                    <span className="text-sm font-medium text-red-700">{vaccine.avatar}</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{vaccine.name}</p>
                    <p className="text-sm text-gray-500">Age: {vaccine.age}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{vaccine.vaccine}</p>
                  <p className="text-sm text-red-600">Overdue by {vaccine.overdue}</p>
                  <button className="mt-1 bg-red-500 text-white px-3 py-1 rounded text-xs hover:bg-red-600 transition-colors">
                    Contact Parent
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t">
            <button className="text-red-600 text-sm font-medium hover:text-red-700">
              View All Overdue
            </button>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="mt-8 bg-white rounded-lg shadow-sm border p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h3>
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Vaccination Rate</span>
          <span className="text-2xl font-bold text-green-600">94.2%</span>
        </div>
      </div>
    </>
  );
};

export default function HealthcareDashboard() {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [loading, setLoading] = useState(true);
  const [upcomingVaccines, setUpcomingVaccines] = useState([]);
  const [overdueVaccines, setOverdueVaccines] = useState([]);

  // Memoize data to prevent unnecessary re-renders
  const memoizedUpcomingVaccines = useMemo(() => upcomingVaccines, [upcomingVaccines]);
  const memoizedOverdueVaccines = useMemo(() => overdueVaccines, [overdueVaccines]);

  useEffect(() => {
    // Simulate data loading
    const loadData = async () => {
      try {
        // In a real app, you would fetch from an API here
        await new Promise(resolve => setTimeout(resolve, 1000));
        setUpcomingVaccines(upcomingVaccinesData);
        setOverdueVaccines(overdueVaccinesData);
        setLoading(false);
      } catch (error) {
        console.error('Error loading data:', error);
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const sidebarItems = [
    { name: 'Dashboard', icon: BarChart3, active: true },
    { name: 'Children Registry', icon: Users },
    { name: 'Vaccination Records', icon: FileText },
    { name: 'Appointments', icon: Calendar },
    { name: 'Reports', icon: BarChart3 },
    { name: 'Settings', icon: Settings }
  ];

  const renderTabContent = () => {
    if (loading) {
      return (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      );
    }

    switch(activeTab) {
      case 'Dashboard':
        return (
          <DashboardContent 
            upcomingVaccines={memoizedUpcomingVaccines} 
            overdueVaccines={memoizedOverdueVaccines} 
          />
        );
      // Add cases for other tabs here
      default:
        return (
          <DashboardContent 
            upcomingVaccines={memoizedUpcomingVaccines} 
            overdueVaccines={memoizedOverdueVaccines} 
          />
        );
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-sm border-r">
        {/* Logo */}
        <div className="p-6 border-b">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <div>
              <h1 className="font-bold text-gray-900">SurakshaVax</h1>
              <p className="text-sm text-gray-500">Healthcare Portal</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          {sidebarItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveTab(item.name)}
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                activeTab === item.name
                  ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
              aria-current={activeTab === item.name ? 'page' : undefined}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-sm font-medium">{item.name}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white border-b px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">{activeTab}</h2>
              <p className="text-sm text-gray-500">Welcome back, Dr. Sarah Wilson</p>
            </div>
            <div className="flex items-center space-x-4">
              <select className="text-sm border rounded-md px-3 py-1">
                <option>English</option>
                <option>हिंदी</option>
              </select>
              <button aria-label="Notifications">
                <Bell className="w-5 h-5 text-gray-400" />
              </button>
              <div 
                className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center"
                aria-label="User profile"
              >
                <User className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          {renderTabContent()}
        </main>
      </div>
    </div>
  );
}