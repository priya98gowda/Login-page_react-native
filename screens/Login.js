import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  AspectRatio,
  Box,
  Button,
  Icon,
  Image,
  Input,
  NativeBaseProvider,
} from "native-base";
import { FontAwesome5 } from "@expo/vector-icons";

function Login() {
  const navigation = useNavigation();
  const [LoginData, setLoginData] = useState({
    email:"",
    password:"",
  });
  const [emailError, setemailError] = useState(false);
  const [passwordError, setpasswordError] = useState(false);

  const handleChange=()=>{
    setLoginData({
      ...LoginData,
      [e.target.name]:e.target.value
    })
  }

  const emailValid=(email)=>{
    if(email){
      setemailError(false)
      return false
    } else {
      setemailError(true)
      return true
    }
  }

  const passwordValid=(password)=>{
    if(password){
      setpasswordError(false)
      return false
    } else {
      setpasswordError(true)
      return true
    }
  }
  const handlePress = (e)=>{
    e.preventDefault();
    const {email,password} = LoginData;
    const validEmail = emailValid(email)
    const validPassword = passwordValid(password);
   if(validEmail && validPassword === true){
     alert('Login is Successfull')
   }

  }
  return (
    <View style={styles.container}>
      <View style={styles.Middle}>
        <Text style={styles.LoginText}>Login</Text>
      </View>
      <View style={styles.text2}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.signupText}>SignUp</Text>
        </TouchableOpacity>
      </View>

      {/* UserName or Email Input Field */}

      <View style={styles.buttonStyle}>
        <View style={styles.emailInput}>
          <Input
            InputLeftElement={
              <Icon
                as={<FontAwesome5 name="user-secret" />}
                size="sm"
                m={2}
                _light={{
                  color: "black",
                }}
                _dark={{
                  color: "gray-300",
                }}
              />
            }
            variant="outline"
            placeholder="UserName or Email"
            _light={{
              placeholderTextColor: "blueGray.400",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}
            name='email'
            value={LoginData.email}
            onChange={handleChange}
          />
        </View>
        {emailError && (<Text style={styles.errorText}>Email is required</Text>)}
      </View>

      {/* Password Input Field */}

      <View style={styles.buttonStylex}>
        <View style={styles.emailInput}>
          <Input
            InputLeftElement={
              <Icon
                as={<FontAwesome5 name="key" />}
                sixe="sm"
                m={2}
                _light={{ color: "black" }}
                _dark={{ color: "gray.300" }}
              />
            }
            variant="outline"
            secureTextEntry={true}
            placeholder="Password"
            _light={{ placeholderTextColor: "blueGray.400" }}
            _dark={{ placeholderTextColor: "blueGray.50" }}
            name="password"
            value={LoginData.password}
            onChange={handleChange}
          />
        </View>
        {passwordError &&( <Text style={styles.errorText}>Password is required</Text>)}
      </View>

      {/* Button */}

      <View style={styles.buttonStyle}>
        <Button style={styles.buttonDesign} onPress={handlePress}>Login</Button>
      </View>

      {/* Line */}

      <View style={styles.lineStyle}>
        <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
        <View>
          <Text style={{ width: 50, textAlign: "center" }}>Or</Text>
        </View>
        <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
      </View>

      {/* Box */}

      <View style={styles.boxStyle}>
        <Box
          onPress={() => navigation.navigate("#")}
          style={{ height: 80, width: 80, marginLeft: 20 }}
          shadow={3}
          _light={{ backgroundColor: "gray.50" }}
          _dark={{ backgroundColor: "gray.700" }}
        >
          <AspectRatio ratio={1 / 1}>
            <Image
              roundedTop="sm"
              source={require('../assets/g.png')}
              alt="image"
              width={20}
              height={20}
            />
          </AspectRatio>
        </Box>
        <Box
          onPress={() => navigation.navigate("#")}
          style={{ height: 80, width: 80, marginLeft: 20 }}
          shadow={3}
          _light={{ backgroundColor: "gray.50" }}
          _dark={{ backgroundColor: "gray.700" }}
        >
          <AspectRatio ratio={1 / 1}>
            <Image
            style={styles.image}
              roundedTop="lg"
              source={require('../assets/f.png')}
              alt="image"
              width={20}
              height={20}
            />
          </AspectRatio>
        </Box>
        <Box
          onPress={() => navigation.navigate("#")}
          style={{ height: 80, width: 80, marginLeft: 20 }}
          shadow={3}
          _light={{ backgroundColor: "gray.50" }}
          _dark={{ backgroundColor: "gray.700" }}
        >
          <AspectRatio ratio={1 / 1}  >
            <Image
              roundedTop="lg"
              source={require('../assets/t.png')}
              alt="image"
              width={20}
              height={20}
            />
          </AspectRatio>
        </Box>
        <Box
          onPress={() => navigation.navigate("#")}
          style={{ height: 80, width: 80, marginLeft: 20 }}
          shadow={3}
          _light={{ backgroundColor: "gray.50" }}
          _dark={{ backgroundColor: "gray.700" }}
        >
          <AspectRatio ratio={1 / 1}>
            <Image
              roundedTop="lg"
              source={require('../assets/a.png')}
              alt="image"
              width={20}
              height={20}
            />
          </AspectRatio>
        </Box>
      </View>
    </View>
  );
}

export default() => {
  return (
    <NativeBaseProvider>
      <Login />
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  LoginText: {
    marginTop: 100,
    fontSize: 30,
    fontWeight: "bold",
  },
  Middle: {
    alignItems: "center",
    justifyContent: "center",
  },
  text2: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 5,
  },
  signupText: {
    fontWeight: "bold",
  },
  emailInput: {
    marginTop: 10,
    marginRight: 5,
  },
  buttonStyle: {
    marginTop: 30,
    marginLeft: 15,
    marginLeft: 15,
  },
  buttonStylex: {
    marginTop: 22,
    marginLeft: 15,
    marginLeft: 15,
  },
  buttonDesign: {
    backgroundColor: "#026efd",
  },
  lineStyle: {
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
    alignItems: "center",
  },
  boxStyle: {
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
    justifyContent: "space-around",
  },
  errorText:{
    color:'red',
    fontWeight:'300',
    fontSize:12
  }
});
