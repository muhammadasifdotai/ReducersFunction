////// Second example of Array /////////

import React from 'react';
import {Text, View} from 'react-native';

export default function App(): JSX.Element {
  // creating Array of object
  const Arr = [1,2,3,4,5,6,7];

  return (
    <View>
      <Text>Alhamdulillah</Text>
      <Text>
      {Arr.reduce((item, next) => (
        item + next
      ))}
      </Text>
    </View>
  );
}


// Showing result in the console // 

// example: 1.
// const Arr = [1,2,3,4,5,6,7]
// const newArr = Arr.reduce((item, next) => (
//   item * next
// ))
// console.log(newArr)


// example: 1.
const Arr = [1,2,3,4,5,6,7]
const newArr = Arr.reduce((item, next) => {
  console.log(item, next)
  return item * next
})
console.log(newArr)