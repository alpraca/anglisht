import React from 'react';
import { pioneerUnits } from '../data/mockData';

const LessonSelector = ({ selectedUnit, onUnitSelect }) => {
  const getLevelColor = (level) => {
    if (level.includes('B2')) return 'bg-blue-100 text-blue-800';
    if (level.includes('C1')) return 'bg-purple-100 text-purple-800';
    return 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="card p-6 mb-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Choose Your Unit</h2>
          <p className="text-gray-600 mt-1">Select a Pioneer unit to begin your writing practice</p>
        </div>
        <div className="hidden sm:flex items-center space-x-2">
          <div className="badge badge-blue">B2 Level</div>
          <div className="badge badge-purple">C1 Level</div>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pioneerUnits.map((unit) => (
          <button
            key={unit.id}
            onClick={() => onUnitSelect(unit)}
            className={`card-hover p-5 text-left transition-all duration-300 transform hover:scale-105 ${
              selectedUnit?.id === unit.id
                ? 'ring-2 ring-primary-500 bg-primary-50 shadow-lg'
                : 'hover:shadow-md'
            }`}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-1 leading-tight">{unit.title}</h3>
                <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(unit.level)}`}>
                  {unit.level}
                </div>
              </div>
              {selectedUnit?.id === unit.id && (
                <div className="text-primary-500 text-xl">✓</div>
              )}
            </div>
              <div className="space-y-2">
              <div className="text-sm text-gray-600">
                <strong>Focus:</strong>
              </div>
              <div className="flex flex-wrap gap-1">
                <span className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs">
                  {unit.grammarFocus}
                </span>
                <span className="inline-block bg-blue-100 text-blue-700 px-2 py-1 rounded-md text-xs">
                  {unit.vocabulary?.length || 0} vocabulary words
                </span>
                <span className="inline-block bg-green-100 text-green-700 px-2 py-1 rounded-md text-xs">
                  {unit.writingPrompts?.length || 0} writing prompts
                </span>
              </div>
            </div>

            <div className="mt-4 flex items-center text-xs text-gray-500">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              Click to select this unit
            </div>
          </button>
        ))}
      </div>

      {selectedUnit && (
        <div className="mt-6 p-4 bg-gradient-to-r from-primary-50 to-blue-50 rounded-lg border border-primary-200">
          <div className="flex items-center">
            <div className="text-primary-600 text-2xl mr-3">📚</div>
            <div>
              <div className="font-semibold text-primary-900">Selected: {selectedUnit.title}</div>
              <div className="text-sm text-primary-700">Ready to start your writing assignment!</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LessonSelector;
