import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { componentWithName, or, htmlElement } from '@tds/util-prop-types'
import { borders, forms } from '@tds/shared-styles'
import { medium, boldFont } from '@tds/shared-typography'
import { colorPrimary, colorSecondary, colorWhite, colorText } from '@tds/core-colours'
import { safeRest } from '@tds/util-helpers'

import { warn } from '../../shared/utils/warn'

const preventDisabling = ({ disabled, ...props }) => {
  if (disabled) {
    warn('Button', 'Buttons are not able to be disabled.')
  }

  return props
}

export const StyledButton = styled.button(
  borders.none,
  borders.rounded,
  medium,
  boldFont,
  forms.font,
  forms.baseButton,
  ({ variant }) => {
    let backgroundColor
    let color
    const hover = {
      boxShadow: '0 0 0 1px',
    }

    if (variant === 'primary') {
      backgroundColor = colorPrimary
      color = colorWhite
      hover.backgroundColor = colorWhite
      hover.color = colorPrimary
    } else if (variant === 'secondary') {
      backgroundColor = colorSecondary
      color = colorWhite
      hover.backgroundColor = colorWhite
      hover.color = colorSecondary
    } else {
      backgroundColor = colorWhite
      color = colorText
      hover.backgroundColor = 'transparent'
      hover.color = colorWhite
    }

    return {
      backgroundColor,
      color,
      '&:hover': hover,
    }
  }
)

export const ButtonTextWrapper = styled.span({
  width: '100%',
})

/**
 * @version ./package.json
 */
const Button = forwardRef(({ type, variant, children, ...rest }, ref) => {
  const restNoDisabled = preventDisabling(rest)

  return (
    <StyledButton {...safeRest(restNoDisabled)} variant={variant} type={type} ref={ref}>
      <ButtonTextWrapper>{children}</ButtonTextWrapper>
    </StyledButton>
  )
})

Button.displayName = 'Button'

Button.propTypes = {
  /**
   * The HTML button type.
   */
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  /**
   * The style.
   */
  variant: PropTypes.oneOf(['primary', 'secondary', 'inverted']),
  /**
   * The label. It can include the `A11yContent` component, strings, or strings wrapped in a `<span>`.
   */
  children: or([PropTypes.string, componentWithName('A11yContent'), htmlElement('span')])
    .isRequired,
}
Button.defaultProps = {
  type: 'button',
  variant: 'primary',
}

export default Button
