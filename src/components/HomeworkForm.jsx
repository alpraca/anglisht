import React, { useState } from 'react';
import { generateLessonGuide } from '../utils/lessonGuide';

const HomeworkForm = ({ selectedUnit, onSubmit }) => {
  const [homework, setHomework] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const guide = selectedUnit ? generateLessonGuide(selectedUnit.id) : null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!homework.trim()) return;

    setIsSubmitting(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    onSubmit(homework);
    setIsSubmitting(false);
  };

  if (!selectedUnit) {
    return (
      <div className="card p-8">
        <div className="text-center text-gray-500">
          <div className="text-6xl mb-4">📚</div>
          <h3 className="text-2xl font-bold text-gray-700 mb-2">Select a Unit to Begin</h3>
          <p className="text-lg">Choose a Pioneer unit above to see writing guidance and submit your homework.</p>
          <div className="mt-6">
            <div className="inline-block bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium">
              ↑ Choose from the units above
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="card p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">{guide.title}</h2>
          <p className="text-gray-600 mt-1">Follow the guidance below to craft your best writing</p>
        </div>
        <div className="hidden sm:block">
          <div className="badge badge-primary">Writing Assignment</div>
        </div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white text-lg">
              📝
            </div>
            <h3 className="font-bold text-blue-900 ml-3">Writing Prompts</h3>
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
            <h3 className="font-bold text-green-900 ml-3">Grammar Tips</h3>
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
            <h3 className="font-bold text-purple-900 ml-3">Vocabulary Hints</h3>
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

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <label htmlFor="homework" className="block text-lg font-semibold text-gray-900">
              Your Writing Assignment
            </label>
            <div className="text-sm text-gray-500">
              Word count: {homework.trim().split(/\s+/).filter(word => word.length > 0).length}
            </div>
          </div>
          <div className="relative">
            <textarea
              id="homework"
              value={homework}
              onChange={(e) => setHomework(e.target.value)}
              placeholder="Write your assignment here... (minimum 100 words recommended)"
              rows={14}
              className="form-textarea w-full"
              required
            />
            <div className="absolute bottom-3 right-3 text-xs text-gray-400">
              {homework.length > 0 && (
                <span className={homework.trim().split(/\s+/).filter(word => word.length > 0).length >= 100 ? 'text-green-500' : 'text-yellow-500'}>
                  {homework.trim().split(/\s+/).filter(word => word.length > 0).length >= 100 ? '✓ Good length' : 'Keep writing...'}
                </span>
              )}
            </div>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-500">
              Minimum 100 words recommended
            </div>
            {homework.trim().split(/\s+/).filter(word => word.length > 0).length >= 100 && (
              <div className="badge badge-success">Ready to submit!</div>
            )}
          </div>
          <button
            type="submit"
            disabled={!homework.trim() || isSubmitting}
            className={`btn btn-primary px-8 py-3 text-lg font-semibold ${
              isSubmitting ? 'cursor-not-allowed opacity-75' : ''
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Analyzing your writing...
              </span>
            ) : (
              <>
                <span className="mr-2">📝</span>
                Submit for AI Feedback
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default HomeworkForm;
