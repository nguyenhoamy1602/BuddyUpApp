import React from 'react';
import {Text, View} from 'react-native';

import {Button, SocialIcon} from 'react-native-elements'
import {Actions} from 'react-native-router-flux'
import {connect} from 'react-redux';
import {Facebook} from 'expo';
import Icon from 'react-native-vector-icons/Ionicons';

import {actions as auth, constants as c} from "../"
const {signInWithFacebook} = auth;

import styles from "../styles"
import AuthContainer from "../components/AuthContainer"

class Welcome extends React.Component {
    constructor() {
        super();
        this.state = {}

        this.onSuccess = this.onSuccess.bind(this);
        this.onError = this.onError.bind(this);
        this.onSignInWithFacebook = this.onSignInWithFacebook.bind(this);
    }

    //get users permission authorization (ret: facebook token)
    async onSignInWithFacebook() {
        const options = {permissions: ['public_profile', 'email'],}
        const {type, token} = await Facebook.logInWithReadPermissionsAsync(c.FACEBOOK_APP_ID, options);

        if (type === 'success') {
            this.props.signInWithFacebook(token, this.onSuccess, this.onError)
        }
    }

    onSuccess() {
        Actions.Main()
    }

    onError(error) {
        alert(error.message);
    }

    render() {
        return (
            <AuthContainer>
                <View style={styles.wrapper}>
                    <Icon name="ios-people-outline" size={100} color = "white">
                    </Icon>
                    <Text style={styles.appTitle}>Buddy Up</Text>
                </View>
                <View>
                    <SocialIcon
                        raised
                        button
                        type='facebook'
                        title='Sign in with Facebook'
                        iconSize={19}
                        style={styles.fbButton}
                        onPress={this.onSignInWithFacebook}/>

                    <View style={styles.bottomContainer}/>
                </View>
            </AuthContainer>
        );
    }
}


export default connect(null, {signInWithFacebook})(Welcome);
