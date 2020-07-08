// @flow
import React from 'react';
import Svg, {Path} from 'react-native-svg';

type Props = {
  height: number,
  width: number,
};

const PhoneIcon: (Props) => React$Node = ({width, height}) => {
  return (
    <Svg viewBox="0 0 512 512" width={width || 32} height={height || 32}>
      <Path
        stroke="#000"
        fill="#000"
        d="M352 0H160c-22.08.026-39.974 17.92-40 40v432c.026 22.08 17.92 39.974 40 40h192c22.08-.026 39.974-17.92 40-40V40c-.026-22.08-17.92-39.974-40-40zm24 472c0 13.255-10.745 24-24 24H160c-13.255 0-24-10.745-24-24v-48h240v48zm0-64H136V88h240v320zm0-336H136V40c0-13.255 10.745-24 24-24h192c13.255 0 24 10.745 24 24v32z"
      />
      <Path
        stroke="#000"
        fill="#000"
        d="M256 432c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm0 32a8 8 0 110-16 8 8 0 010 16zM288 40h-64a8 8 0 000 16h64a8 8 0 000-16zM352 376h-8a8 8 0 000 16h8a8 8 0 000-16zM320 376h-8a8 8 0 000 16h8a8 8 0 000-16zM288 376h-8a8 8 0 000 16h8a8 8 0 000-16z"
      />
    </Svg>
  );
};

export default PhoneIcon;
