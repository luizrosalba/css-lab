import React from 'react'

import Box from '../Box/Box'
import { FlexDirection , FlexDirectionCSS } from './FlexDirection'

export default function Flex() {
  return (
    <>
      <div>The flex CSS shorthand property sets how a flex item will grow or shrink to fit the space available in its flex container.</div>
      <h2>Ordering and Orientation</h2> 
      <Box 
        title='Row'
      >
        <>
          <div>{FlexDirection}</div>
          <div>{FlexDirectionCSS}</div>
        </>
      </Box>

      {/* <div className='parent-box'>
          <div>flex-direction</div>  
          <div>flex-wrap</div>  
          <div>flex-flow</div>  
          <div>order</div>  
        </div>
        <div className='parent-box'>
          <div>flex-direction</div>  
          <div>flex-wrap</div>  
          <div>flex-flow</div>  
          <div>order</div>  
        </div> */}
    </>

  )
}
