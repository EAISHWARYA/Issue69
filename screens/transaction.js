import React,{Component} from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import * as Permissions from 'expo-permissions';
import {BarCodeScanner} from 'expo-barcode-scanner';

export default class Transaction extends Component{
    constructor(){
        super()
        this.state={
            hasCamPerm:null,
            scanned:false,
            scannedData:'',
            buttonState:'normal'
        }
    }
    getCamPerm=async()=>{
       
        const status= await Permissions.askAsync(Permissions.CAMERA)
 
        this.setState({
            hasCamPerm:status==='granted',
           
            scanned:false,
            buttonState:'clicked',
        })
    }
    handledata=async(data)=>{
        
        this.setState({
            scanned:true,
            buttonState:'normal',
            scannedData:data
        });
    }

    render(){
      const hasCamPerm=this.state.hasCamPerm
        const buttonState=this.state.buttonState
        const scannedData=this.state.scannedData
        const scanned=this.state.scanned
        
        if(buttonState==='clicked'&& hasCamPerm){
           return(  
           <BarCodeScanner onBarCodeScanned={scanned?undefined:this.handledata}
                style={StyleSheet.absoluteFillObject}/>

           );
            
        }
        else if(buttonState==='normal'){
             return( 
     <View style={styles.container}>
                
     <Text style={styles.displayText}>{hasCamPerm===true?this.state.scannedData:'Request cam permission'}</Text>
    <TouchableOpacity style={styles.button} onPress={this.getCamPerm}>
     <Text style={styles.buttonText}>Scan QR code</Text>
    </TouchableOpacity>
    </View>
                );

}
        
}
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'pink',
        justifyContent:'center'
    },
    button:{
        backgroundColor:'#2196F3',
        padding:10,
        margin:10
    },
    buttonText:{
        fontSize:15,
        fontStyle:'italic',
        color:'blue'
    },
    displayText:{
        fontSize:20
    }
})