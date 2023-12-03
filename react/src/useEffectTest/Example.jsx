import { useEffect, useState } from 'react'

const Example = () => {

const [num,setNum] = useState(0);

const plus = () =>{
    setNum(prev=>prev+1);
}

useEffect(() => {
    console.log('맨날 출력')

}, )


useEffect(() => {
    console.log(`딱 한번 업로드 되었을 때 `)
}, [])

useEffect(() => {

    console.log(`num 변경 될때만`)

    return  () =>{
        console.log('청소 함수')
    }


},[num] ) 


  return (
    <>
    <h2>{num}</h2>
        <button onClick={plus}>증가</button>
    
    
    
    </>
  
  
    )
}

export default Example