import React from "react";
import styled, { css } from "styled-components";

interface InterfaceStyles {
    [key: string]: string
}

const StyledFlex = styled.div<InterfaceStyles>`
    display: flex;
    width: 100%;
    justify-content: ${({justifyContent}: InterfaceStyles) => justifyContent || 'flex-start'};
    align-items: ${({alignItems}: InterfaceStyles) => alignItems || 'stretch'};
    margin: ${({margin}: InterfaceStyles) => margin || 0};
    padding: ${({padding}: InterfaceStyles) => padding || 0};
    
`

const Flex = (props: any) => {
    return <StyledFlex {...props}/>
}

export default Flex







