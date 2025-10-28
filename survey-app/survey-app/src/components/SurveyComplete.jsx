import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Sparkles, RotateCcw, Share2 } from 'lucide-react';
import { personalityResults } from '../mock';
import './SurveyComplete.css';

const SurveyComplete = () => {
  const navigate = useNavigate();
  const [showConfetti, setShowConfetti] = useState(false);
  const [result, setResult] = useState(null);

  useEffect(() => {
    const answers = JSON.parse(localStorage.getItem('surveyAnswers') || '{}');
    
    const personalityScores = {};
    Object.values(answers).forEach(answer => {
      personalityScores[answer.value] = (personalityScores[answer.value] || 0) + 1;
    });

    const dominantPersonality = Object.entries(personalityScores).sort((a, b) => b[1] - a[1])[0]?.[0] || 'optimist';
    setResult(personalityResults[dominantPersonality]);

    setShowConfetti(true);
  }, []);

  const handleRetake = () => {
    localStorage.removeItem('surveyAnswers');
    navigate('/survey');
  };

  if (!result) return null;

  return (
    <div className="complete-container">
      {showConfetti && <Confetti />}
      
      <div className="complete-background-gradient">
        <div className="complete-background-inner" />
      </div>

      <div className="complete-content">
        <Card 
          className="complete-card"
          style={{
            boxShadow: `0 8px 32px 0 ${result.color}40, inset 0 0 60px 0 rgba(255, 255, 255, 0.05)`
          }}
        >
          <div className="complete-inner">
            <div className="complete-icon-wrapper">
              <div 
                className="complete-icon-circle"
                style={{
                  background: `linear-gradient(135deg, ${result.color}30, ${result.color}10)`,
                  boxShadow: `0 0 40px ${result.color}60`
                }}
              >
                <Sparkles className="complete-icon" style={{ color: result.color }} />
              </div>
            </div>

            <h1 className="complete-title">
              {result.title}
            </h1>

            <div className="complete-divider" style={{ background: result.color }} />

            <p className="complete-description">
              {result.description}
            </p>

            <div className="complete-traits">
              {result.traits.map((trait, index) => (
                <span key={index} className="complete-trait">
                  {trait}
                </span>
              ))}
            </div>

            <div className="complete-actions">
              <Button
                onClick={handleRetake}
                className="complete-button retake"
              >
                <RotateCcw className="complete-button-icon" />
                Retake Assessment
              </Button>
              
              <Button
                className="complete-button share"
                style={{
                  background: `linear-gradient(135deg, ${result.color}, ${result.color}dd)`
                }}
              >
                <Share2 className="complete-button-icon" />
                Share Results
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

const Confetti = () => {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 0.5,
    duration: 2 + Math.random() * 2,
    rotation: Math.random() * 360,
    color: ['#FF5757', '#0D7377', '#8B5CF6', '#F7C948'][Math.floor(Math.random() * 4)]
  }));

  return (
    <div className="confetti-container">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="confetti-particle"
          style={{
            left: `${particle.left}%`,
            top: '-20px',
            backgroundColor: particle.color,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
            transform: `rotate(${particle.rotation}deg)`
          }}
        />
      ))}
    </div>
  );
};

export default SurveyComplete;