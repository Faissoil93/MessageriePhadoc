import React from "react";
import {View,Text,StyleSheet,Image} from 'react-native';

const Profiles = ({username,uri}) => {
    return(
        <View style={StyleSheet.container}>
        <Image source ={{uri:uri}} style={StyleSheet.avatarStyle}/>
        <Text style={styles.nameStyle}>{username}</Text>

        </View>
    )
}

export default Profiles;
const styles= StyleSheet.create({
    container:{
        alignItems:'center',
        marginTop:20,
        marginRight:17
    },
    avatarStyle:{
        width:60,
        height:60,
        borderRadius:30
    },
    nameStyle:{
        marginTop:10,
        fontSize:11,
        color:'#fff',
        fontFamily:'Montserrat_700Bold'
    }

})