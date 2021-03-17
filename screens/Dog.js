// import React, { useState, useEffect }  from 'react';
// import { StyleSheet, View,Image } from 'react-native';
// import { Button, Input } from 'react-native-elements';
// import * as jpeg from 'jpeg-js'
// import * as tf from '@tensorflow/tfjs';
// import * as mobilenet from '@tensorflow-models/mobilenet';
// import { fetch, decodeJpeg, bundleResourceIO } from '@tensorflow/tfjs-react-native';
// export default function App() {

  
//   // Get reference to bundled model assets 
//   async function getPrediction()
//   const modelJson = require('../assets/model/model.json');
//   const modelWeights = require('../assets/model/group1-shared.bin');
  
//   // Use the bundleResorceIO IOHandler to load the model
//   const model = await tf.loadLayersModel(
//     bundleResourceIO(modelJson, modelWeights));
  
//   // Load an image from the web
//   const uri = 'https://static.scientificamerican.com/sciam/cache/file/92E141F8-36E4-4331-BB2EE42AC8674DD3_source.jpg';
//   const response = await fetch(uri, {}, { isBinary: true });
//   const imageData = await response.arrayBuffer();
//   const imageTensor = decodeJpeg(imageData);
    
//   const prediction = (await model.predict(imageTensor))[0];
  
//   // Use prediction in app
//   setState({
//     prediction,
//   });
      
    
//   return (
//     <View style={styles.container}>
//       <Text>{prediction}</Text>
      
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });