import React, { useState } from 'react';
import { pioneerUnits } from '../data/mockData';
import { generateLessonGuide } from '../utils/lessonGuide';
import { gradeWriting } from '../utils/grading';
import FeedbackCard from '../components/FeedbackCard';
import Footer from '../components/Footer';

const ExplorePage = () => {
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [demoText, setDemoText] = useState('');
  const [demoFeedback, setDemoFeedback] = useState(null);
  const [isGrading, setIsGrading] = useState(false);

  const handleDemoGrading = async () => {
    if (!demoText.trim()) return;
    
    setIsGrading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const feedback = gradeWriting(demoText);
    setDemoFeedback(feedback);
    setIsGrading(false);
  };

  const guide = selectedUnit ? generateLessonGuide(selectedUnit.id) : null;
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center">
                <span className="mr-3">🌍</span>
                Explore Pioneer Units
              </h1>
              <p className="text-gray-600 mt-1">Browse sample exercises and try our AI grading demo</p>
            </div>
            <div className="hidden sm:flex items-center space-x-4">
              <div className="badge badge-purple">Public Access</div>
              <div className="badge badge-blue">No Registration</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Unit Browser */}
        <div className="card p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Browse Pioneer Units</h2>
              <p className="text-gray-600 mt-1">Explore B2-C1 level writing exercises and guidance</p>
            </div>
            <div className="badge badge-secondary">{pioneerUnits.length} Units</div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {pioneerUnits.map((unit) => (
              <button
                key={unit.id}
                onClick={() => setSelectedUnit(unit)}
                className={`card-hover p-5 text-left transition-all duration-300 transform hover:scale-105 ${
                  selectedUnit?.id === unit.id
                    ? 'ring-2 ring-purple-500 bg-purple-50 shadow-lg'
                    : 'hover:shadow-md'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1 leading-tight">{unit.title}</h3>
                    <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                      unit.level.includes('B2') ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
                    }`}>
                      {unit.level}
                    </div>
                  </div>
                  {selectedUnit?.id === unit.id && (
                    <div className="text-purple-500 text-xl">🔍</div>
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
              </button>
            ))}
          </div>          {/* Unit Details */}
          {selectedUnit && guide && (
            <div className="border-t border-gray-200 pt-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">{guide.title}</h3>
                <div className="badge badge-success">Selected Unit</div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white text-lg">
                      📝
                    </div>
                    <h4 className="font-bold text-blue-900 ml-3">Sample Prompts</h4>
                  </div>
                  <ul className="space-y-3">
                    {guide.writingPrompts.map((prompt, idx) => (
                      <li key={idx} className="flex items-start text-sm text-blue-800">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>{prompt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-white text-lg">
                      📖
                    </div>
                    <h4 className="font-bold text-green-900 ml-3">Key Grammar</h4>
                  </div>
                  <ul className="space-y-3">
                    {guide.grammarTips.map((tip, idx) => (
                      <li key={idx} className="flex items-start text-sm text-green-800">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center text-white text-lg">
                      💡
                    </div>
                    <h4 className="font-bold text-purple-900 ml-3">Vocabulary Bank</h4>
                  </div>
                  <ul className="space-y-3">
                    {guide.vocabularyHints.map((hint, idx) => (
                      <li key={idx} className="flex items-start text-sm text-purple-800">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>{hint}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Demo Grading Tool */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Try Our Demo Grading Tool</h2>
          <p className="text-gray-600 mb-6">
            Write a short text and see how our AI-powered feedback system works. No registration required!
          </p>

          <div className="mb-6">
            <label htmlFor="demoText" className="block text-sm font-medium text-gray-700 mb-2">
              Your Sample Writing
            </label>
            <textarea
              id="demoText"
              value={demoText}
              onChange={(e) => setDemoText(e.target.value)}
              placeholder="Write a paragraph about any topic... (e.g., your favorite hobby, a recent experience, or your opinion on something)"
              rows={8}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
            />
          </div>

          <div className="flex justify-between items-center mb-6">
            <div className="text-sm text-gray-500">
              Word count: {demoText.trim().split(/\s+/).filter(word => word.length > 0).length}
            </div>
            <button
              onClick={handleDemoGrading}
              disabled={!demoText.trim() || isGrading}
              className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200"
            >
              {isGrading ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Analyzing...
                </span>
              ) : (
                'Get Demo Feedback'
              )}
            </button>
          </div>

          {demoFeedback && <FeedbackCard feedback={demoFeedback} />}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ExplorePage;
