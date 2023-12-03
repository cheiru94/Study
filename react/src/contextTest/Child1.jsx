import {useFlugContex} from './context/CommandContext'

const Chilld1 = () => {
  const result = useFlugContex();
  return (
    <p>child1 , <span style={{ color: "red" }}>{result}</span></p>
    
  )
}

export default Chilld1