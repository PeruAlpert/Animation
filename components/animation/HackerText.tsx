import React, {useState, useEffect, useRef} from 'react';
import {View, Text} from 'react-native';
import MonoText from '../MonoText';

const TextTransformer = ({text, color, size, bold}: any) => {
  const alphabet = `!@#\$%^&*()_+-=[]\\;',./<>?:"{}|`;
  const [transformedText, setTransformedText] = useState('');
  const [currentIndices, setCurrentIndices] = useState(
    Array(text.length).fill(0),
  );

  const [count, setCount] = useState(0);

  const countRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndices(prevIndices => {
        const newIndices = [...prevIndices];
        for (let i = 0; i < newIndices.length; i++) {
          newIndices[i] = (newIndices[i] + 1) % alphabet.length;
        }
        return newIndices;
      });

      setCount(prevCount => prevCount + 1);
      countRef.current = countRef.current + 1;
    }, 5);

    return () => clearInterval(interval);
  }, [alphabet.length]);

  useEffect(() => {
    const newText = currentIndices
      .map((index, i) => {
        if (countRef.current > i * 5) {
          return text[i];
        } else {
          return alphabet[index];
        }
      })
      .join('');

    setTransformedText(newText);
  }, [currentIndices, alphabet, text, count]);

  return (
    <MonoText color={color} size={size} bold={bold}>
      {transformedText}
    </MonoText>
  );
};

export default TextTransformer;
