import React from 'react';
import renderer from 'react-test-renderer';
import ListItem from '../../src/components/ListItem';
import {TouchableOpacity} from 'react-native';
import {Avatar} from '../../src/components/Avatar';
import IconButton from '../../src/components/IconButton';
import * as util from '../../src/config/util';

describe('ListItem Component', () => {
  const name = 'Arjun';
  const postedOn = '12/12/2019';
  const phoneNumber = '+919898989898';

  it('should call onListItemPress pressed', () => {
    const onListItemPress = jest.fn();
    const component = renderer.create(
      <ListItem
        data={{name, postedOn, phoneNumber}}
        onPress={onListItemPress}
      />,
    );
    component.root.findByType(TouchableOpacity).props.onPress();
    expect(onListItemPress).toHaveBeenCalledTimes(1);
  });

  it('it must display Avatar', () => {
    const onListItemPress = jest.fn();
    const component = renderer.create(
      <ListItem
        data={{name, postedOn, phoneNumber}}
        onPress={onListItemPress}
      />,
    );
    expect(component.root.findByType(Avatar).props.children).toEqual(name);
  });

  it('it must call open the dialpad', () => {
    const onListItemPress = jest.fn();
    util.callNumber = jest.fn();
    util.callUser = jest.fn().mockReturnValue(() => {
      util.callNumber(util.callUser.mock.calls[0][0]);
    });
    const component = renderer.create(
      <ListItem
        data={{name, postedOn, phoneNumber}}
        onPress={onListItemPress}
      />,
    );
    component.root.findByType(IconButton).props.onPress();
    expect(util.callUser.mock.calls[0][0]).toBe(phoneNumber);
    expect(util.callUser).toHaveBeenCalledTimes(1);
    expect(util.callNumber.mock.calls[0][0]).toBe(phoneNumber);
    expect(util.callNumber).toHaveBeenCalledTimes(1);
  });
});
