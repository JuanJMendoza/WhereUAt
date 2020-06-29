import React from 'react';
import {View, StyleSheet} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import {DrawerContentStyles} from '../../../public/stylesheets/allScreens';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export function DrawerContent(props) {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        {/* Main Content in Drawer Menu */}
        <View style={DrawerContentStyles.drawerContent}>
          <View style={DrawerContentStyles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Avatar.Image
                source={{
                  uri:
                    'https://media-exp1.licdn.com/dms/image/C4E03AQHO7DIkTgnHqQ/profile-displayphoto-shrink_200_200/0?e=1599091200&v=beta&t=I9BVuli9xbQA_gKBh2XuObAEkWeYrYKWaSM6OvSKiZc',
                }}
                size={50}
              />
              <View style={{marginLeft: 15, flexDirection: 'column'}}>
                <Title style={DrawerContentStyles.title}>Juan J. Mendoza</Title>
                <Caption style={DrawerContentStyles.caption}>
                  @TheJuanJMendoza
                </Caption>
              </View>
            </View>

            <View style={DrawerContentStyles.row}>
              <View style={DrawerContentStyles.section}>
                <Paragraph
                  style={[
                    DrawerContentStyles.paragraph,
                    DrawerContentStyles.caption,
                  ]}>
                  96.3k
                </Paragraph>
                <Caption style={DrawerContentStyles.caption}>Followers</Caption>
              </View>
              <View style={DrawerContentStyles.section}>
                <Paragraph
                  style={[
                    DrawerContentStyles.paragraph,
                    DrawerContentStyles.caption,
                  ]}>
                  3
                </Paragraph>
                <Caption style={DrawerContentStyles.caption}>Following</Caption>
              </View>
            </View>
          </View>

          <Drawer.Section style={DrawerContentStyles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="home-outline" color={color} size={size} />
              )}
              label="Home"
              onPress={() => {
                props.navigation.navigate('HomeFeed');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="account-outline" color={color} size={size} />
              )}
              label="Profile"
              onPress={() => {
                props.navigation.navigate('Profile');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="settings-outline" color={color} size={size} />
              )}
              label="Settings"
              onPress={() => {}}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={DrawerContentStyles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => {}}
        />
      </Drawer.Section>
    </View>
  );
}
