import React, { useEffect, useState } from 'react';

const words = ["Learning.", "Success.", "Growth.", "Innovation.", "Opportunities."];
const typingSpeed = 150;
const deletingSpeed = 80;
const delayBetweenWords = 1500;

const TypewriterText = () => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, text.length + 1));
        if (text === currentWord) {
          setTimeout(() => setIsDeleting(true), delayBetweenWords);
        }
      } else {
        setText(currentWord.substring(0, text.length - 1));
        if (text === '') {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <span className="text-blue-500 font-bold">{text}&nbsp;<span className="animate-blink">|</span></span>
  );
};

export default TypewriterText;
