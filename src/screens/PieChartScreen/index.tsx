/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */

import { Text, View } from 'react-native';
import React, { useState } from 'react';
import { PieChart } from 'react-native-gifted-charts';
import { colors, totalExpanse } from '../LineChartScreen/data';

const PieChartScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const PieData = Object.entries(totalExpanse.categories).map(
    (value, index) => ({
      value: value[1],
      text: value[0],
      color: colors[index],
    }),
  );

  const renderDot = (color: string) => {
    return (
      <View
        style={{
          height: 10,
          width: 10,
          borderRadius: 5,
          backgroundColor: color,
          marginRight: 10,
        }}
      />
    );
  };

  const renderLegendComponent = () => {
    return (
      <>
        <View
          style={{
            justifyContent: 'center',
            marginBottom: 10,
            gap: 10,
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}
        >
          {PieData.map((item, index) => {
            return (
              <>
                <View
                  style={{
                    alignItems: 'center',
                    marginRight: 20,
                    flexDirection: 'row',
                  }}
                >
                  {renderDot(item.color)}
                  <Text key={index} style={{ color: 'white' }}>
                    {item.text}:{' '}
                    {Math.round((item.value / totalExpanse.total) * 100)}%
                  </Text>
                </View>
              </>
            );
          })}
        </View>
      </>
    );
  };

  return (
    <View
      style={{
        paddingVertical: 100,
        backgroundColor: '#34448B',
        flex: 1,
      }}
    >
      <View
        style={{
          margin: 20,
          padding: 16,
          borderRadius: 20,
          backgroundColor: '#232B5D',
        }}
      >
        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
          PieChart
        </Text>
        <View style={{ padding: 20, alignItems: 'center' }}>
          <PieChart
            data={PieData}
            donut
            radius={90}
            onPress={(_: any, index: number) => {
              setActiveIndex(index);
            }}
            showGradient
            focusOnPress
            focusedPieIndex={activeIndex}
            innerRadius={60}
            innerCircleColor={'#232B5D'}
            centerLabelComponent={() => {
              return (
                <View
                  style={{ justifyContent: 'center', alignItems: 'center' }}
                >
                  <Text
                    style={{ fontSize: 22, color: 'white', fontWeight: 'bold' }}
                  >
                    {Math.round(
                      (PieData[activeIndex].value / totalExpanse.total) * 100,
                    )}
                    %
                  </Text>
                  <Text style={{ fontSize: 14, color: 'white' }}>
                    {PieData[activeIndex].text}
                  </Text>
                </View>
              );
            }}
          />
        </View>
      </View>
      {renderLegendComponent()}
    </View>
  );
};

export default PieChartScreen;

// export default PieChartScreen;

// import React, { useState, useRef, useEffect } from 'react';
// import { View, Text, Dimensions, StyleSheet, Pressable } from 'react-native';
// import Animated, {
//   useSharedValue,
//   useAnimatedScrollHandler,
//   useAnimatedStyle,
//   interpolate,
//   Extrapolate,
// } from 'react-native-reanimated';
// import { theme } from './src/theme/theme';
// const { width } = Dimensions.get('window');
// const ITEM_WIDTH = 70;
// const SPACING = (width - ITEM_WIDTH) / 3.2;
// const DATA = ['-15%', '-10%', '-5%', '0%', '5%', '10%', '15%'];
// function PercentageWheeler() {
//   const scrollX = useSharedValue(0);
//   const [selectedColor, setSelectedColor] = useState(null);
//   const flatListRef = useRef(null);
//   console.log('Selected Color:', selectedColor);
//   const scrollHandler = useAnimatedScrollHandler({
//     onScroll: event => {
//       scrollX.value = event.contentOffset.x;
//     },
//   });
//   return (
//     <View style={styles.container}>
//       <View>
//         <Animated.FlatList
//           ref={flatListRef}
//           data={DATA}
//           keyExtractor={item => item}
//           horizontal
//           showsHorizontalScrollIndicator={false}
//           snapToInterval={ITEM_WIDTH}
//           decelerationRate="fast"
//           bounces={false}
//           onScroll={scrollHandler}
//           scrollEventThrottle={16}
//           contentContainerStyle={{
//             paddingHorizontal: SPACING,
//           }}
//           onMomentumScrollEnd={event => {
//             const offsetX = event.nativeEvent.contentOffset.x;
//             const index = Math.round(offsetX / ITEM_WIDTH);
//             setSelectedColor(DATA[index]);
//           }}
//           renderItem={({ item, index }) => (
//             <PickerItem
//               item={item}
//               index={index}
//               scrollX={scrollX}
//               selectedValue={selectedColor}
//               setSelectedValue={setSelectedColor}
//               flatListRef={flatListRef}
//             />
//           )}
//         />
//       </View>
//     </View>
//   );
// }
// const PickerItem = ({
//   item,
//   index,
//   scrollX,
//   selectedValue,
//   setSelectedValue,
//   flatListRef,
// }) => {
//   const animatedStyle = useAnimatedStyle(() => {
//     const inputRange = [
//       (index - 1) * ITEM_WIDTH,
//       index * ITEM_WIDTH,
//       (index + 1) * ITEM_WIDTH,
//     ];
//     const scale = interpolate(
//       scrollX.value,
//       inputRange,
//       [0.8, 1.2, 0.8],
//       Extrapolate.CLAMP,
//     );
//     const opacity = interpolate(
//       scrollX.value,
//       inputRange,
//       [0.6, 1, 0.6],
//       Extrapolate.CLAMP,
//     );
//     return {
//       transform: [{ scale }],
//       opacity,
//     };
//   });
//   return (
//     <Pressable
//       onPress={() => {
//         setSelectedValue(item);
//         flatListRef.current?.scrollToIndex({
//           index,
//           animated: true,
//           viewPosition: 0.5,
//         });
//       }}
//       style={{ width: ITEM_WIDTH }}>
//       <Animated.View
//         style={[
//           {
//             paddingVertical: 16,
//             backgroundColor: selectedValue === item ? theme.colors.surface : '',
//           },
//           animatedStyle,
//         ]}>
//         <Text
//           style={[
//             { color: '#fff' },
//             styles.label,
//             selectedValue === item && { fontWeight: 'bold' },
//           ]}>
//           {item}
//         </Text>
//       </Animated.View>
//     </Pressable>
//   );
// };
// export default PickerItem;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   label: {
//     fontSize: 20,
//     textAlign: 'center',
//   },
// });
