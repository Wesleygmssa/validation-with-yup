import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

//todas propriedades do button
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> //ordem linear

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {

    return (
        <Container
            type="button"
            {...rest} // restante das props
        >
            {children}
        </Container>
    );
}

export default Button;