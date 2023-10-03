/* 🟢 Context 연습 */

import Child1 from './Child1'
import Child2 from './Child2'
import {CommandContext} from './context/CommandContext'

const Example = () => {

  return (

    <CommandContext>
      <Child1/>
      <Child2/>
    </CommandContext>

  )
}

export default Example