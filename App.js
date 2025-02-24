import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  const [countries, setCountries] = useState([])

  useEffect(() => {

    fetch("https://restcountries.com/v3.1/all")
      .then(response => response.json())
      .then(data => setCountries(data))
  }, [])

  // console.log('COUNTRIES', countries);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ülkeler Listesi</Text>
      <FlatList
        data={countries}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <View style={styles.item}>
              <Text style={styles.countryName}>{item.name.common}</Text>
              <Text style={styles.capital}>{item.capital}</Text>
              <Image source={{ uri: item.flags.png }} style={styles.flag} />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  item: {
    alignItems: "center",
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
  },
  countryName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  capital: {
    fontSize: 16,
    color: "gray",
  },
  flag: {
    width: 100,
    height: 60,
    marginTop: 10,
  },
});