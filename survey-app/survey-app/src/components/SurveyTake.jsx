import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Sparkles, Heart, Zap, Moon } from 'lucide-react';
import { personalityAssessments } from '../mock';
import './SurveyTake.css';

const SurveyTake = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const survey = personalityAssessments[0];
  const question = survey.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / survey.questions.length) * 100;

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 600);
    return () => clearTimeout(timer);
  }, [currentQuestion]);

  const handleOptionSelect = (option) => {
    setSelectedOption(option.id);
    
    setTimeout(() => {
      const newAnswers = { ...answers, [question.id]: option };
      setAnswers(newAnswers);

      if (currentQuestion < survey.questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      } else {
        localStorage.setItem('surveyAnswers', JSON.stringify(newAnswers));
        navigate('/complete');
      }
    }, 400);
  };

  const getMoodIcon = () => {
    const className = `survey-question-icon ${question.moodType}`;
    
    switch(question.moodType) {
      case 'creative':
      case 'joyful':
        return <Sparkles className={className} />;
      case 'reflective':
        return <Moon className={className} />;
      case 'aesthetic':
        return <Heart className={className} />;
      case 'transformative':
        return <Zap className={className} />;
      default:
        return <Sparkles className={className} />;
    }
  };

  return (
    <div className="survey-container">
      <div className={`survey-background ${question.moodType}`} />
      <div className="survey-backdrop" />
      
      <div className="survey-content">
        <div className="survey-wrapper">
          <div className="survey-header">
            <div className="survey-title-container">
              <Sparkles className="survey-icon sparkles" />
              <h1 className="survey-title">
                {survey.title}
              </h1>
              <Heart className="survey-icon heart" />
            </div>
            <p className="survey-description">{survey.description}</p>
          </div>

          <div className="survey-progress-container">
            <div className="survey-progress-info">
              <span>Question {currentQuestion + 1} of {survey.questions.length}</span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            
            <div className="survey-progress-bar">
              <div 
                className="survey-progress-fill"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <Card className={`survey-card ${isAnimating ? 'animating' : ''}`}>
            <div className="survey-question-header">
              {getMoodIcon()}
              <h2 className="survey-question-text">
                {question.text}
              </h2>
            </div>

            <div className="survey-options">
              {question.options.map((option) => (
                <Button
                  key={option.id}
                  onClick={() => handleOptionSelect(option)}
                  className={`survey-option ${selectedOption === option.id ? 'selected' : ''}`}
                >
                  <span className="survey-option-emoji">
                    {option.emoji}
                  </span>
                  <span className="survey-option-text">{option.text}</span>
                  <div className="survey-option-indicator" />
                </Button>
              ))}
            </div>
          </Card>

          <div className="survey-footer">
            <div className="survey-footer-text">
              <p>Choose what resonates with your soul</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurveyTake;