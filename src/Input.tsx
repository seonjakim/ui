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
      <Dropdown />
  )
}

const StyledLabel = styled.input`
  position: relative;

  .clearable{
  background: #fff url(http://i.stack.imgur.com/mJotv.gif) no-repeat right -10px center;
  border: 1px solid #999;
  padding: 3px 18px 3px 4px; /* Use the same right padding (18) in jQ! */
  border-radius: 3px;
  transition: background 0.4s;
}
.clearable.x  { background-position: right 5px center; } /* (jQ) Show icon */
.clearable.onX{ cursor: pointer; } /* (jQ) hover cursor style */
.clearable::-ms-clear {display: none; width:0; height:0;} 
  /* &:before {
    content: '';
    position: absolute;
    left: 10px;
    top: 0;
    bottom: 0;
    width: 20px;
    background: center / contain no-repeat url('https://www.shareicon.net/data/128x128/2016/03/06/323097_delete_16x16.png');
    background-color: red; */
  }
`

export const Dropdown = () => {
  return (
    <form action="">
      <select style={{padding:'.8em 0', width:'100%'}} name="" id="">
        <option value="">test1</option>
        <option value="">test2</option>
      </select>
    </form>
  )
}