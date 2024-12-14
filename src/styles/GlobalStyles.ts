// import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }
    body{
        font-family: 'Poppins', sans-serif;
        
    }
    a{
        text-decoration: none;
        color: inherit;
    }
    ul,ol{
        list-style: none;
    }
`