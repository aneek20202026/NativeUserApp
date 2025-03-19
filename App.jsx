import React, { useState, useEffect } from "react";
import { 
  View, Text, Image, StyleSheet, ActivityIndicator, TouchableOpacity, TextInput, 
  ScrollView,
  SafeAreaView
} from "react-native";

const TruncatedTextInput = ({ value, maxLength = 20 }) => {
  const [isFocused, setIsFocused] = useState(false);

  // Display truncated text when not focused
  const displayText = isFocused ? value : value.length > maxLength ? value.substring(0, maxLength) + "..." : value;

  return (
    <TextInput
      style={styles.input}
      value={displayText}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onChangeText={(text) => console.log("Updated value:", text)} // Handle text change
    />
  );
};

const App = () => {
  const [loading, setLoading]=useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [allData,setAllData]=useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://random-data-api.com/api/users/random_user?size=80");
        const data = await response.json()
        setAllData(data)
        console.log(data)
      } catch (error) {
        console.error("Error fetching image:", error);
        alert("Error occured, Please try again!")
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#4A90E2" style={styles.loader} />;
  }

    const user = allData[currentIndex];

    return (
      <SafeAreaView style={{flex:1, backgroundColor: "#F8F8F8"}}>
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={{ uri: user.avatar }} style={styles.profileImage} resizeMode="cover" />
        <Text style={styles.name}>{user.first_name} {user.last_name}</Text>
        <View style={styles.customInp}>
          <Text style={{fontWeight:'bold'}}>ID</Text>
          <TextInput>{user.id}</TextInput>
        </View>
        <View style={styles.customInp}>
          <Text style={{fontWeight:'bold'}}>UID</Text>
          <TruncatedTextInput value={user.uid} maxLength={20} />
        </View>
        <View style={styles.customInp}>
          <Text style={{fontWeight:'bold'}}>Password</Text>
          <TextInput>{user.password}</TextInput>
        </View>
        <View style={styles.customInp}>
          <Text style={{fontWeight:'bold'}}>First Name</Text>
          <TextInput>{user.first_name}</TextInput>
        </View>
        <View style={styles.customInp}>
          <Text style={{fontWeight:'bold'}}>Last Name</Text>
          <TextInput>{user.last_name}</TextInput>
        </View>
        <View style={styles.customInp}>
          <Text style={{fontWeight:'bold'}}>Username</Text>
          <TextInput>{user.username}</TextInput>
        </View>
        <View style={styles.customInp}>
          <Text style={{fontWeight:'bold'}}>Email ID</Text>
          <TruncatedTextInput value={user.email} maxLength={20} />
        </View>
 
        {/* Pagination Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={[styles.button, currentIndex === 0 && styles.disabledButton]} 
            disabled={currentIndex === 0} 
            onPress={() => setCurrentIndex(currentIndex - 1)}
          >
            <Text style={styles.buttonText}>Previous</Text>
          </TouchableOpacity>
  
          <TouchableOpacity 
            style={[styles.button, currentIndex === allData.length - 1 && styles.disabledButton]} 
            disabled={currentIndex === allData.length - 1} 
            onPress={() => setCurrentIndex(currentIndex + 1)}
          >
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    loader: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      margin: 10,
      backgroundColor: "#F8F8F8",
    },
    profileImage: {
      width: 100,
      height: 100,marginTop:30,
      borderRadius: 50,
      marginBottom: 10,
      backgroundColor: "lightgray",
    },
    name: {
      fontSize: 20,
      fontWeight: "bold",
    },
    email: {
      fontSize: 16,
      color: "gray",
      marginBottom: 5,
    },
    phone: {
      fontSize: 16,
      marginBottom: 5,
    },
    dob: {
      fontSize: 16,
      color: "gray",
      marginBottom: 10,
    },
    section: {
      width: "90%",
      padding: 10,
      borderRadius: 10,
      backgroundColor: "#fff",
      elevation: 3,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 5,
      marginBottom: 10,
    },
    sectionTitle: {
      fontSize: 16,
      fontWeight: "bold",
      marginBottom: 5,
    },
    buttonContainer: {
      flexDirection: "row",
      marginTop: 20,
      marginBottom:50
    },
    button: {
      backgroundColor: "#4A90E2",
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 10,
      marginHorizontal: 5,
    },
    disabledButton: {
      backgroundColor: "#ccc",
    },
    buttonText: {
      color: "#fff",
      fontWeight: "bold",
    },
    customInp:{
      // backgroundColor:'red',
      borderColor:'black',borderWidth:2,margin:5,borderRadius:5,
      width:'90%',paddingHorizontal:10,
      display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'
    }
  });

export default App;
