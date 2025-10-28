export const personalityAssessments = [
  {
    id: 1,
    title: "The Creative Spirit Assessment",
    description: "Discover your unique creative personality and emotional landscape",
    questions: [
      {
        id: 1,
        text: "When you encounter a blank canvas, what emotion rises first?",
        type: "emotion",
        moodType: "creative",
        options: [
          { id: 'a', text: 'Excitement and possibility', emoji: '✨', value: 'optimist' },
          { id: 'b', text: 'Peaceful contemplation', emoji: '🌊', value: 'philosopher' },
          { id: 'c', text: 'Nervous energy', emoji: '⚡', value: 'adventurer' },
          { id: 'd', text: 'Curious wonder', emoji: '🔮', value: 'dreamer' }
        ]
      },
      {
        id: 2,
        text: "How do you process intense emotions?",
        type: "emotion",
        moodType: "reflective",
        options: [
          { id: 'a', text: 'Through movement and action', emoji: '💫', value: 'adventurer' },
          { id: 'b', text: 'Through deep introspection', emoji: '🌙', value: 'philosopher' },
          { id: 'c', text: 'Through creative expression', emoji: '🎨', value: 'optimist' },
          { id: 'd', text: 'Through connection with others', emoji: '💝', value: 'dreamer' }
        ]
      },
      {
        id: 3,
        text: "What kind of beauty captivates you most?",
        type: "emotion",
        moodType: "aesthetic",
        options: [
          { id: 'a', text: 'Raw and authentic moments', emoji: '🌟', value: 'philosopher' },
          { id: 'b', text: 'Vibrant and bold expressions', emoji: '🎭', value: 'optimist' },
          { id: 'c', text: 'Mysterious and ethereal scenes', emoji: '✨', value: 'dreamer' },
          { id: 'd', text: 'Dynamic and energetic compositions', emoji: '⚡', value: 'adventurer' }
        ]
      },
      {
        id: 4,
        text: "When facing change, your heart tells you to...",
        type: "emotion",
        moodType: "transformative",
        options: [
          { id: 'a', text: 'Embrace it with open arms', emoji: '🌈', value: 'adventurer' },
          { id: 'b', text: 'Reflect on its deeper meaning', emoji: '🔮', value: 'philosopher' },
          { id: 'c', text: 'Find the opportunity within', emoji: '✨', value: 'optimist' },
          { id: 'd', text: 'Trust your intuition', emoji: '💫', value: 'dreamer' }
        ]
      },
      {
        id: 5,
        text: "What brings you the most profound joy?",
        type: "emotion",
        moodType: "joyful",
        options: [
          { id: 'a', text: 'Inspiring others', emoji: '🌟', value: 'optimist' },
          { id: 'b', text: 'Discovering hidden truths', emoji: '🔍', value: 'philosopher' },
          { id: 'c', text: 'New experiences and adventures', emoji: '🚀', value: 'adventurer' },
          { id: 'd', text: 'Creating meaningful connections', emoji: '💖', value: 'dreamer' }
        ]
      }
    ]
  }
];

export const personalityResults = {
  optimist: {
    title: "The Radiant Optimist",
    description: "You illuminate the world with vibrant energy and boundless creativity. Your spirit transforms ordinary moments into extraordinary experiences.",
    traits: ["Creative", "Inspiring", "Energetic", "Visionary"],
    color: "#FF5757"
  },
  philosopher: {
    title: "The Thoughtful Philosopher",
    description: "You dive deep into the ocean of consciousness, finding beauty in reflection and wisdom in stillness. Your insights shape reality.",
    traits: ["Introspective", "Wise", "Authentic", "Profound"],
    color: "#0D7377"
  },
  adventurer: {
    title: "The Bold Adventurer",
    description: "You dance with change and thrive in motion. Your fearless spirit turns every challenge into an opportunity for growth and discovery.",
    traits: ["Dynamic", "Courageous", "Adaptive", "Energetic"],
    color: "#8B5CF6"
  },
  dreamer: {
    title: "The Ethereal Dreamer",
    description: "You weave magic through intuition and connection. Your empathetic heart creates bridges between souls and possibilities.",
    traits: ["Intuitive", "Empathetic", "Creative", "Mystical"],
    color: "#F7C948"
  }
};