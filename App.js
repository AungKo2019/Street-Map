import { StyleSheet, Text, View,SafeAreaView, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import html_script from './html_script'
import React from 'react'

class App extends React.Component {

  _goToMyPosition=(lat,lng)=>{
    this.refs['Map_Ref'].injectJavaScript(`
    map.setView([${lat},${lng}],16)
    L.marker([${lat},${lng}]).addTo(map)
    `)
  }
  render(){
    return (
      <SafeAreaView style={styles.container}>
        <WebView ref={'Map_Ref'} source={{html : html_script}} style={styles.webView}/>
        <View style={styles.ButtonArea}>
          <TouchableOpacity style={styles.Button} onPress={()=>this._goToMyPosition(44.8125,20.4612)}>
            <Text style={styles.ButtonText}> Belgrade</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.Button} onPress={()=>this._goToMyPosition(35.6762,139.6503)}>
            <Text style={styles.ButtonText}> Tokyo</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.Button} onPress={()=>this._goToMyPosition(40.4168,3.7038)}>
            <Text style={styles.ButtonText}> Madrid</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.Button} onPress={()=>this._goToMyPosition(16.946375,96.074872)}>
            <Text style={styles.ButtonText}> Home</Text>
          </TouchableOpacity>

        </View>
      </SafeAreaView>
    );
  
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    padding:10,
  },
  webView:{
   flex:2,
  },
  ButtonArea:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
  },
  Button:{
    width:80,
    padding:10,
    borderRadius:10,
    backgroundColor:'black',
    alignItems:'center'
  },
  ButtonText:{
    color:'white',
    fontWeight:'bold',
    fontSize:14,
  }
});

export default App;