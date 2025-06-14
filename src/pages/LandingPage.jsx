import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="p-10 text-center">
      <h1 className="text-4xl font-bold mb-6">Landing Page</h1>
      <div className="space-x-4">
        <Link to="/login" className="text-blue-500 underline">Login</Link>
        <Link to="/signup" className="text-green-500 underline">Sign Up</Link>
        <Link to="/dashboard" className="text-purple-500 underline">Dashboard</Link>
      </div>
    </div>
  );
}

export default LandingPage;
