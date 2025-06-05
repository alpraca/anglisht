import React from 'react';

const ScoreMeter = ({ label, score, maxScore = 10, color = 'primary' }) => {
  const percentage = (score / maxScore) * 100;
  
  const getColorClasses = () => {
    switch (color) {
      case 'success':
        return {
          bg: 'bg-green-500',
          text: 'text-green-600',
          ring: 'ring-green-200',
          gradient: 'from-green-400 to-green-600'
        };
      case 'warning':
        return {
          bg: 'bg-yellow-500',
          text: 'text-yellow-600',
          ring: 'ring-yellow-200',
          gradient: 'from-yellow-400 to-yellow-600'
        };
      case 'error':
        return {
          bg: 'bg-red-500',
          text: 'text-red-600',
          ring: 'ring-red-200',
          gradient: 'from-red-400 to-red-600'
        };
      default:
        return {
          bg: 'bg-primary-500',
          text: 'text-primary-600',
          ring: 'ring-primary-200',
          gradient: 'from-primary-400 to-primary-600'
        };
    }
  };

  const getScoreIcon = () => {
    if (score >= 8) return '🎉';
    if (score >= 6) return '👍';
    if (score >= 4) return '📈';
    return '💪';
  };

  const colorClasses = getColorClasses();

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center space-x-2">
          <span className="text-lg">{getScoreIcon()}</span>
          <span className="text-sm font-semibold text-gray-900">{label}</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className={`text-lg font-bold ${colorClasses.text}`}>
            {score.toFixed(1)}
          </span>
          <span className="text-sm text-gray-500">/{maxScore}</span>
        </div>
      </div>
      
      <div className="relative">
        <div className="w-full bg-gray-200 rounded-full h-3 shadow-inner">
          <div
            className={`h-3 rounded-full transition-all duration-500 ease-out bg-gradient-to-r ${colorClasses.gradient} shadow-sm`}
            style={{ 
              width: `${percentage}%`,
              minWidth: percentage > 0 ? '8px' : '0px'
            }}
          ></div>
        </div>
        
        {/* Score indicator line */}
        {percentage > 15 && (
          <div 
            className={`absolute top-0 w-0.5 h-3 bg-white opacity-80`}
            style={{ left: `${percentage}%`, transform: 'translateX(-50%)' }}
          ></div>
        )}
      </div>
      
      {/* Score description */}
      <div className="mt-2 text-xs text-gray-600">
        {score >= 8 ? 'Excellent' : 
         score >= 6 ? 'Good' : 
         score >= 4 ? 'Fair' : 'Needs Improvement'}
      </div>
    </div>
  );
};

export default ScoreMeter;
