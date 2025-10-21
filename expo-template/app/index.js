import React, { useState } from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  Provider as PaperProvider,
  Appbar,
  Card,
  Button,
  Text,
  TextInput,
  Switch,
  Paragraph,
  Divider,
  DefaultTheme,
} from 'react-native-paper';

/*
  React Native Paper demo

  This file provides a compact, well-documented demo of common Paper components:
  - Appbar: top app bar
  - Card: content container with actions
  - Button: primary action
  - TextInput: form field
  - Switch: toggle control
  - Provider: wraps the app and applies theming

  Installation (run in the project folder; Expo project):
    expo install react-native-paper react-native-vector-icons react-native-safe-area-context

*/

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#6200ee', // purple
    accent: '#03dac4', // teal
  },
};

export default function App() {
  const [name, setName] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        {/* Appbar: used as the top navigation bar */}
        <Appbar.Header>
          <Appbar.Content title="Paper Demo" subtitle="expo-template" />
        </Appbar.Header>

        {/* Main content area */}
        <View style={styles.container}>
          {/* Card: a simple surface with content and actions */}
          <Card style={styles.card}>
            <Card.Title title="Welcome" subtitle="React Native Paper" />
            <Card.Content>
              <Paragraph>
                This small demo shows how to use Paper components inside an Expo app.
                Try typing a name, toggling the switch, and pressing the button.
              </Paragraph>
              <Divider style={{ marginVertical: 8 }} />

              {/* TextInput: controlled input field */}
              <TextInput
                label="Your name"
                value={name}
                onChangeText={setName}
                mode="outlined"
                style={styles.input}
                placeholder="Type here"
              />

              {/* Row with Switch and label */}
              <View style={styles.row}>
                <Text>Enable greeting</Text>
                <Switch value={isEnabled} onValueChange={() => setIsEnabled((s) => !s)} />
              </View>
            </Card.Content>

            <Card.Actions>
              <Button
                mode="contained"
                onPress={() => {
                  // Simple action: log a message and show how components interact
                  console.log('Button pressed — name:', name, 'enabled:', isEnabled);
                }}
              >
                Log
              </Button>

              <Button
                onPress={() => {
                  setName('');
                  setIsEnabled(false);
                }}
              >
                Reset
              </Button>
            </Card.Actions>
          </Card>

          {/* A small status text demonstrating conditional rendering */}
          <View style={{ marginTop: 16 }}>
            <Text>
              {isEnabled && name ? `Hello, ${name}!` : 'Enter a name and enable greeting.'}
            </Text>
          </View>

          {/* Keep the status bar for Expo */}
          <StatusBar style={Platform.OS === 'ios' ? 'dark' : 'auto'} />
        </View>
      </PaperProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    padding: 16,
  },
  card: {
    marginTop: 16,
  },
  input: {
    marginTop: 8,
  },
  row: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
