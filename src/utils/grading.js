// Grading utility functions for English learning platform

/**
 * Grades a piece of writing using a simulated teacher rubric
 * @param {string} text - The student's writing
 * @param {string} unitLevel - The unit level (B2, C1)
 * @returns {Object} Grading results with scores and feedback
 */
export const gradeWriting = (text, unitLevel = 'B2') => {
  if (!text || text.trim().length === 0) {
    return {
      scores: {
        creativity: 0,
        grammar: 0,
        vocabulary: 0,
        structure: 0,
        overall: 0
      },
      feedback: {
        creativity: "No content to evaluate.",
        grammar: "No content to evaluate.",
        vocabulary: "No content to evaluate.",
        structure: "No content to evaluate.",
        overall: "Please provide some writing to receive feedback."
      },
      suggestions: []
    };
  }

  const wordCount = text.trim().split(/\s+/).length;
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
  const avgWordsPerSentence = wordCount / sentences.length;

  // Simulate grading logic
  const scores = {
    creativity: calculateCreativityScore(text, wordCount),
    grammar: calculateGrammarScore(text, sentences),
    vocabulary: calculateVocabularyScore(text, unitLevel),
    structure: calculateStructureScore(text, avgWordsPerSentence)
  };

  scores.overall = Math.round((scores.creativity + scores.grammar + scores.vocabulary + scores.structure) / 4);

  const feedback = generateFeedback(scores, wordCount, unitLevel);
  const suggestions = generateSuggestions(scores, text);

  return {
    scores,
    feedback,
    suggestions,
    wordCount,
    estimatedLevel: estimateLevel(scores)
  };
};

const calculateCreativityScore = (text, wordCount) => {
  let score = 5; // Base score
  
  // Check for variety in sentence starters
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
  const starters = sentences.map(s => s.trim().split(' ')[0].toLowerCase());
  const uniqueStarters = new Set(starters);
  
  if (uniqueStarters.size / sentences.length > 0.7) score += 2;
  
  // Check for descriptive language
  const descriptiveWords = ['amazing', 'beautiful', 'incredible', 'fascinating', 'wonderful', 'terrible', 'excellent', 'outstanding'];
  const hasDescriptive = descriptiveWords.some(word => text.toLowerCase().includes(word));
  if (hasDescriptive) score += 1;
  
  // Check for examples or personal experiences
  const personalIndicators = ['i think', 'in my opinion', 'for example', 'such as', 'personally'];
  const hasPersonal = personalIndicators.some(phrase => text.toLowerCase().includes(phrase));
  if (hasPersonal) score += 1;
  
  // Length consideration
  if (wordCount > 150) score += 1;
  if (wordCount < 50) score -= 2;
  
  return Math.max(0, Math.min(10, score));
};

const calculateGrammarScore = (text, sentences) => {
  let score = 7; // Assume decent grammar as base
  
  // Check for basic punctuation
  if (!text.includes('.') && !text.includes('!') && !text.includes('?')) {
    score -= 2;
  }
  
  // Check for capitalization at sentence starts
  const properCapitalization = sentences.every(sentence => {
    const trimmed = sentence.trim();
    return trimmed.length === 0 || /^[A-Z]/.test(trimmed);
  });
  
  if (!properCapitalization) score -= 1;
  
  // Check for common errors (simplified)
  const commonErrors = [
    /\bi\b/g, // lowercase 'i'
    /\s{2,}/g, // multiple spaces
    /[.]{2,}/g // multiple periods
  ];
  
  commonErrors.forEach(pattern => {
    if (pattern.test(text)) score -= 0.5;
  });
  
  return Math.max(0, Math.min(10, score));
};

const calculateVocabularyScore = (text, unitLevel) => {
  let score = 5; // Base score
  
  const words = text.toLowerCase().split(/\W+/).filter(word => word.length > 0);
  const uniqueWords = new Set(words);
  const vocabularyRichness = uniqueWords.size / words.length;
  
  // Vocabulary richness
  if (vocabularyRichness > 0.7) score += 2;
  else if (vocabularyRichness > 0.5) score += 1;
  
  // Level-appropriate vocabulary
  const b2Words = ['although', 'however', 'therefore', 'furthermore', 'nevertheless', 'considerable', 'significant'];
  const c1Words = ['nonetheless', 'consequently', 'subsequently', 'predominantly', 'substantial', 'comprehensive'];
  
  const targetWords = unitLevel === 'C1' ? [...b2Words, ...c1Words] : b2Words;
  const advancedWordsUsed = targetWords.filter(word => text.toLowerCase().includes(word)).length;
  
  score += Math.min(3, advancedWordsUsed);
  
  return Math.max(0, Math.min(10, score));
};

