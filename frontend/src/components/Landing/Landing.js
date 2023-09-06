import React, { useState, useMemo} from 'react';
import styled from 'styled-components'
import bg from '../../img/bg.png'
import {  MainLayout } from '../../styles/Layout';
import Orb from "../Orb/Orb";
import Navigation from '../Navigation/Navigation';
import Dashboard from '../Dashboard/Dashboard';
import Incomes from '../Incomes/Incomes';
import Expenses from '../Expenses/Expenses';



function Landing() {
  const [active,setActive]= useState(1);

  const displayData = () => {
    switch(active){
      case 1:
        return <Dashboard />
      case 2:
        return <Dashboard />
      case 3:
        return <Incomes />
      case 4: 
        return <Expenses />
      default: 
        return <Dashboard />
    }
  }

const orbMemo =useState(() => {
  return <Orb/>
},[])

  return (
   <LandingStyled bg={bg} className='App'>
      {orbMemo}
      <MainLayout>
        <Navigation active={active} setActive={setActive}/>
        <main>
          {displayData()}
        </main>
      </MainLayout>
   </LandingStyled>
  );
}

const LandingStyled= styled.div`
height: 100vh;
background-image: url(${props => props.bg});
position: relative;
main{
  flex: 1;
  background: rgba(252, 246, 249, 0.78);
  border: 3px solid #FFFFFF;
  backdrop-filter: blur(4.5px);
  border-radius: 32px;
  overflow-x: hidden;
  &::-webkit-scrollbar{
    width: 0;
  }
}
`;

export default Landing;