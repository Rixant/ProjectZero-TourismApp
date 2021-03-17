            import '@tensorflow/tfjs';
            import * as tf from '@tensorflow/tfjs';
            import '@tensorflow/tfjs-react-native';
            import * as mobilenet from '@tensorflow-models/mobilenet';
            import { fetch, decodeJpeg } from "@tensorflow/tfjs-react-native";

            import React from 'react';
            import { 
                SafeAreaView,
                View, 
                Text,
                TextInput,
                StyleSheet,
                TouchableOpacity,
                Image,
                Button,
                ScrollView,
                FlatList, 
                Touchable} from 'react-native';
            import * as jpeg from 'jpeg-js';
            import { icons, images, SIZES, COLORS, FONTS } from '../constants';


            export default function Trip(){
                
                const [url, setUrl]= React.useState('https://oceana.org/sites/default/files/tiger_shark_0.jpg')
                const [displayText, setDisplayText] = React.useState('Dog or Cat?')

                async function getPrediction(url){
                    // setDisplayText("Loading Tensor Flow")
                    setDisplayText("Loading Flow")
                    await tf.ready()

                    setDisplayText("Loading Mobile Net")
                    
                    const model= await mobilenet.load()
                    setDisplayText("Fetching image");

               
                    const response =await fetch(url, {}, { isBinary : true});
                    setDisplayText("Getting image buffer")
              
                    const imageData = await response.arrayBuffer();
                    setDisplayText("Getting Image tensor")
  
                    const imageTensor = imageToTensor(imageData);
                    setDisplayText("Loading Result")
               
                    const prediction = await model.classify(imageTensor);
             
                  
                
                    setDisplayText(JSON.stringify(prediction))
                  


                }



                function imageToTensor(rawData){
                    const {width, height, data}= jpeg.decode(rawData, true)
                    const buffer = new Uint8Array(width*height*3)
                    let offset = 0;
                    for(let i=0; i<buffer.length; i+=3){
                        buffer[i]=data[offset]
                        buffer[i+1]=data[offset+1]
                        buffer[i+2]=data[offset+2]
                        offset +=4

                    }

                    return tf.tensor3d(buffer, [height, width, 3])

                }

                return(
                    <View style={styles.container1}>
                        <Text>Works with only JPEG Images</Text>
                        <TextInput style={{height:40, width:"90%", borderColor:'gray', borderWidth: 1}}
                        onChangeText={text => setUrl(text) }
                        value={url}/>
                        <Image style={styles.imageStyle} source={{uri:url}}></Image>
                        <Button title="Classify" onPress={() => getPrediction(url)}></Button>
                        <Text>{displayText}</Text>
                    </View>
                )

                
            }
        
        



            const styles = StyleSheet.create({
                container: {
                    flex: 1,
                    backgroundColor: COLORS.lightGray4
                },
                container1:{
                    flex:1,
                    alignItems: 'center',
                    justifyContent: 'center'

                },
                shadow: {
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 3,
                    },
                    shadowOpacity: 0.1,
                    shadowRadius: 3,
                    elevation: 1,
                },buttonStyle: {
                    color: 'red',
                    marginTop: 20,
                    padding: 20,
                    backgroundColor: 'green'
                },
                imageStyle:{
                    width: 350,
                    height: 200
                }
            })



           


            // import * as tf from '@tensorflow/tfjs';
            // import '@tensorflow/tfjs-react-native';
            // import * as mobilenet from '@tensorflow-models/mobilenet';
            // import { fetch, decodeJpeg, bundleResourceIO} from '@tensorflow/tfjs-react-native';
            // // import { Asset, Constants, FileSystem, Permissions } from 'react-native-unimodules';


            // import React from 'react';
            // import { 
            //     SafeAreaView,
            //     View, 
            //     Text,
            //     TextInput,
            //     StyleSheet,
            //     TouchableOpacity,
            //     Image,
            //     Button,
            //     ScrollView,
            //     FlatList, 
            //     Touchable} from 'react-native';
            // import { icons, images, SIZES, COLORS, FONTS } from '../constants';

            // export default function Trip(){
            //     const [url, seturl]= React.useState('https://static.scientificamerican.com/sciam/cache/file/92E141F8-36E4-4331-BB2EE42AC8674DD3_source.jpg')
            //     const [displayText, setDisplayText] = React.useState('loading')

            //     async function getPrediction(url){
            //         await tf.ready()
            //     const modelJson = require('../assets/model/model.json');
            //     const modelWeights = require('../assets/model/group1-shared.bin');

            //     // Use the bundleResorceIO IOHandler to load the model
            //     const model = await tf.loadLayersModel(
            //     bundleResourceIO(modelJson, modelWeights));

            //     // Load an image from the web
            //     const uri = url;
            //     const response = await fetch(uri, {}, { isBinary: true });
            //     const imageData = await response.arrayBuffer();
            //     const imageTensor = imageToTensor(imageData);
                
            //     const prediction = (await model.predict(imageTensor))[0];

            //     // Use prediction in app

            //     setDisplayText(JSON.stringify(prediction))

            //     }



            //     function imageToTensor(rawData){
            //         const {width, height, data}= jpeg.decode(rawData, true)
            //         const buffer = new Uint8Array(width*height*3)
            //         let offset = 0;
            //         for(let i=0; i<buffer.length; i+=3){
            //             buffer[i]=data[offset]
            //             buffer[i+1]=data[offset+1]
            //             buffer[i+2]=data[offset+2]
            //             buffer +=4

            //         }

            //         return tf.tensor3d(buffer, [height, width, 3])

            //     }

            //     return(
            //         <View style={styles.container1}>
            //             <Text>Works with only JPEG Images</Text>
            //             <TextInput style={{height:40, width:"90%", borderColor:'gray', borderWidth: 1}}
            //             onChangeText={text => seturl(text) }
            //             value={url}/>
            //             <Image style={styles.imageStyle} source={{uri:url}}></Image>
            //             <Button title="Classify" onPress={()=>getPrediction(url)}></Button>
            //         </View>
            //     )

                
            // }



            // const styles = StyleSheet.create({
            //     container: {
            //         flex: 1,
            //         backgroundColor: COLORS.lightGray4
            //     },
            //     container1:{
            //         flex:1,
            //         alignItems: 'center',
            //         justifyContent: 'center'

            //     },
            //     shadow: {
            //         shadowColor: "#000",
            //         shadowOffset: {
            //             width: 0,
            //             height: 3,
            //         },
            //         shadowOpacity: 0.1,
            //         shadowRadius: 3,
            //         elevation: 1,
            //     },buttonStyle: {
            //         color: 'red',
            //         marginTop: 20,
            //         padding: 20,
            //         backgroundColor: 'green'
            //     },
            //     imageStyle:{
            //         width: 350,
            //         height: 200
            //     }
            // })
