import React from 'react';
import { Link } from 'react-router-dom';
import RoleSelector from '../components/RoleSelector';
import Footer from '../components/Footer';

const LandingPage = ({ currentRole, onRoleChange }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-purple-50">
      {/* Navigation Header */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h2 className="text-2xl font-bold text-primary-600">Pioneer Learning</h2>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/explore" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">
                Explore
              </Link>
              <div className="w-px h-6 bg-gray-300"></div>
              <span className="text-sm text-gray-500">Current Role:</span>
              <span className="badge badge-primary">{currentRole}</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="mb-8">
              <span className="inline-block bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                🚀 AI-Powered English Learning
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              Pioneer English
              <span className="text-primary-600"> Learning Platform</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Structured homework guidance and AI-powered feedback for B2–C1 level English learners. 
              Based on the Pioneer book series, designed for students and teachers.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
              <Link
                to="/explore"
                className="btn btn-primary btn-lg"
              >
                🎯 Explore Free Demo
              </Link>
              <Link
                to={currentRole === 'teacher' ? '/teacher-dashboard' : '/student-dashboard'}
                className="btn btn-secondary btn-lg"
              >
                {currentRole === 'teacher' ? '👨‍🏫 Teacher Dashboard' : '👨‍🎓 Student Dashboard'}
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">8+</div>
                <div className="text-gray-600">Pioneer Units</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">AI</div>
                <div className="text-gray-600">Powered Feedback</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">B2-C1</div>
                <div className="text-gray-600">Level Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Role Selector Section */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Learning Path</h2>
            <p className="text-lg text-gray-600">Select your role to access personalized features and content</p>
          </div>
          <RoleSelector currentRole={currentRole} onRoleChange={onRoleChange} />
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Pioneer Learning Platform?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced AI technology meets proven pedagogical methods for an exceptional learning experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center hover:shadow-xl transition-all duration-300">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Structured Guidance</h3>
              <p className="text-gray-600">
                Get targeted writing prompts, grammar tips, and vocabulary hints based on Pioneer units.
              </p>
            </div>

            <div className="card text-center hover:shadow-xl transition-all duration-300">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI-Powered Feedback</h3>
              <p className="text-gray-600">
                Receive detailed feedback on grammar, vocabulary, creativity, and structure like a real teacher.
              </p>
            </div>

            <div className="card text-center hover:shadow-xl transition-all duration-300">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Pioneer-Based</h3>
              <p className="text-gray-600">
                Aligned with the Pioneer B2-C1 curriculum for consistent learning progression.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Student Features */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">For Students</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-primary-100 text-primary-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">✓</span>
                  <span className="text-gray-700">Choose from Pioneer B2-C1 units with structured guidance</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-100 text-primary-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">✓</span>
                  <span className="text-gray-700">Submit homework and get instant, detailed feedback</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-100 text-primary-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">✓</span>
                  <span className="text-gray-700">Track your progress with visual score meters</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-100 text-primary-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">✓</span>
                  <span className="text-gray-700">Improve writing skills with targeted suggestions</span>
                </li>
              </ul>
              <Link
                to="/student-dashboard"
                className="btn btn-primary mt-8 inline-block"
              >
                Start Learning
              </Link>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <div className="text-center">
                <div className="text-6xl mb-4">👨‍🎓</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Student Experience</h3>
                <p className="text-gray-600 mb-6">
                  Interactive homework submissions with instant AI feedback and progress tracking.
                </p>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-sm text-gray-500 mb-2">Sample Feedback</div>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm inline-block">
                    Grammar: 8.5/10 ✨
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Teacher Features */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
              <div className="text-center">
                <div className="text-6xl mb-4">👩‍🏫</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Teacher Dashboard</h3>
                <p className="text-gray-600 mb-6">
                  Monitor student submissions, review AI feedback, and adjust grades with comprehensive analytics.
                </p>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-sm text-gray-500 mb-2">Student Progress</div>
                  <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm inline-block">
                    15 Submissions Reviewed 📊
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">For Teachers</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-primary-100 text-primary-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">✓</span>
                  <span className="text-gray-700">Review student submissions with AI-generated feedback</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-100 text-primary-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">✓</span>
                  <span className="text-gray-700">Override AI scores and provide additional comments</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-100 text-primary-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">✓</span>
                  <span className="text-gray-700">Monitor class progress and identify areas for improvement</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-100 text-primary-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">✓</span>
                  <span className="text-gray-700">Access detailed analytics and performance insights</span>
                </li>
              </ul>
              <Link
                to="/teacher-dashboard"
                className="btn btn-secondary mt-8 inline-block"
              >
                Teacher Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary-600 to-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your English Learning?</h2>
          <p className="text-xl mb-8 text-primary-100">
            Join thousands of students and teachers using AI-powered feedback to improve English writing skills.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/explore"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Try Free Demo
            </Link>
            <Link
              to="/student-dashboard"
              className="bg-primary-700 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary-800 transition-colors duration-200"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;

const LandingPage = ({ currentRole, onRoleChange }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-purple-50">
      {/* Navigation Header */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h2 className="text-2xl font-bold text-primary-600">Pioneer Learning</h2>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/explore" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">
                Explore
              </Link>
              <div className="w-px h-6 bg-gray-300"></div>
              <span className="text-sm text-gray-500">Current Role:</span>
              <span className="badge badge-primary">{currentRole}</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="mb-8">
              <span className="inline-block bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                🚀 AI-Powered English Learning
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              Pioneer English
              <span className="text-primary-600"> Learning Platform</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Structured homework guidance and AI-powered feedback for B2–C1 level English learners. 
              Based on the Pioneer book series, designed for students and teachers.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
              <Link
                to="/explore"
                className="btn btn-primary btn-lg"
              >
                🎯 Explore Free Demo
              </Link>
              <Link
                to={currentRole === 'teacher' ? '/teacher-dashboard' : '/student-dashboard'}
                className="btn btn-secondary btn-lg"
              >
                {currentRole === 'teacher' ? '👨‍🏫 Teacher Dashboard' : '👨‍🎓 Student Dashboard'}
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
                <div className="text-gray-600">Pioneer Units</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">AI</div>
                <div className="text-gray-600">Powered Feedback</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">B2-C1</div>
                <div className="text-gray-600">Level Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Role Selector Section */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Learning Path</h2>
            <p className="text-lg text-gray-600">Select your role to access personalized features and content</p>
          </div>
          <RoleSelector currentRole={currentRole} onRoleChange={onRoleChange} />
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Pioneer Learning Platform?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced AI technology meets proven pedagogical methods for an exceptional learning experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center hover:shadow-xl transition-all duration-300">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Structured Guidance</h3>
              <p className="text-gray-600">
                Get targeted writing prompts, grammar tips, and vocabulary hints based on Pioneer units.
              </p>
            </div>

            <div className="card text-center hover:shadow-xl transition-all duration-300">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI-Powered Feedback</h3>
              <p className="text-gray-600">
                Receive detailed feedback on grammar, vocabulary, creativity, and structure like a real teacher.
              </p>
            </div>

            <div className="card text-center hover:shadow-xl transition-all duration-300">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Pioneer-Based</h3>
              <p className="text-gray-600">
                Aligned with the Pioneer B2-C1 curriculum for consistent learning progression.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Student Features */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">For Students</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-primary-100 text-primary-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">✓</span>
                  <span className="text-gray-700">Choose from Pioneer B2-C1 units with structured guidance</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-100 text-primary-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">✓</span>
                  <span className="text-gray-700">Submit homework and get instant, detailed feedback</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-100 text-primary-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">✓</span>
                  <span className="text-gray-700">Track your progress with visual score meters</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-100 text-primary-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">✓</span>
                  <span className="text-gray-700">Improve writing skills with targeted suggestions</span>
                </li>
              </ul>
              <Link
                to="/student-dashboard"
                className="btn btn-primary mt-8 inline-block"
              >
                Start Learning
              </Link>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <div className="text-center">
                <div className="text-6xl mb-4">👨‍🎓</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Student Experience</h3>
                <p className="text-gray-600 mb-6">
                  Interactive homework submissions with instant AI feedback and progress tracking.
                </p>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-sm text-gray-500 mb-2">Sample Feedback</div>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm inline-block">
                    Grammar: 8.5/10 ✨
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Teacher Features */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
              <div className="text-center">
                <div className="text-6xl mb-4">👩‍🏫</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Teacher Dashboard</h3>
                <p className="text-gray-600 mb-6">
                  Monitor student submissions, review AI feedback, and adjust grades with comprehensive analytics.
                </p>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-sm text-gray-500 mb-2">Student Progress</div>
                  <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm inline-block">
                    15 Submissions Reviewed 📊
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">For Teachers</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-primary-100 text-primary-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">✓</span>
                  <span className="text-gray-700">Review student submissions with AI-generated feedback</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-100 text-primary-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">✓</span>
                  <span className="text-gray-700">Override AI scores and provide additional comments</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-100 text-primary-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">✓</span>
                  <span className="text-gray-700">Monitor class progress and identify areas for improvement</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-100 text-primary-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">✓</span>
                  <span className="text-gray-700">Access detailed analytics and performance insights</span>
                </li>
              </ul>
              <Link
                to="/teacher-dashboard"
                className="btn btn-secondary mt-8 inline-block"
              >
                Teacher Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary-600 to-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your English Learning?</h2>
          <p className="text-xl mb-8 text-primary-100">
            Join thousands of students and teachers using AI-powered feedback to improve English writing skills.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/explore"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Try Free Demo
            </Link>
            <Link
              to="/student-dashboard"
              className="bg-primary-700 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary-800 transition-colors duration-200"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Pioneer Learning</h3>
              <p className="text-gray-400 text-sm">
                AI-powered English learning platform for B2-C1 level students and teachers.
              </p>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Students</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/student-dashboard" className="hover:text-white">Dashboard</Link></li>
                <li><Link to="/explore" className="hover:text-white">Explore Units</Link></li>
                <li><a href="#" className="hover:text-white">Progress Tracking</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Teachers</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/teacher-dashboard" className="hover:text-white">Dashboard</Link></li>
                <li><a href="#" className="hover:text-white">Student Management</a></li>
                <li><a href="#" className="hover:text-white">Analytics</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Documentation</a></li>
              </ul>            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;
