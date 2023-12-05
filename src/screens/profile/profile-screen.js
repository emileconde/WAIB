import React, { useContext } from 'react';
import { View, Text, Image, TextInput, Button, StyleSheet } from 'react-native';
import { AppContext } from "../../contexts/app/app-context";

const ProfileScreen = () => {
  const { currentUser, logout, resetPassword } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <Image source={ require('../../../assets/user.png') } style={styles.avatar} />
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.info}>{currentUser.email}</Text>
        <Text style={styles.label}>Password:</Text>
        <TextInput 
          secureTextEntry 
          value="******" // Just a placeholder for security
          editable={false} // Should be non-editable; password must never be displayed
          style={styles.info} 
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Log Out" onPress={logout} color="#FF6347" />
        <Button title="Reset Password" onPress={resetPassword} color="#1E90FF" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 25,
    backgroundColor: '#7BF4ED',
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 40,
  },
  infoContainer: {
    width: '100%',
    alignItems: 'center',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333333',
  },
  info: {
    fontSize: 16,
    color: '#333333',
    borderWidth: 3,
    borderColor: '#000000',
    padding: 10,
    width: '100%',
    marginTop: 5,
    marginBottom: 15,
    borderRadius: 5,
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default ProfileScreen;