const calculateStructureScore = (text, avgWordsPerSentence) => {
  let score = 6; // Base score
  
  // Check for paragraphs
  const paragraphs = text.split('\n\n').filter(p => p.trim().length > 0);
  if (paragraphs.length > 1) score += 1;
  
  // Sentence length variety
  if (avgWordsPerSentence > 8 && avgWordsPerSentence < 20) score += 1;
  if (avgWordsPerSentence > 25) score -= 1;
  if (avgWordsPerSentence < 5) score -= 1;
  
  // Check for linking words
  const linkingWords = ['first', 'second', 'finally', 'in addition', 'moreover', 'on the other hand', 'in conclusion'];
  const hasLinking = linkingWords.some(word => text.toLowerCase().includes(word));
  if (hasLinking) score += 1;
  
  return Math.max(0, Math.min(10, score));
};

const generateFeedback = (scores, wordCount, unitLevel) => {
  return {
    creativity: getCreativityFeedback(scores.creativity),
    grammar: getGrammarFeedback(scores.grammar),
    vocabulary: getVocabularyFeedback(scores.vocabulary, unitLevel),
    structure: getStructureFeedback(scores.structure),
    overall: getOverallFeedback(scores.overall, wordCount)
  };
};

const getCreativityFeedback = (score) => {
  if (score >= 8) return "Excellent creativity! Your ideas are original and engaging.";
  if (score >= 6) return "Good creative thinking. Try to add more unique perspectives or examples.";
  if (score >= 4) return "Some creative elements present. Consider adding more personal experiences or varied examples.";
  return "Work on expressing more original ideas and personal viewpoints.";
};

const getGrammarFeedback = (score) => {
  if (score >= 8) return "Strong grammar usage with minimal errors.";
  if (score >= 6) return "Generally good grammar. Check punctuation and sentence structure.";
  if (score >= 4) return "Some grammar issues present. Focus on basic sentence construction and punctuation.";
  return "Grammar needs significant improvement. Review basic sentence patterns and punctuation rules.";
};

const getVocabularyFeedback = (score, unitLevel) => {
  const level = unitLevel || 'B2';
  if (score >= 8) return `Excellent ${level}-level vocabulary usage with good variety.`;
  if (score >= 6) return `Good vocabulary range. Try incorporating more ${level}-level expressions.`;
  if (score >= 4) return `Adequate vocabulary. Expand your range with more advanced ${level} words.`;
  return `Limited vocabulary range. Study and practice more ${level}-level expressions.`;
};

const getStructureFeedback = (score) => {
  if (score >= 8) return "Well-organized with clear structure and good flow.";
  if (score >= 6) return "Generally well-structured. Consider using more linking words for better flow.";
  if (score >= 4) return "Basic structure present. Work on paragraph organization and sentence connections.";
  return "Structure needs improvement. Focus on organizing ideas into clear paragraphs.";
};

const getOverallFeedback = (score, wordCount) => {
  let feedback = "";
  if (score >= 8) feedback = "Excellent work! You demonstrate strong English skills.";
  else if (score >= 6) feedback = "Good effort! Continue practicing to reach the next level.";
  else if (score >= 4) feedback = "Fair work. Focus on the areas highlighted for improvement.";
  else feedback = "Keep practicing! Review the fundamentals and try again.";
  
  if (wordCount < 50) feedback += " Try to write more to fully express your ideas.";
  else if (wordCount > 300) feedback += " Good length - you've provided detailed responses.";
  
  return feedback;
};

const generateSuggestions = (scores, text) => {
  const suggestions = [];
  
  if (scores.creativity < 6) {
    suggestions.push("Add personal examples or experiences to make your writing more engaging.");
    suggestions.push("Try starting sentences with different words to create variety.");
  }
  
  if (scores.grammar < 6) {
    suggestions.push("Check your punctuation, especially at the end of sentences.");
    suggestions.push("Make sure each sentence starts with a capital letter.");
  }
  
  if (scores.vocabulary < 6) {
    suggestions.push("Use more advanced vocabulary appropriate for your level.");
    suggestions.push("Try to avoid repeating the same words - use synonyms instead.");
  }
  
  if (scores.structure < 6) {
    suggestions.push("Organize your ideas into clear paragraphs.");
    suggestions.push("Use linking words like 'however', 'therefore', 'in addition' to connect ideas.");
  }
  
  return suggestions;
};

const estimateLevel = (scores) => {
  const average = (scores.creativity + scores.grammar + scores.vocabulary + scores.structure) / 4;
  
  if (average >= 8.5) return "C1+";
  if (average >= 7.5) return "C1";
  if (average >= 6.5) return "B2+";
  if (average >= 5.5) return "B2";
  if (average >= 4.5) return "B1+";
  return "B1";
};
