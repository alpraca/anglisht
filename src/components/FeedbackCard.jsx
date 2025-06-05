import React from 'react';
import ScoreMeter from './ScoreMeter';

const FeedbackCard = ({ feedback }) => {
  if (!feedback) return null;

  const { scores, overallScore, comments, feedback: feedbackComments } = feedback;
  
  // Handle both overallScore and scores.overall formats
  const finalScore = overallScore !== undefined ? overallScore : (scores?.overall || 0);
  const finalComments = comments || feedbackComments || {};

  const getOverallGrade = (score) => {
    if (score >= 9) return { grade: 'A+', color: 'text-green-600', bg: 'bg-green-50' };
    if (score >= 8) return { grade: 'A', color: 'text-green-600', bg: 'bg-green-50' };
    if (score >= 7) return { grade: 'B', color: 'text-blue-600', bg: 'bg-blue-50' };
    if (score >= 6) return { grade: 'C', color: 'text-yellow-600', bg: 'bg-yellow-50' };
    if (score >= 5) return { grade: 'D', color: 'text-orange-600', bg: 'bg-orange-50' };
    return { grade: 'F', color: 'text-red-600', bg: 'bg-red-50' };
  };

  const gradeInfo = getOverallGrade(finalScore);

  return (
    <div className="card p-6 mt-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-gray-900">Your AI Feedback</h3>
        <div className="badge badge-success">Analysis Complete</div>
      </div>
      
      {/* Overall Score Section */}
      <div className={`${gradeInfo.bg} rounded-xl p-6 mb-8 border-2 border-opacity-20`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className={`text-5xl font-bold ${gradeInfo.color}`}>
              {gradeInfo.grade}
            </div>            <div>
              <div className={`text-2xl font-bold ${gradeInfo.color}`}>
                {(finalScore || 0).toFixed(1)}/10
              </div>
              <div className="text-gray-700 font-medium">Overall Score</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-3xl mb-2">
              {finalScore >= 8 ? '🎉' : finalScore >= 6 ? '👍' : '💪'}
            </div>
            <div className="text-sm text-gray-600">
              {finalScore >= 8 ? 'Excellent work!' : 
               finalScore >= 6 ? 'Good effort!' : 'Keep improving!'}
            </div>
          </div>
        </div>
      </div>      {/* Individual Scores Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-4">
            <ScoreMeter 
              label="Grammar & Correctness" 
              score={scores?.grammar || 0} 
              color={(scores?.grammar || 0) >= 7 ? 'success' : (scores?.grammar || 0) >= 5 ? 'warning' : 'error'}
            />
          </div>
          <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-4">
            <ScoreMeter 
              label="Vocabulary Usage" 
              score={scores?.vocabulary || 0} 
              color={(scores?.vocabulary || 0) >= 7 ? 'success' : (scores?.vocabulary || 0) >= 5 ? 'warning' : 'error'}
            />
          </div>
        </div>
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-4">
            <ScoreMeter 
              label="Creativity & Ideas" 
              score={scores?.creativity || 0} 
              color={(scores?.creativity || 0) >= 7 ? 'success' : (scores?.creativity || 0) >= 5 ? 'warning' : 'error'}
            />
          </div>          <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg p-4">
            <ScoreMeter 
              label="Structure & Clarity" 
              score={scores?.structure || 0} 
              color={(scores?.structure || 0) >= 7 ? 'success' : (scores?.structure || 0) >= 5 ? 'warning' : 'error'}
            />
          </div>
        </div>
      </div>

      {/* Detailed Comments Section */}
      <div className="bg-gray-50 rounded-xl p-6">
        <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
          <span className="mr-2">💬</span>
          Detailed Feedback
        </h4>        <div className="space-y-4">
          {finalComments && Object.entries(finalComments).length > 0 ? 
            Object.entries(finalComments).map(([category, comment]) => {
              const categoryInfo = {
                grammar: { icon: '📝', title: 'Grammar & Correctness', color: 'border-blue-400' },
                vocabulary: { icon: '📚', title: 'Vocabulary Usage', color: 'border-green-400' },
                creativity: { icon: '💡', title: 'Creativity & Ideas', color: 'border-purple-400' },
                structure: { icon: '🏗️', title: 'Structure & Clarity', color: 'border-yellow-400' },
                overall: { icon: '🎯', title: 'Overall Assessment', color: 'border-gray-400' }
              };

              return (
                <div key={category} className={`border-l-4 ${categoryInfo[category]?.color || 'border-gray-400'} pl-4 py-2`}>
                  <h5 className="font-semibold text-gray-800 mb-2 flex items-center">
                    <span className="mr-2">{categoryInfo[category]?.icon || '📝'}</span>
                    {categoryInfo[category]?.title || category.charAt(0).toUpperCase() + category.slice(1)}
                  </h5>
                  <p className="text-gray-700 leading-relaxed">{comment}</p>
                </div>
              );
            })
            :
            <div className="text-center text-gray-500 py-4">
              <p>Detailed feedback will be generated based on your writing.</p>
            </div>
          }
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center space-x-4 mt-6">
        <button className="btn btn-secondary">
          <span className="mr-2">📄</span>
          Save Feedback
        </button>
        <button className="btn btn-primary">
          <span className="mr-2">✏️</span>
          Try Again
        </button>
      </div>
    </div>
  );
};

export default FeedbackCard;
