import React, { useState, useEffect } from 'react';
import ScoreMeter from '../components/ScoreMeter';
import Footer from '../components/Footer';

const TeacherDashboard = () => {
  const [submissions, setSubmissions] = useState([]);
  const [selectedSubmission, setSelectedSubmission] = useState(null);

  useEffect(() => {
    // Load submissions from localStorage
    const studentSubmissions = JSON.parse(localStorage.getItem('studentSubmissions') || '[]');
    setSubmissions(studentSubmissions);
  }, []);

  const handleOverrideScore = (submissionIndex, category, newScore) => {
    const updatedSubmissions = [...submissions];
    updatedSubmissions[submissionIndex].feedback.scores[category] = newScore;
    
    // Recalculate overall score
    const scores = updatedSubmissions[submissionIndex].feedback.scores;
    const overallScore = (scores.grammar + scores.vocabulary + scores.creativity + scores.structure) / 4;
    updatedSubmissions[submissionIndex].feedback.overallScore = overallScore;
    
    setSubmissions(updatedSubmissions);
    localStorage.setItem('studentSubmissions', JSON.stringify(updatedSubmissions));
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center">
                <span className="mr-3">👩‍🏫</span>
                Teacher Dashboard
              </h1>
              <p className="text-gray-600 mt-1">Review student submissions and manage AI-powered feedback</p>
            </div>
            <div className="hidden sm:flex items-center space-x-4">
              <div className="badge badge-green">Teacher Tools</div>
              <div className="badge badge-purple">AI Assistant</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">          {/* Submissions List */}
          <div className="lg:col-span-1">
            <div className="card p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900">Recent Submissions</h2>
                <div className="badge badge-secondary">{submissions.length}</div>
              </div>
              {submissions.length === 0 ? (
                <div className="text-center text-gray-500 py-12">
                  <div className="text-6xl mb-4">📋</div>
                  <h3 className="text-lg font-semibold mb-2">No submissions yet</h3>
                  <p className="text-sm">Student submissions will appear here when students submit their work.</p>
                  <div className="mt-4">
                    <div className="inline-block bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm">
                      Waiting for student activity...
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  {submissions.map((submission, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedSubmission({ ...submission, index })}
                      className={`w-full text-left p-4 rounded-xl border transition-all duration-300 transform hover:scale-105 ${
                        selectedSubmission?.index === index
                          ? 'border-primary-500 bg-primary-50 shadow-lg ring-2 ring-primary-200'
                          : 'border-gray-200 hover:border-primary-300 hover:shadow-md'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900 mb-1">{submission.unit?.title}</div>
                          <div className="flex items-center space-x-2 mb-2">
                            <div className={`badge ${
                              submission.feedback.overallScore >= 8 ? 'badge-success' :
                              submission.feedback.overallScore >= 6 ? 'badge-warning' : 'badge-error'
                            }`}>
                              {submission.feedback.overallScore.toFixed(1)}/10
                            </div>
                            <div className="text-xs text-gray-500">
                              {new Date(submission.timestamp).toLocaleDateString()}
                            </div>
                          </div>
                          <div className="text-xs text-gray-600">
                            {submission.homework.substring(0, 60)}...
                          </div>
                        </div>
                        {selectedSubmission?.index === index && (
                          <div className="text-primary-500 text-lg ml-2">👁️</div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>          {/* Submission Detail */}
          <div className="lg:col-span-2">
            {selectedSubmission ? (
              <div className="space-y-6">
                {/* Student Work Card */}
                <div className="card p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">Student Work</h3>
                    <div className="flex items-center space-x-2">
                      <div className="badge badge-blue">{selectedSubmission.unit?.level}</div>
                      <div className="text-sm text-gray-500">
                        {new Date(selectedSubmission.timestamp).toLocaleString()}
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200">
                    <div className="text-sm font-medium text-gray-700 mb-3 flex items-center">
                      <span className="mr-2">📚</span>
                      Unit: {selectedSubmission.unit?.title}
                    </div>
                    <div className="text-gray-900 leading-relaxed whitespace-pre-wrap font-serif">
                      {selectedSubmission.homework}
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-300 flex items-center justify-between text-sm text-gray-600">
                      <div>
                        Word count: {selectedSubmission.homework.trim().split(/\s+/).filter(word => word.length > 0).length}
                      </div>
                      <div className="badge badge-secondary">Student Submission</div>
                    </div>
                  </div>
                </div>

                {/* AI Feedback & Grading Interface */}
                <div className="card p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-900">AI Feedback & Teacher Review</h3>
                    <div className="badge badge-green">AI Analysis Complete</div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {Object.entries(selectedSubmission.feedback.scores).map(([category, score]) => {
                      const categoryInfo = {
                        grammar: { icon: '📝', title: 'Grammar & Correctness', color: 'blue' },
                        vocabulary: { icon: '📚', title: 'Vocabulary Usage', color: 'green' },
                        creativity: { icon: '💡', title: 'Creativity & Ideas', color: 'purple' },
                        structure: { icon: '🏗️', title: 'Structure & Clarity', color: 'yellow' }
                      };

                      return (
                        <div key={category} className={`border-2 rounded-xl p-5 bg-gradient-to-br ${
                          categoryInfo[category].color === 'blue' ? 'from-blue-50 to-blue-100 border-blue-200' :
                          categoryInfo[category].color === 'green' ? 'from-green-50 to-green-100 border-green-200' :
                          categoryInfo[category].color === 'purple' ? 'from-purple-50 to-purple-100 border-purple-200' :
                          'from-yellow-50 to-yellow-100 border-yellow-200'
                        }`}>
                          <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center">
                              <span className="text-xl mr-2">{categoryInfo[category].icon}</span>
                              <label className="font-semibold text-gray-800">
                                {categoryInfo[category].title}
                              </label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <input
                                type="number"
                                min="0"
                                max="10"
                                step="0.1"
                                value={score}
                                onChange={(e) => handleOverrideScore(selectedSubmission.index, category, parseFloat(e.target.value))}
                                className="form-input w-16 text-center font-bold"
                              />
                              <span className="text-gray-600">/10</span>
                            </div>
                          </div>
                          <ScoreMeter 
                            label=""
                            score={score}
                            color={score >= 7 ? 'success' : score >= 5 ? 'warning' : 'error'}
                          />
                          <div className="mt-3 p-3 bg-white rounded-lg border border-opacity-50">
                            <p className="text-sm text-gray-700 leading-relaxed">
                              {selectedSubmission.feedback.comments[category]}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Overall Score Summary */}
                  <div className="mt-8 p-6 bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl border-2 border-primary-200">
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-4">
                        <div className="text-4xl">
                          {selectedSubmission.feedback.overallScore >= 8 ? '🎉' : 
                           selectedSubmission.feedback.overallScore >= 6 ? '👍' : '💪'}
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-primary-600">
                            {selectedSubmission.feedback.overallScore.toFixed(1)}/10
                          </div>
                          <div className="text-gray-700 font-medium">Overall Score</div>
                        </div>
                      </div>
                    </div>
                  </div>                </div>
              </div>
            ) : (
              <div className="card p-12">
                <div className="text-center text-gray-500">
                  <div className="text-6xl mb-6">👀</div>
                  <h3 className="text-2xl font-bold text-gray-700 mb-3">Select a Submission to Review</h3>
                  <p className="text-lg mb-6">Choose a student submission from the list to review and provide feedback.</p>
                  <div className="bg-gray-100 rounded-lg p-4 inline-block">
                    <div className="text-sm text-gray-600">
                      💡 Tip: You can adjust AI scores and provide additional feedback
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default TeacherDashboard;
