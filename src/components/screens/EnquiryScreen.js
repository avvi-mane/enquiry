import React, {useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  RefreshControl,
  StyleSheet,
  ActivityIndicator,
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

const EnquiryScreen = (props) => {
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

  const handleOnPress = (enqId) => () => {
    dispatch({type: GET_BY_ID, enqId});
    navigation.navigate(ENQUIRY_DETAILS_SCREEN);
  };

  return (
    <ScrollView
      refreshControl={<RefreshControl onRefresh={props.getEnquires} />}>
      {errors && errors.length ? (
        <View style={styles.loaderWarpper}>
          {errors.map(({message}, i) => (
            <Text style={styles.error} key={i}>
              {message}
            </Text>
          ))}
        </View>
      ) : (
        dataList?.map(({enqId, ...item}) => (
          <ListItem
            key={enqId}
            data={{enqId, ...item}}
            onPress={handleOnPress(enqId)}
          />
        ))
      )}
    </ScrollView>
  );
};

const mapStateToProps = (state) => {
  return {
    dataList: state?.enquiryReducer?.dataList,
    isLoading: state?.enquiryReducer?.isLoading,
    errors: state?.enquiryReducer?.errors,
  };
};

const mapDispatchToProps = {
  getEnquires,
};
export default connect(mapStateToProps, mapDispatchToProps)(EnquiryScreen);
