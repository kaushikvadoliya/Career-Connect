// import { Button, Text } from 'react-native';
// import React, { useReducer } from 'react';
// import { SafeAreaView } from 'react-native-safe-area-context';

// const HooksScreen = () => {
//   const initalState = { count: 0 };

//   const reducer = (state: { count: number }, action: { type: any }) => {
//     switch (action.type) {
//       case 'INCREMENT':
//         return { count: state.count + 1 };

//       case 'DECREMENT':
//         return { count: state.count - 1 };

//       case 'RESET':
//         return { count: 0 };

//       default:
//         return state;
//     }
//   };

//   const [state, dispatch] = useReducer(reducer, initalState);
//   return (
//     <SafeAreaView>
//       <Text>useReducer</Text>
//       <Text>COUNT : {state?.count}</Text>
//       <Button
//         title="Increase"
//         onPress={() => dispatch({ type: 'INCREMENT' })}
//       />
//       <Button
//         title="Decrease"
//         onPress={() => dispatch({ type: 'DECREMENT' })}
//       />
//       <Button title="Reset" onPress={() => dispatch({ type: 'RESET' })} />
//     </SafeAreaView>
//   );
// };

// export default HooksScreen;

import { Button, FlatList, Text, TextInput, View } from 'react-native';
import React, { useReducer, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './style';

type Todo = {
  id: number;
  text: string;
};

type StateType = {
  todos: Todo[];
};

type Action =
  | { type: 'SET-ITEM'; payload: string }
  | { type: 'REMOVE-ITEM'; payload: number };

const TodoList = () => {
  const initalState = { todos: [] };

  const reducer = (state: StateType, action: Action) => {
    switch (action.type) {
      case 'SET-ITEM':
        return {
          ...state,
          todos: [...state.todos, { id: Date.now(), text: action.payload }],
        };

      case 'REMOVE-ITEM':
        return {
          ...state,
          todos: state.todos.filter(item => item.id !== action.payload),
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initalState);
  const [text, setText] = useState('');

  return (
    <SafeAreaView>
      <Text style={styles.header}>TodoList</Text>
      <View>
        <TextInput
          placeholder="Enter the title"
          style={styles.inputStyle}
          value={text}
          onChangeText={setText}
        />
        <Button
          title="Add"
          onPress={() => {
            dispatch({ type: 'SET-ITEM', payload: text });
            setText(' ');
          }}
        />
      </View>

      <FlatList
        data={state.todos}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <Text style={styles.text}>{item.text}</Text>
            <Button
              title="Remove"
              onPress={() =>
                dispatch({ type: 'REMOVE-ITEM', payload: item.id })
              }
            />
          </View>
        )}
        contentContainerStyle={styles.flatlistStyle}
      />
    </SafeAreaView>
  );
};

export default TodoList;
