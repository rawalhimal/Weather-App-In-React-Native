import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DisplayWeather from './Components/DisplayWeather'

export default function App() {
const [getlocation,setGetLocation]=useState(null)
const [weather,setWeather]=useState(null)

function loadWeather() 
{
  const apikey = "fc58f84eb8mshf7fca0f3d40ec40p109992jsnca2f7618a7a3"
  const { latitude, longitude } = setGetLocation.getlocation.coords
  const units = "Imperial"
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}&units=${units}`
  // `fetch()` is used to load data
  fetch(url)
  // After a connection is made the data is streamed as JSON
  .then(res => res.json())
  // When that resolves we use `this.setState()` to assign the weather data to state which will also re-render the component.
  .then(json => setWeather({ weather: json }))
  .catch(err => console.log(err.message))
}

 useEffect(() => {
  navigator.geolocation.getCurrentPosition((getlocation)=>
  // Now we're setting the state instead of just logging to console
    // You'll always set state by calling function of initiAL state
    setGetLocation({getlocation}),
    setWeather({getlocation}),
    loadWeather(),
  (err)=>{
    console.log(err.message)
  }
  
  )
});



  return (
    <View style={styles.container}>
     <DisplayWeather data={weather} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
