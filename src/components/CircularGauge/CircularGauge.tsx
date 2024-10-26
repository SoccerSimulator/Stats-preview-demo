import React from 'react';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';
import './CircularGauge.css'

interface CircularGaugeProps {
  value: number;
  text: string;
}

const getColor = (value: number): string => {
  if (value <= 20) {
    return '#FF0000'; // Red
  } else if (value <= 40) {
    return '#FF7200'; // Orange
  } else if (value <= 60) {
    return '#FFD900'; // Yellow
  } else if (value <= 80) {
    return '#86DB38'; // Light Green
  } else {
    return '#00DE75'; // Green
  }
};

export const CircularGauge: React.FC<CircularGaugeProps> = ({ value, text }) => {
  return (
    <div style={{ width: 150, height: 100 }}>
      <Gauge
        value={value}
        startAngle={-90}
        endAngle={90}
        sx={{
          [`& .${gaugeClasses.valueArc}`]: {
            fill: getColor(value),
          },
          [`& .${gaugeClasses.valueText}`]: {
            fontSize: '40px',
            fill: '#ffffff',
          },
          [`& .${gaugeClasses.referenceArc}`]: {
            fill: '#ffffff',
          },
        }}
  
      />
    </div>
  );
};
