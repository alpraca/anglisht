import React from 'react';

const RoleSelector = ({ currentRole, onRoleChange }) => {
  const roles = [
    { 
      id: 'student', 
      name: 'Student', 
      icon: '🎓', 
      description: 'Access homework help and instant AI feedback',
      features: ['Submit writing assignments', 'Get detailed feedback', 'Track your progress'],
      color: 'blue'
    },
    { 
      id: 'teacher', 
      name: 'Teacher', 
      icon: '👩‍🏫', 
      description: 'Review student work and manage assignments',
      features: ['Review submissions', 'Grade assignments', 'Provide feedback'],
      color: 'green'
    },
    { 
      id: 'public', 
      name: 'Explorer', 
      icon: '🌍', 
      description: 'Explore sample exercises and vocabulary',
      features: ['Browse sample units', 'View vocabulary lists', 'Try demo exercises'],
      color: 'purple'
    }
  ];

  const getColorClasses = (color, isSelected) => {
    const baseClasses = "border-2 transition-all duration-300 transform hover:scale-105 hover:shadow-lg";
    const colorMap = {
      blue: isSelected 
        ? 'border-blue-500 bg-blue-50 shadow-blue-100' 
        : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50',
      green: isSelected 
        ? 'border-green-500 bg-green-50 shadow-green-100' 
        : 'border-gray-200 hover:border-green-300 hover:bg-green-50',
      purple: isSelected 
        ? 'border-purple-500 bg-purple-50 shadow-purple-100' 
        : 'border-gray-200 hover:border-purple-300 hover:bg-purple-50'
    };
    return `${baseClasses} ${colorMap[color]}`;
  };

  return (
    <div className="card p-8 mb-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Choose Your Learning Path</h2>
        <p className="text-gray-600 text-lg">Select your role to access personalized features</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        {roles.map((role) => (
          <button
            key={role.id}
            onClick={() => onRoleChange(role.id)}
            className={`p-6 rounded-xl text-center group ${getColorClasses(role.color, currentRole === role.id)}`}
          >
            <div className="text-5xl mb-4 group-hover:animate-bounce">{role.icon}</div>
            <div className="font-bold text-xl text-gray-900 mb-2">{role.name}</div>
            <div className="text-sm text-gray-600 mb-4">{role.description}</div>
            
            {/* Features list */}
            <div className="space-y-2">
              {role.features.map((feature, idx) => (
                <div key={idx} className="flex items-center text-xs text-gray-500">
                  <div className={`w-1.5 h-1.5 rounded-full mr-2 ${
                    role.color === 'blue' ? 'bg-blue-400' :
                    role.color === 'green' ? 'bg-green-400' : 'bg-purple-400'
                  }`}></div>
                  {feature}
                </div>
              ))}
            </div>

            {/* Selected indicator */}
            {currentRole === role.id && (
              <div className="mt-4 flex items-center justify-center">
                <div className={`badge ${
                  role.color === 'blue' ? 'badge-blue' :
                  role.color === 'green' ? 'badge-green' : 'badge-purple'
                }`}>
                  ✓ Selected
                </div>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RoleSelector;
