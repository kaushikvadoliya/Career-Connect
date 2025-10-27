/* eslint-disable react-native/no-inline-styles */
import { View } from 'react-native';
import React from 'react';
import { LineChart } from 'react-native-gifted-charts';
import { currentYearData } from './data';

const LineChartScreen = () => {
  const LineData = currentYearData.monthlyExpenses.map(expense => {
    return {
      value: expense.categories.Bills,
    };
  });

  return (
    <View style={{ marginHorizontal: 20, marginTop: 16 }}>
      <LineChart
        height={650}
        width={300}
        initialSpacing={0}
        spacing={27}
        data={LineData}
        thickness={2}
        showVerticalLines
        verticalLinesColor="rgba(0, 0, 0, 0.5)"
        color="#0BA5A4"
        disableScroll
        xAxisLabelTexts={currentYearData.monthlyExpenses.map(
          item => item.month,
        )}
        maxValue={15000}
        xAxisLabelTextStyle={{
          fontSize: 8,
        }}
      />
      {/* <PieChart
          donut
          showText
          textColor="black"
          innerRadius={70}
          textBackgroundRadius={20}
          showTextBackground
          textBackgroundColor="white"
          data={pieData}
          textSize={14}
        /> */}
    </View>
  );
};

export default LineChartScreen;
