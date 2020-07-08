// @flow

import React, {useEffect} from 'react';
import {NavigationScreenProp, NavigationState} from '@react-navigation/native';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {connect, useDispatch} from 'react-redux';
import {getEnquires} from '../../store/actions/enquiry';
import {GET_BY_ID} from '../../store/actions/actionTypes';
import {ENQUIRY_DETAILS_SCREEN} from '../../config/constants';
import ListItem from '../ListItem';

const styles = StyleSheet.create({
  loaderWarpper: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    color: 'red',
    fontSize: 18,
  },
});

type Item = {
  enqId: number,
  name: string,
  postedOn: string,
  categoryName: string,
  location: string,
  classLocPref: string,
  phoneNumber: string,
};

type FlowListItem = {
  item: Item,
};

type ErrorItem = {
  message: string,
};

type InitialState = {
  dataList: Array<Item>,
  isLoading: boolean,
  errors: Array<ErrorItem>,
};

type ReducerState = {
  enquiryReducer: InitialState,
};

type Props = {
  navigation: NavigationScreenProp<NavigationState>,
  getEnquires: Function,
  dataList: Array<Item>,
  isLoading: boolean,
  errors: Array<ErrorItem>,
};

type DispatchItems = {
  getEnquires: Function,
};

const EnquiryScreen: (Props) => React$Node = (props) => {
  const dispatch = useDispatch();
  const {dataList, isLoading, navigation, errors} = props;
  useEffect(() => {
    props.getEnquires();
  }, []);
  if (isLoading) {
    return (
      <View style={styles.loaderWarpper}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  const handleOnPress = (enqId: number): Function => (): void => {
    dispatch({type: GET_BY_ID, enqId});
    navigation.navigate(ENQUIRY_DETAILS_SCREEN);
  };

  return (
    <SafeAreaView>
      {errors && errors.length ? (
        <View style={styles.loaderWarpper}>
          {errors.map(({message}, i) => (
            <Text style={styles.error} key={i}>
              {message}
            </Text>
          ))}
        </View>
      ) : (
        <FlatList
          keyExtractor={(data) => data.enqId.toString()}
          renderItem={({item}: FlowListItem): React$Node => {
            const {enqId} = item;
            return <ListItem onPress={handleOnPress(enqId)} data={item} />;
          }}
          data={dataList}
        />
      )}
    </SafeAreaView>
  );
};

const mapStateToProps = (state: ReducerState): InitialState => {
  return {
    dataList: state?.enquiryReducer?.dataList,
    isLoading: state?.enquiryReducer?.isLoading,
    errors: state?.enquiryReducer?.errors,
  };
};

const mapDispatchToProps: DispatchItems = {
  getEnquires,
};
export default connect(mapStateToProps, mapDispatchToProps)(EnquiryScreen);
