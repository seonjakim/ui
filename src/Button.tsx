import styled from 'styled-components'
import {lightTheme} from '../src/style/GlobalStyle'
const ButtonStyleReset = styled.button`
  border: 0;
  padding: .8em;
`
const borderRadius = {
  "round": '50px',
  "full": '0'
}

ButtonStyleReset.defaultProps = {
  theme: lightTheme
}

export const Button = styled(ButtonStyleReset)`
  background-color: ${({theme}) => theme.main};
  color: ${({theme}) => theme.text};
  width: 100%;
  font-weight: 700;
  box-shadow: ${({radius}) => radius !== 'full' && 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'};
  border-radius: ${({radius}) => radius in borderRadius ? borderRadius[radius]: '4px'};
`