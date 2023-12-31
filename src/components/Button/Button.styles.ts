import styled from 'styled-components/native';

import {IStyledButtonProps} from './Button.types';
import {
  BUTTON_VARAINT_CONFIG,
  DEFAULT_BUTTON_VARIANT,
  DEFAULT_COLOR_VARIANT,
} from './Button.config';

export const StyledButton = styled.TouchableOpacity<IStyledButtonProps>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 16px;

  background: ${({
    $variant = DEFAULT_BUTTON_VARIANT,
    $colorVariant = DEFAULT_COLOR_VARIANT,
  }) => BUTTON_VARAINT_CONFIG[$colorVariant][$variant].bgColor};
  border: 1px solid
    ${({
      $variant = DEFAULT_BUTTON_VARIANT,
      $colorVariant = DEFAULT_COLOR_VARIANT,
    }) => BUTTON_VARAINT_CONFIG[$colorVariant][$variant].borderColor};

  border-radius: 8px;
`;

export const StyledText = styled.Text<IStyledButtonProps>`
  font-size: 12px;
  font-weight: 500;
  color: ${({
    $variant = DEFAULT_BUTTON_VARIANT,
    $colorVariant = DEFAULT_COLOR_VARIANT,
  }) => BUTTON_VARAINT_CONFIG[$colorVariant][$variant].color};
`;
