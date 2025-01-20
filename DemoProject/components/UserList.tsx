import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {UserListController} from '../controller/UserListController';

const UserList = () => {
  const {flattenedUserList} = UserListController();

  return (
    <View>
      <Text style={{fontSize: 24}}>UserList</Text>
      <View style={{flexDirection: 'row', padding: 20}}>
        <Text style={{flex: 0.5, fontSize: 18, fontWeight: '500'}}>Id</Text>
        <Text style={{flex: 1.5, fontSize: 18, fontWeight: '500'}}>Name</Text>
        <Text style={{flex: 0.8, fontSize: 18, fontWeight: '500'}}>Age</Text>
        <Text style={{flex: 2, fontSize: 18, fontWeight: '500'}}>Email</Text>
      </View>
      <ScrollView>
        {flattenedUserList.length > 0 ? (
          flattenedUserList.map((user: any, index: React.Key) => (
            <View key={index} style={{flexDirection: 'row', padding: 20}}>
              <Text style={{flex: 0.5, fontSize: 18}}>{user.id}</Text>
              <Text style={{flex: 1.5, fontSize: 18}}>{user.name}</Text>
              <Text style={{flex: 0.8, fontSize: 18}}>{user.age}</Text>
              <Text style={{flex: 2, fontSize: 18}}>{user.email}</Text>
            </View>
          ))
        ) : (
          <Text>Loading users...</Text>
        )}
      </ScrollView>
    </View>
  );
};

export default UserList;
