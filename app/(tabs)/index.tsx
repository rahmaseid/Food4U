import { StyleSheet, TextInput } from 'react-native';
import React from 'react';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { CLIENT_ID } from '../_layout';
import { CLIENT_SECRET } from '../_layout';
const Buffer = require("buffer").Buffer;

const GetProductFromKrogerAPI = () => {
  return fetch('https://api-ce.kroger.com/v1/products', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Authorization': 'Bearer ' + new Buffer(CLIENT_ID + ':' + CLIENT_SECRET).toString("base64"),
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "DELETE, POST, PUT, GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With"
    }
  })
    .then(response => response.json())
    .then(json => {
      return json;
    })
    .catch(error => {
      console.error(error);
    });
};

const GetTokenFromKrogerAPI = () => {
  return fetch('https://api.kroger.com/v1/connect/oauth2/token', {
    method: 'POST',
    headers: new Headers({
      'Accept': '*/*',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic Zm9vZDR1LTI0MzI2MTI0MzAzNDI0NjI3ODdhNDI2MjRlNjY0ZDcxNzE2YzQ1NTE0NzU0MmU3YTQ1NzI0NDVhNjU2NTRmNDI0MTZhNTYzMzcyNjM2ZDUxNmE1NzRhNmI1ODQ4Njg1ODM3NTgKMzk1MzU5NTczNTcxMzY2NTU5NzE2OTcyNzc3NzM1MDMzNDE1MTM2OkxaLW5FTTkwZmQtV09zRktQN0p1YkFvODhHbmhZeGYza25wSmt1TDM=', 
      'Access-Control-Allow-Origin': "*",
      'Access-Control-Allow-Methods': "GET, POST, OPTIONS, PUT, PATCH, DELETE",
      'Access-Control-Allow-Headers': "Content-Type, Authorization, X-Requested-With",
      'Access-Control-Allow-Credentials': 'True',
    }),
    body: JSON.stringify({
      "grant_type": 'client_credentials',
    }),
  })
    .then(response => response.json())
    .then(json => {
      return json;
    })
    .catch(error => {
      console.error(error);
    });
};

export default function TabOneScreen() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const data = GetTokenFromKrogerAPI();
  console.log(data);

  console.log("BASE64: ", new Buffer((CLIENT_ID + ':' + CLIENT_SECRET)).toString("base64")); 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Search..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    width: '80%',
  },
});
