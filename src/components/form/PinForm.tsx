import React from 'react';
import { Box, styled } from '@mui/material';
import { CircleIcon } from '../../icons';
import { PinKeyboard } from '../keyboard';
import { P2 } from '../font';
import { Colors } from '../../colors';

export type IPinForm = {
  onKeyboard: (val: string) => void;
  onDelete: () => void;
  codeList: string[];
  error?: string;
};

const PinForm: React.FC<IPinForm> = (props) => {
  const { onKeyboard, onDelete, codeList, error } = props;

  const codes = codeList.map((it, i) => {
    const isActive = it !== '';
    const c = isActive ? <CircleIcon /> : '';
    return <Code key={i}>{c}</Code>;
  });

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }}
    >
      <CodeSection>{codes}</CodeSection>
      {error && (
        <StyledTextError>
          <P2 text={error} color={Colors.error} />
        </StyledTextError>
      )}
      <PinKeyboard onClick={onKeyboard} onDelete={onDelete} />
    </Box>
  );
};

const CodeSection = styled('div')`
  width: 100%;
  display: flex;
  justify-content: center;
  column-gap: 8px;
  padding: 20px 0;
`;

const Code = styled('div')`
  width: 48px;
  height: 48px;
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${Colors.gray2};
  background-color: ${Colors.offWhite};
  border: 1px solid ${Colors.gray2};
  border-radius: 8px;

  &.active {
    font-weight: 600;
    color: ${Colors.royalBlue};
    border: 1px solid ${Colors.royalBlue};
  }
`;

export const StyledTextError = styled('div')`
  padding: 12px 0;
  text-align: center;
`;

export default PinForm;
