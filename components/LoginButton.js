import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import Colors from '../assets/colors/Colors';

const LoginButton = ({ onPress, title }) => (
        
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={onPress}
                style={styles.appButtonContainer} >
                <Text style={styles.appButtonText}>{title}</Text>
            </TouchableOpacity>
      );

const styles = StyleSheet.create({
    appButtonContainer:{
        backgroundColor: Colors.White,
        justifyContent: 'center',
        alignContent: 'center',
        width: 160,
        height: 48,
        borderRadius: 10,
        marginRight: 20,
        borderWidth: 1,
        borderColor: Colors.PrimaryBlue
    },
    appButtonText: {
        color: Colors.PrimaryBlue,
        fontFamily: 'Poppins-SemiBold',
        fontSize: 16,
        alignSelf: 'center',
        


    }
});

export default LoginButton;