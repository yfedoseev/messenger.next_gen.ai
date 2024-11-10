import { useState } from "react";
import { Button, ScrollView, SectionList, StyleSheet, View } from "react-native";
import { Card, Icon, IconButton, Text, TextInput } from "react-native-paper";
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const styles = StyleSheet.create({
  sectionContainer: {
    borderColor: 'none',
    backgroundColor: 'transparent',
    textShadowColor: 'transparent',    
    shadowColor: 'transparent',
  },
  sectionContainerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    shadowColor: 'transparent',
    shadowRadius: 0,
  },
  sectionContainerContent: {
    display: 'flex',
    flexDirection: 'row',

  },
  sectionItem: {
    marginRight: 12,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  sectionItemTitle: {
    fontSize: 12,
    textAlign: 'center',
  },
  messagePanel: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#e6e6e6',
    width: '100%',
    shadowRadius: 0,
    alignItems: 'center',
  },
  messageInput: {
    flex: 1,
    backgroundColor: '#e6e6e6',
  }
});

export const HomeScreen = () => {
  const [message, setMessage] = useState('');
  const [posts, setPosts] = useState([] as string[]);

  const postMessage = () => {
    setPosts([...posts, message]);
    setMessage('');
  }

  return (
    <ScrollView style={{ flex: 1 }}>
      <Text style={{ fontSize: 48, textAlign: 'left', margin: 12, fontWeight: 'bold' }}>Messenger</Text>
      
      <Card style={styles.sectionContainer}>
        <Card.Title title="Today's Agenda" titleStyle={styles.sectionContainerTitle}/>
        <Card.Content style={styles.sectionContainerContent}>
          <Card style={styles.sectionItem}>
            <Card.Content>
              <EvilIcons name="clock" size={64} color="#e00d00" />
            </Card.Content>
            <Card.Title title="Meetings" titleStyle={styles.sectionItemTitle} />
          </Card>
          <Card style={styles.sectionItem}>
            <Card.Content>
              <EvilIcons name="exclamation" size={64} color="#e00d00" />
            </Card.Content>
            <Card.Title title="Priorities" titleStyle={styles.sectionItemTitle} />
          </Card>
          <Card style={styles.sectionItem}>
            <Card.Content>
              <EvilIcons name="check" size={64} color="#e00d00" />
            </Card.Content>
            <Card.Title title="Approvals" titleStyle={styles.sectionItemTitle} />
          </Card>
        </Card.Content>
      </Card>

      <Card style={styles.sectionContainer}>
        <Card.Title title="Your Personal Assistant" titleStyle={styles.sectionContainerTitle}/>
        <Card.Content style={styles.sectionContainerContent}>
          <View style={styles.messagePanel}>
            <TextInput value={message} style={styles.messageInput} activeUnderlineColor="#e00d00" placeholder="Write a message" onChangeText={setMessage} 
              right={message ? <TextInput.Icon icon={(props) => <EvilIcons size={props.size*1.5} name="arrow-up" color="#e00d00" />} onPress={() => postMessage()} />  : null} 
            />
          </View>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

