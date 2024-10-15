import React from 'react';
import { ResponsiveRadar } from '@nivo/radar';

interface RadarChartProps {
  categories: string[];
  seriesData: number[];
}

export const RadarChart: React.FC<RadarChartProps> = ({ categories, seriesData }) => {
  const data = categories.map((category, index) => ({
    category,
    value: seriesData[index],
  }));

  const colors = ['#b83511', '#cea12c', '#a3ce26', '#3cb52a', '#1a8718']; // Array of colors for each ring

  return (
    <ResponsiveRadar
      data={data}
      keys={['value']}
      indexBy="category"
      maxValue="auto"
      margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
      curve="linearClosed"
      borderWidth={2}
      borderColor={{ from: 'color' }}
      gridLevels={5}
      gridShape="circular"
      gridLabelOffset={16}
      enableDots={true}
      dotSize={8}
      dotColor={{ theme: 'background' }}
      dotBorderWidth={0}
      colors={colors} // Apply the array of colors to the grid levels
      fillOpacity={0.25}
      blendMode="normal"
      animate={true}
      isInteractive={true}
      motionConfig="wobbly"
      theme={{
        dots: {
          text: {
            fill: "#2d3748",
            fontSize: 12,
            fontWeight: 500,
          },
        },
        labels: {
          text: {
            fill: "#ffffff",
          }
        }
      }}
    />
  );
};