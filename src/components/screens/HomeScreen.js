import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect, useDispatch} from 'react-redux';
import {getEnquires} from '../../store/actions/enquiry';
import {GET_BY_ID} from '../../store/actions/actionTypes';

const HomeScreen = (props) => {
  const dispatch = useDispatch();
  const {dataList, isLoading, item} = props;
  console.log(item);
  useEffect(() => {
    props.getEnquires();
    setTimeout(() => {}, 3000);
  }, []);
  if (isLoading) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }

  const handleOnPress = (enqId) => () => {
    dispatch({type: GET_BY_ID, enqId});
  };

  return (
    <View>
      {dataList?.map(({enqId}) => (
        <TouchableOpacity key={enqId} onPress={handleOnPress(enqId)}>
          <Text>{enqId}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    dataList: state?.enquiryReducer?.dataList,
    isLoading: state?.enquiryReducer?.isLoading,
    item: state?.enquiryReducer?.item,
  };
};

const mapDispatchToProps = {
  getEnquires,
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
