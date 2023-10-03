import { useFlugContex } from './context/CommandContext'
import React from 'react';

const Child2 = () => {
  const result = useFlugContex();
  return (
    <>
      <p>child2 , <span style={{ color: "blue" }}>마 나도 {result}</span></p>
    </>
  )
}

export default Child2