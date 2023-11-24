import { useState } from "react"

//Components
import Button from "./components/Button"
import Input from "./components/Input"

//Style
import { Container, Content, Row} from "./styles"

const App = () => {
  //criar um estado
  const [currentNumber, setCurrentNumber] = useState('0')
  const [firstNumber , setFirstNumber] = useState('0')
  const [operation , setOperation] = useState()

//funções
  const handleAddNumber = (number) => {
    setCurrentNumber(previous => `${previous === '0' ? '' : previous }${number}` )
  }

  //limpar
  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  }

  //Operações
  const handleSumNumbers = () => {//Soma
    if (firstNumber === '0'){
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('+')

    } else{
      const sum = Number(firstNumber) + Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleMinusNumbers = () => {//Subtração
    if (firstNumber === '0'){
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('-')

    } else {
      const minus = Number(firstNumber) - Number(currentNumber)
      setCurrentNumber(String(minus))
      setOperation('')
    }
  }

  const handleMultiplyNumbers = () => {//Multiplicação
    if (firstNumber === '0'){
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('*')

    } else {
      const multiply = Number(firstNumber) * Number(currentNumber)
      setCurrentNumber(String(multiply))
      setOperation('')
    }
  }

  const handleDivisionNumbers = () => {//Multiplicação
    if (firstNumber === '0'){
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('/')

    } else {
      const division = Number(firstNumber) / Number(currentNumber)
      setCurrentNumber(String(division))
      setOperation('')
    }
  }

  //Finalizar = Equals
  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
      switch(operation){
        case '+':
          handleSumNumbers()
          break
        case '-':
          handleMinusNumbers()
          break
        case '*':
          handleMultiplyNumbers()
          break
        case '/':
          handleDivisionNumbers()
          break
        default:
          break
      }
    }
  }


  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label={"CE"} onClick={handleOnClear} /*não tem parametro pode passar o nome direto*/ />
          <Button label={"C"} onClick={handleOnClear} /*não tem parametro pode passar o nome direto*/ />
          <Button label={"X"} onClick={handleMultiplyNumbers}/>
          <Button label={"/"} onClick={handleDivisionNumbers}/>

        </Row>
        <Row>
          <Button label={"7"} onClick={() => handleAddNumber('7')}/>
          <Button label={"8"} onClick={() => handleAddNumber('8')}/>
          <Button label={"9"} onClick={() => handleAddNumber('9')}/>
          <Button label={"-"} onClick={handleMinusNumbers}/>
        </Row>
        <Row>
          <Button label={"4"} onClick={() => handleAddNumber('4')}/>
          <Button label={"5"} onClick={() => handleAddNumber('5')}/>
          <Button label={"6"} onClick={() => handleAddNumber('6')}/>
          <Button label={"+"} onClick={handleSumNumbers}/>
        </Row>
        <Row>
          <Button label={"1"} onClick={() => handleAddNumber('1')}/>
          <Button label={"2"} onClick={() => handleAddNumber('2')}/>
          <Button label={"3"} onClick={() => handleAddNumber('3')}/>
          <Button label={"."} onClick={() => handleAddNumber('.')}/>

        </Row>
        <Row>
          <Button label={"0"} onClick={() => handleAddNumber('0')}/>
          <Button label={"="} onClick={handleEquals}/>
        </Row>
      </Content>
    </Container>
  )
}

export default App
