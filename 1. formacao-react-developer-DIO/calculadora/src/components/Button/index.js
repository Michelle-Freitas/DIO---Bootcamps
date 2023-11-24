import { ButtonContainer } from "./styles"

const Button = ( {label, onClick} ) => { //label = texto, e quando clicar oq fazer
    return (
      <ButtonContainer onClick={onClick}>
        {label}
      </ButtonContainer>
    );
  }

  export default Button;
