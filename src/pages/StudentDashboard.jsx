import React, { useState } from 'react';
import LessonSelector from '../components/LessonSelector';
import HomeworkForm from '../components/HomeworkForm';
import FeedbackCard from '../components/FeedbackCard';
import Footer from '../components/Footer';
import { gradeWriting } from '../utils/grading';

const StudentDashboard = () => {
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [feedback, setFeedback] = useState(null);

  const handleHomeworkSubmit = (homeworkText) => {
    const gradingResult = gradeWriting(homeworkText);
    setFeedback(gradingResult);
    
    // Save to localStorage for persistence
    const submission = {
      unit: selectedUnit,
      homework: homeworkText,
      feedback: gradingResult,
      timestamp: new Date().toISOString()
    };
    
    const submissions = JSON.parse(localStorage.getItem('studentSubmissions') || '[]');
    submissions.unshift(submission);
    localStorage.setItem('studentSubmissions', JSON.stringify(submissions.slice(0, 10))); // Keep last 10
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center">
                <span className="mr-3">🎓</span>
                Student Dashboard
              </h1>
              <p className="text-gray-600 mt-1">Choose a unit, get guidance, and submit your homework for AI feedback</p>
            </div>
            <div className="hidden sm:flex items-center space-x-4">
              <div className="badge badge-blue">B2-C1 Level</div>
              <div className="badge badge-green">AI Powered</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <LessonSelector 
          selectedUnit={selectedUnit}
          onUnitSelect={setSelectedUnit}
        />
        
        <HomeworkForm 
          selectedUnit={selectedUnit}
          onSubmit={handleHomeworkSubmit}
        />
        
        {feedback && <FeedbackCard feedback={feedback} />}
      </div>
      
      <Footer />
    </div>
  );
};

export default StudentDashboard;
