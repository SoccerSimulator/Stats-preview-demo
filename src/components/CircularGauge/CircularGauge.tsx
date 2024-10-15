// CircularGauge.tsx
import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface CircularGaugeProps {
  value: number;
  text: string;
}

const getColor = (value: number): string => {
  // Green to red, a simple gradient: green at 100, red at 0
  const red = Math.floor((255 * (100 - value)) / 100);
  const green = Math.floor((255 * value) / 100);
  return `rgb(${red}, ${green}, 0)`;
};

export const CircularGauge: React.FC<CircularGaugeProps> = ({ value, text }) => {
  return (
    <div style={{ width: 100, height: 100, padding: 10 }}>
      <CircularProgressbar
        value={value}
        text={`${value}%`}
        styles={buildStyles({
          textSize: '30px',
          pathColor: getColor(value),
          textColor: '#fff',
          trailColor: '#ddd',
          backgroundColor: '#3e98c7',
        })}
      />
      <div style={{ color: '#fff', textAlign: 'center', fontSize: '16px' }}>{text}</div>
    </div>
  );
};