import React from 'react';
import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { DelIcon } from '../../icons';

interface KeyBoardProps {
  onClick: (label: string) => void;
  onDelete: () => void;
}

interface ButtonConfig {
  label?: string;
  text?: string;
  status?: 'space' | 'delete';
}

const menuA: ButtonConfig[] = [
  { label: '1', text: '' },
  { label: '2', text: 'A B C' },
  { label: '3', text: 'D E F' },
];

const menuB: ButtonConfig[] = [
  { label: '4', text: 'G H I' },
  { label: '5', text: 'J K L' },
  { label: '6', text: 'M N O' },
];

const menuC: ButtonConfig[] = [
  { label: '7', text: 'P Q R S' },
  { label: '8', text: 'T U V' },
  { label: '9', text: 'W X Y Z' },
];

const menuD: ButtonConfig[] = [
  { status: 'space' },
  { label: '0', text: '' },
  { status: 'delete' },
];

const PinKeyBoard: React.FC<KeyBoardProps> = ({ onClick, onDelete }) => {
  const getBtn = (list: ButtonConfig[] = []) => {
    return list.map((it, i) => {
      const { status, label } = it;
      if (status === 'space') return <SpaceBtn key={i} />;
      if (status === 'delete') {
        return (
          <DelBtn key={i} onClick={onDelete}>
            <DelIcon />
          </DelBtn>
        );
      }

      const click = () => onClick(label!);
      return (
        <Btn key={i} onClick={click}>
          {label}
        </Btn>
      );
    });
  };

  return (
    <Content>
      <LineBtn>{getBtn(menuA)}</LineBtn>
      <LineBtn>{getBtn(menuB)}</LineBtn>
      <LineBtn>{getBtn(menuC)}</LineBtn>
      <LineBtn>{getBtn(menuD)}</LineBtn>
    </Content>
  );
};

const Content = styled(Box)`
  width: 100%;
`;

const LineBtn = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 40px;
  padding: 10px 0px;
`;

const Btn = styled(Box)`
  width: 68px;
  height: 68px;
  font-weight: 300;
  font-size: 32px;
  line-height: 40px;
  color: #07236d;
  border: 0.9px solid #07236d;
  border-radius: 50%;
  text-align: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SpaceBtn = styled(Btn)`
  border: 0px solid #07236d;
`;

const DelBtn = styled(Btn)`
  background-color: #07236d;
  box-shadow: none;
  font-size: 20px;
  line-height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default PinKeyBoard;
