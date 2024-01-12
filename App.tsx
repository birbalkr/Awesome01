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
import Password from './Password';


function App(){
  return (
      <SafeAreaView>
        <ScrollView>
          <View>
            <FlatCard/>
            <Elevatedcards/>
            <FancyCard/>
            <ContactList/>
            <Password/>
            <ActionCard/>
          </View>
        </ScrollView>
      </SafeAreaView>
  );
}
export default App;
