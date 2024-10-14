import React from 'react';
import { Button, styled } from '@mui/material';

{/* Create a styled button with custom styles*/}    
const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: 'gray',         
    color: theme.palette.primary.main,            
    '&:hover': {                     
        backgroundColor: 'yellowgreen', 
        color: 'red',                  
    },
}));

{/* Functional component that renders the styled button and a normal button*/}
const StyledCustomTheme = () => {
    return (
        <div>
            <hr />
            <StyledButton variant="contained">Container</StyledButton> {/* Custom styled button */}
            <br />  
            <br />  
                        <Button variant="contained">Normal Button</Button> {/* Standard Material-UI button */}
        </div>
    );
};
{/* Export the component for use in other parts of the application*/}
export default StyledCustomTheme;
