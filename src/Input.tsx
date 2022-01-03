import styled from 'styled-components'
import {lightTheme} from '../src/style/GlobalStyle'

const InputStyleReset = styled.input`
  &:focus {
    outline: none;
  }
`

InputStyleReset.defaultProps = {
  theme: lightTheme
}

export const Input = styled(InputStyleReset)`
  border: 1px solid #a9a9ac;
  width: 100%;
  height: 40px;
  padding: 0 8px;
  &::placeholder {
    color: #a9a9ac;
  }
`