import React, { useEffect, useState } from 'react';
import { StyledInput } from './styles';

interface TextInputProps {
  initialValue?: string;
  onValueChanged: (newVal: string) => void;
}
const TextInput: React.FC<TextInputProps> = ({
  onValueChanged,
  initialValue,
}) => {
  const onChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    onValueChanged(e.target.value);
  };

  return (
    <div>
      <StyledInput type="text" onChange={onChanged} />
    </div>
  );
};

export default TextInput;
