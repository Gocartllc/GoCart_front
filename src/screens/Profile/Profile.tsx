import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { Avatar } from '@rneui/themed';
import { styles } from './Profile.styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Profile = () => {
  return (
  <View style={styles.root}>

    <View style={[styles.header]}>
      <Avatar
        source={{
          uri:
            'https://images.unsplash.com/photo-1559526323-cb2f2fe2591b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
        }}
        size={110}
        rounded
        containerStyle={{
          borderColor: '#0B99C1',
          borderStyle: 'solid',
          borderWidth: 2,
          
        }}
      >
        <Avatar.Accessory size={23} 
        style={{ backgroundColor: '#0B99C1' }}
        />
        </Avatar>
      <Text style={styles.text}>
        John Brown
      </Text>
      <Text style={styles.rating}>
      <MaterialCommunityIcons name={'star'} size={16} color={'white'}/>
        5.0
      </Text>
    </View>
    <View style={[styles.userInfo]}>
      <TouchableOpacity style={[styles.section, styles.sectionBackground]}>
        <MaterialCommunityIcons name={'help-circle'} size={32} color={'#0B99C1'} />
        <Text style={styles.space}>Help</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.section, styles.sectionBackground]}>
        <MaterialCommunityIcons name={'cog'} size={32} color={'#0B99C1'} />
        <Text style={styles.space}>Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.section, styles.sectionBackground]}>
        <MaterialCommunityIcons name={'wrench'} size={32} color={'#0B99C1'} />
        <Text style={styles.space}>Services</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.bar} />

<View style={styles.list}>
  <TouchableOpacity style={styles.listItem}>
    <MaterialCommunityIcons name={'information'} size={25} color={'#0B99C1'} />
    <Text style={styles.listItemText}>Legal</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.listItem}>
    <MaterialCommunityIcons name={'tag-multiple'} size={25} color={'#0B99C1'} />
    <Text style={styles.listItemText}>Promotional Deals</Text>
  </TouchableOpacity>
</View>
    <View style={styles.buttons}> 
      <View style={styles.separator} />
      <TouchableOpacity onPress={() => console.log("logout")}> 
        <View style={styles.account}> 
          <Text style={{color:'#E2E2E2'}}>Logout</Text> 
        </View> 
      </TouchableOpacity> 
    </View>
  </View>
  );
};

    

export default Profile;
