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
  border: 1px solid ${({theme}) => theme.grey};
  width: 100%;
  height: 40px;
  padding: 0 8px;
  border-radius: ${({theme}) => theme.borderRadius};
  &::placeholder {
    color: ${({theme}) => theme.grey};
  }
`

export const InputWithDelete = () => {
  return (
    <StyledLabel htmlFor="">
      <Input type='text' />
    </StyledLabel>
  )
}

const StyledLabel = styled.label`
  position: relative;

  &:before {
    content: '';
    position: absolute;
    left: 10px;
    top: 0;
    bottom: 0;
    width: 20px;
    background: center / contain no-repeat url('https://www.shareicon.net/data/128x128/2016/03/06/323097_delete_16x16.png');
  }
`

export const Dropdown = () => {
  return (
    <form action="">
      <select style={{padding:'.8em 0'}} name="" id="">
        <option value="">test1</option>
        <option value="">test2</option>
      </select>
    </form>
  )
}