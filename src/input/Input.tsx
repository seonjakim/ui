import styled from 'styled-components'
import {lightTheme} from '../style/GlobalStyle'

const InputStyleReset = styled.input`
  &:focus {
    outline: none;
  }
`

InputStyleReset.defaultProps = {
  theme: lightTheme
}

export const Input = styled(InputStyleReset)`
  border: 1px solid ${({theme}) => theme.grey};
  width: 100%;
  height: 40px;
  padding: 0 8px;
  border-radius: ${({theme}) => theme.borderRadius};
  &::placeholder {
    color: ${({theme}) => theme.grey};
  }
`
