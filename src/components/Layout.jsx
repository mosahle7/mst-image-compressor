import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import { DarkIcon, HomeIcon, SunIcon } from './Icons';

export const Layout = () => {

    const [light, setLight] = useState(true);

    const handleLight = () => {
        if(light){
        setLight(false);
        console.log("I am dark!");
        document.documentElement.style.setProperty('--background-color', 'var(--background-color-dark)');
        document.documentElement.style.setProperty('--text-color', 'var(--text-color-dark)');
        }
        else{
        setLight(true);
        console.log("I am light!");
        document.documentElement.style.setProperty('--background-color', 'var(--background-color-light)');
        document.documentElement.style.setProperty('--text-color', 'var(--text-color-light)');
    }
    }

    return(
    <AppContainer>
    <header>
        <HeaderHomeIcon>
            <Link to='/'><HomeIcon width={40}/></Link>
        </HeaderHomeIcon>
        

        <Title> mSt Image Compressor </Title>
        {light ?(
        <SunIcon width={40} onClick={handleLight}/>
        ) :
        (!light &&
        <DarkIcon width={40} onClick={handleLight}/>
        )
    }

    </header>
    
    <section>
        <nav>

            <ul>
                Test
    
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
    background-color: var(--background-color); /* Apply the variable */
    color: var(--text-color); /* Apply text color */
    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out; /* Smooth transition */

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