import React from 'react';
import { Tab } from './styles';

interface LinkTabProps {
  name: string;
  directTo: string;
  className?: string;
}

const LinkTab: React.FC<LinkTabProps> = ({ directTo, name, className }) => {
  return (
    <Tab
      className={className}
      onClick={() => console.log('Direct to', directTo)}
    >
      <p style={{ color: 'white' }}>{name}</p>
    </Tab>
  );
};

export default LinkTab;
