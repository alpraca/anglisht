export const generateLessonGuide = (unitId) => {
  // Map numeric IDs to string keys for backward compatibility
  const idMap = {
    1: 'pioneer-b2-unit-1',
    2: 'pioneer-b2-unit-2',
    3: 'pioneer-b2-unit-3',
    4: 'pioneer-b2-unit-4',
    5: 'pioneer-b2-unit-5',
    6: 'pioneer-c1-unit-1',
    7: 'pioneer-c1-unit-2',
    8: 'pioneer-c1-unit-3'
  };
  
  const mappedId = idMap[unitId] || unitId;
  
  const guides = {
    'pioneer-b2-unit-1': {
      title: 'Unit 1: Travel and Adventure',
      writingPrompts: [
        'Describe your most memorable travel experience',
        'Write about a place you\'d like to visit and explain why',
        'Compare traveling alone vs. with friends'
      ],
      grammarTips: [
        'Use past perfect for actions completed before another past action',
        'Practice conditional sentences (If I had more time, I would...)',
        'Review present perfect continuous for ongoing actions'
      ],
      vocabularyHints: [
        'Adventure vocabulary: expedition, exploration, journey',
        'Travel collocations: catch a flight, miss a connection, book accommodation',
        'Descriptive adjectives: breathtaking, overwhelming, picturesque'
      ],
      keySkills: ['Narrative writing', 'Past tenses review', 'Travel vocabulary']
    },
    'pioneer-b2-unit-2': {
      title: 'Unit 2: Technology and Innovation',
      writingPrompts: [
        'How has technology changed communication in the last decade?',
        'Discuss the pros and cons of social media',
        'Predict how AI will impact education'
      ],
      grammarTips: [
        'Future forms: will, going to, present continuous for future',
        'Passive voice in formal writing',
        'Modal verbs for speculation (might, could, may)'
      ],
      vocabularyHints: [
        'Technology terms: artificial intelligence, automation, digital transformation',
        'Academic vocabulary: furthermore, consequently, nevertheless',
        'Opinion expressions: from my perspective, it could be argued that'
      ],
      keySkills: ['Opinion essays', 'Future forms', 'Technology vocabulary']
    },
    'pioneer-b2-unit-3': {
      title: 'Unit 3: Environmental Challenges',
      writingPrompts: [
        'What can individuals do to combat climate change?',
        'Should governments prioritize economic growth or environmental protection?',
        'Describe an environmental problem in your area and suggest solutions'
      ],
      grammarTips: [
        'Modal verbs for obligation: must, have to, should, ought to',
        'Modal verbs for possibility: might, may, could, can',
        'Expressing degrees of certainty: definitely, probably, possibly'
      ],
      vocabularyHints: [
        'Environmental terms: sustainability, carbon footprint, renewable energy',
        'Problem-solution language: tackle, address, implement, combat',
        'Formal expressions: it is imperative that, there is an urgent need to'
      ],
      keySkills: ['Argumentative writing', 'Modal verbs', 'Environmental vocabulary']
    },
    'pioneer-b2-unit-4': {
      title: 'Unit 4: Work and Career',
      writingPrompts: [
        'What makes an ideal workplace?',
        'Is remote work better than traditional office work?',
        'Describe your career goals and how you plan to achieve them'
      ],
      grammarTips: [
        'Reported speech: He said that..., She told me that...',
        'Reporting verbs: claim, suggest, recommend, emphasize',
        'Time expressions in reported speech: yesterday → the day before'
      ],
      vocabularyHints: [
        'Career vocabulary: entrepreneurship, work-life balance, networking',
        'Professional expressions: career prospects, job satisfaction, skill development',
        'Workplace collocations: meet deadlines, take initiative, work collaboratively'
      ],
      keySkills: ['Professional writing', 'Reported speech', 'Career vocabulary']
    },
    'pioneer-b2-unit-5': {
      title: 'Unit 5: Arts and Culture',
      writingPrompts: [
        'How important is art education in schools?',
        'Should governments fund the arts?',
        'Describe a piece of art that has influenced you'
      ],
      grammarTips: [
        'Articles with abstract nouns: the arts, art in general',
        'Determiners: all, both, neither, each, every',
        'Generic references: Art is important (not The art is important)'
      ],
      vocabularyHints: [
        'Arts vocabulary: aesthetic, contemporary, cultural heritage',
        'Critical analysis: symbolism, interpretation, artistic expression',
        'Cultural terms: patronage, avant-garde, traditional vs. modern'
      ],
      keySkills: ['Cultural analysis', 'Articles and determiners', 'Arts vocabulary']
    },
    'pioneer-c1-unit-1': {
      title: 'Unit 1: Health and Lifestyle',
      writingPrompts: [
        'How has modern life affected our health?',
        'What role should governments play in public health?',
        'Discuss the relationship between mental and physical health'
      ],
      grammarTips: [
        'Complex passive constructions: It is believed that..., Research has shown that...',
        'Passive with modals: Problems can be addressed, Solutions must be implemented',
        'Impersonal passive: It is widely recognized, It has been established'
      ],
      vocabularyHints: [
        'Health terminology: holistic, sedentary, epidemic, preventive medicine',
        'Academic language: correlation, causation, statistical significance',
        'Formal expressions: it is evident that, research indicates, studies suggest'
      ],
      keySkills: ['Academic writing', 'Advanced passive voice', 'Health vocabulary']
    },
    'pioneer-c1-unit-2': {
      title: 'Unit 2: Global Issues',
      writingPrompts: [
        'What are the main challenges facing the international community?',
        'How effective are international organizations in solving global problems?',
        'Discuss the balance between national interests and global cooperation'
      ],
      grammarTips: [
        'Complex sentence structures with multiple clauses',
        'Advanced linking words: notwithstanding, albeit, whereas, inasmuch as',
        'Conditional sentences: mixed conditionals, inverted conditionals'
      ],
      vocabularyHints: [
        'Global issues vocabulary: globalization, sovereignty, humanitarian, diplomatic',
        'International relations: multilateral, bilateral, unilateral cooperation',
        'Formal academic language: furthermore, consequently, nevertheless, albeit'
      ],
      keySkills: ['International relations analysis', 'Complex grammar', 'Global issues vocabulary']
    },
    'pioneer-c1-unit-3': {
      title: 'Unit 3: Science and Discovery',
      writingPrompts: [
        'Should there be limits on scientific research?',
        'How do scientific discoveries change society?',
        'Discuss the importance of science communication to the public'
      ],
      grammarTips: [
        'Nominalization: discover → discovery, analyze → analysis',
        'Academic style: formal vocabulary, objective tone, precise language',
        'Complex noun phrases: cutting-edge research, peer-reviewed studies'
      ],
      vocabularyHints: [
        'Scientific terms: paradigm shift, empirical, hypothesis, peer review',
        'Research vocabulary: methodology, findings, implications, breakthrough',
        'Academic collocations: conduct research, reach conclusions, significant findings'
      ],
      keySkills: ['Scientific writing', 'Nominalization', 'Academic vocabulary']
    }
  };

  return guides[mappedId] || {
    title: `Unit ${unitId} Guide`,
    writingPrompts: [
      'Practice descriptive writing with specific details',
      'Write a personal narrative about a meaningful experience',
      'Create an argumentative essay on a topic of your choice'
    ],
    grammarTips: [
      'Focus on varied sentence structures',
      'Use appropriate tenses for your writing purpose',
      'Practice linking words and cohesive devices'
    ],
    vocabularyHints: [
      'Build topic-specific vocabulary',
      'Use academic expressions appropriately',
      'Practice collocations and natural phrases'
    ],
    keySkills: ['Writing fluency', 'Grammar accuracy', 'Vocabulary expansion']
  };
};
