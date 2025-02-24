import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { HomeIcon } from './Icons';

export const Layout = () => {
    return(
    <AppContainer>
    <header>
        <HeaderHomeIcon>
            <Link to='/'><HomeIcon width={40}/></Link>
        </HeaderHomeIcon>

        <Title> mSt Image Compressor </Title>

    </header>
    
    <section>
        <nav>

            <ul>
    
            </ul>
        </nav>

        <main>
            <Outlet></Outlet>
        </main>
      
    </section>


    <footer>
        <Text>mSt Image Compressor</Text>
        <Link to='/'>Home</Link>

    </footer>
    </AppContainer>
    )

}

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const HeaderHomeIcon = styled.div`
    justify-self: start;
    padding-top: 7px;
`;

const Title = styled.div`
    justify-self: center;
    margin-left: -40px;
`;

const Text = styled.div`
    padding-bottom: 10px;
`