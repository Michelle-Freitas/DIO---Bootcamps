import { InputContainer } from './styles'

const Input = ( {value} ) => {
    return (
      <InputContainer className="App">
        <input disabled value={value}/>
      </InputContainer>
    );
  }

  export default Input;
