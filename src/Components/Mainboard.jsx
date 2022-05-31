import React from 'react'
import styled from 'styled-components';
import Pin from './Pin'

export default function Mainboard() {
  return (
      <Wrapper>
        <Container>
          <Pin />
        </Container>
      </Wrapper>
    )
}

const Wrapper = styled.div`
  background: white;
  display: flex;
  justify-content: center ;
  height: 100%;
  // width: 100%;
  margin-top: 15px;
  
  justify-content: center;
`

const Container = styled.div`
  display: flex;
  width: 80%;
  background: white;
`