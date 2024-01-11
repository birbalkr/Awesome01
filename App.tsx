import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import FlatCard from './FlatCard';
import Elevatedcards from './Elevatedcards';
import FancyCard from './FancyCard';
import ActionCard from './ActionCard';
import ContactList from './ContactList';


function App(){
  return (
      <SafeAreaView>
        <ScrollView>
          <View>
            <FlatCard/>
            <Elevatedcards/>
            <FancyCard/>
            <ContactList/>
            <ActionCard/>
          </View>
        </ScrollView>
      </SafeAreaView>
  );
}
export default App;
