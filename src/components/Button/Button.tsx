import React, {useMemo} from 'react';
import isArray from 'lodash/isArray';
import isString from 'lodash/isString';

import {StyledButton, StyledText} from './Button.styles';
import {IButtonProps} from './Button.types';
import {DEFAULT_BUTTON_VARIANT, DEFAULT_COLOR_VARIANT} from './Button.config';

const Button: React.FC<IButtonProps> = ({
  children: childrenFromProps,
  variant = DEFAULT_BUTTON_VARIANT,
  colorVariant = DEFAULT_COLOR_VARIANT,
  contentTextStyle,
  ...restProps
}) => {
  const children = useMemo(
    () =>
      isArray(childrenFromProps) ? childrenFromProps : [childrenFromProps],
    [childrenFromProps],
  );

  return (
    <StyledButton
      {...restProps}
      $variant={variant}
      $colorVariant={colorVariant}>
      {children.map((child, i) =>
        isString(child) ? (
          <StyledText
            key={i}
            $variant={variant}
            $colorVariant={colorVariant}
            style={contentTextStyle}>
            {child}
          </StyledText>
        ) : (
          child
        ),
      )}
    </StyledButton>
  );
};

export default Button;
