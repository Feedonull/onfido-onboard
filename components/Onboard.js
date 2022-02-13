import React from 'react';
import { View, Text, StatusBar, StyleSheet, Image, Button } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Colors from '../assets/colors/Colors';
import AppButton from './AppButton';
import LoginButton from './LoginButton';


const data = [
    {
      title: 'control everything with your phone',
      text: 'To make life easier, use your phone as a remote to control everything in your life',
      image: require('../assets/images/Onboard1.png'),
    },
    {
      title: 'Not required to meet people',
      text: 'To make a reservation or request a service there is no need to start a conversation.',
      image: require('../assets/images/Onboard2.png'),
    },
    {
      title: 'Choose the best',
      text: "For your property, hire the appropriate\n person and the correct service.",
      image: require('../assets/images/Onboard3.png'),
    },
  ];

const Onboard = ({ navigation }) => {

    function toSignUp() {
        navigation.navigate('SignUp');
    }

    const renderItem = ({ item }) => {
        return (
            <View style={ styles.slider }>
                <Image source={ item.image } style={styles.image} />
                <View style={ styles.textContainer }>
                    <Text style={ styles.title }>{ item.title }</Text>
                    <Text style={ styles.text }>{ item.text }</Text>
                </View>
            </View>
            
        );
    }

    const keyExtractor = (item) => item.title;

    return(
        <View style={{flex: .9}}>
        <StatusBar translucent backgroundColor="transparent" />
        <AppIntroSlider
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          dotStyle={styles.dotStyle}
          activeDotStyle={styles.activeDotStyle}
          data={data}
        />
        <View style={ styles.buttonsContainer }>
            <AppButton title='Sign Up' onPress={ toSignUp }/>
            <LoginButton title='Log in'/>
        </View>
        <Text style={ styles.guestText }>Open as guest</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    slider: {
        
        alignItems: 'center',
        //justifyContent: 'center',
        backgroundColor: Colors.White

    },
    image: {
        marginTop: 23,
    },
    textContainer: {
        marginEnd: 30,
        marginStart: 30
    },
    title: {
        color: Colors.Black,
        fontSize: 24,
        fontFamily: 'Poppins-Bold',
        textAlign: 'center',
        fontStyle: 'normal',
        marginBottom: 20,
        lineHeight: 26
    },
    text: {
        color: Colors.Grey2,
        fontSize: 15,
        fontFamily: 'Poppins',
        textAlign: 'center',
        fontStyle: 'normal',
        lineHeight: 26
    },
    dotStyle: {
        backgroundColor: Colors.Grey4
    },
    activeDotStyle: {
        backgroundColor: Colors.PrimaryBlue,
        width: 35
    },
    buttonsContainer: {
        flex: .1,
        flexDirection: "row",
        alignContent: 'center',
        justifyContent: 'center',
        marginRight: 20,
        marginLeft: 20,
        justifyContent:'space-between'

    },
    guestText: {
        color: Colors.PrimaryBlue,
        fontSize: 14,
        fontFamily: 'Poppins',
        lineHeight: 20,
        alignSelf: 'center',
        marginBottom:15
    }
});

export default Onboard;