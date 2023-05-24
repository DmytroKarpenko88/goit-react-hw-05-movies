import React from 'react';
import { Back } from './Buttons.styled';
import { ReactComponent as IconBack } from '../../svg/back.svg';

const BtnBack = ({ backLinkLocationRef }) => {
  return (
    <div>
      <Back to={backLinkLocationRef.current}>
        <IconBack />
        <span>Back</span>
      </Back>
    </div>
  );
};

export default BtnBack;
