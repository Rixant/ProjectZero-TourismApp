


            import * as tf from '@tensorflow/tfjs';
            // import '@tensorflow/tfjs-react-native';
            import * as mobilenet from '@tensorflow-models/mobilenet';
            // import { fetch, decodeJpeg } from '@tensorflow/tfjs-react-native';
            // import { Asset, Constants, FileSystem, Permissions } from 'react-native-unimodules';


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
                import { icons, images, SIZES, COLORS, FONTS } from '../constants';

                



            const Trip = () => {


                const [url, seturl]= React.useState(images.shark)
                const [displayText, setDisplayText] = React.useState('loading')

                async function getPrediction(url){
                    setDisplayText("Loading Tensor Flow")
                    await tf.ready()
                    setDisplayText("Loading Mobile Net")
                    const model= await mobilenet.load()
                    setDisplayText("Fetching image")
                    const response =await fetch(url, {}, {isBinary: true})
                    setDisplayText("Getting image buffer")
                    const imageData = await response.arrayBuffer() 
                    setDisplayText("Getting Image tensor")
                    const imageTensor = imageToTensor(imageData)
                    setDisplayText("Loading Result")
                    const prediction = await model.classify(imageTensor)
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
                        buffer +=4

                    }

                    return tf.tensor3d(buffer, [height,width,3])

                }

            function renderHeader(){
                return(

                    <View style={{ flexDirection: 'row', height: 50 }}>
                        <TouchableOpacity
                            style={{
                                width: 50,
                                paddingLeft: SIZES.padding * 2,
                                justifyContent: 'center',
                        
                            }}
                            onPress={()=> navigation.navigate("Explore")}
                        
                            >
                            
                            </TouchableOpacity>
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                <View
                                style={{
                                    width: '80%',
                                    height: "100%",
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: SIZES.radius
                                }}>
                            <Text  style={{ ...FONTS.h3 }}> COVID-PNEUMONIA  </Text>
                            
                                </View>
                            </View>

                            <TouchableOpacity
                            style={{
                                width: 50,
                                paddingLeft: SIZES.padding/2,
                                justifyContent: 'center'
                            }}
                            >
                            
                                </TouchableOpacity>
                </View>
                )
            }


            function BackDrop(){
                return(
                    <View style={{height: 200}}>
                        <TouchableOpacity
                        style={{
                            width: '100%',
                            paddingLeft: SIZES.padding * 4,
                            paddingTop: SIZES.padding*10,
                    
                            justifyContent: 'center',
                    
                        }}>
                            <Text>Check Dog or Cat?</Text>
                        <TextInput style={{height:40, width:"90%", borderColor:'gray', borderWidth: 1}}
                        onChangeText={text=>seturl(text)}
                        value={url}/>
            {/* 
                        <Image
                            source={images.visitnepal2020}
                            resizeMode="contain"
                            style={{
                                width: '100%',
                                height: '100%'
                            }}
                        /> */}
                            <Image style={styles.imageStyle} source={url}></Image>

            <Button title="Classify" color="#841584" onPress={()=>getPrediction(url)}  style={styles.buttonStyle} ></Button>

                        </TouchableOpacity>
                    </View>
                )
            }



                return (
                    <SafeAreaView style={{flex:1}, styles.container} >
                        {renderHeader()}
                        {BackDrop()}
                        {/* <Text>Works with only JPEG Images</Text>
                        <TextInput style={{height:40, width:"90%", borderColor:'gray', borderWidth: 1}}
                        value={url}/>
                        <Image source={{url:url}}></Image>
                        <Button title="Classify" onPress={()=>getPrediction(url)}></Button> */}

                    
                    </SafeAreaView>
                )
            }

            const styles = StyleSheet.create({
                container: {
                    flex: 1,
                    backgroundColor: COLORS.lightGray4
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



            export default Trip;
