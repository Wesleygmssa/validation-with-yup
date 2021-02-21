import React, { useCallback, useRef } from 'react';
import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import Input from '../../components/Input';
import Button from '../../components/Button';
import * as Yup from 'yup';

interface SignUpFormData {
    name: string;
    email: string;
    password: string;
}

const SingUp: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    console.log(formRef.current);
    const handleSubmit = useCallback(async (data: SignUpFormData) => {
        try {

            //validação
            const schema = Yup.object().shape({
                name: Yup.string().required('Nome obrigatório'),
                email: Yup.string()
                    .required('E-mail obrigatório')
                    .email('E-mail obrigatório'),
                password: Yup.string()
                    .min(6, 'No minimo 6 digitos')
            });

            await schema.validate(data, {
                abortEarly: false,
            });

        } catch (err) {
            //inserido erros dentro do input
            formRef.current?.setErrors({
                name: 'Nome obrigatrio',
                email: 'Digite um email valdo'
            });
        }
    }, [])

    return (
        <>

            <Form ref={formRef} onSubmit={handleSubmit}>
                <h1>Faça seu cadastro</h1>

                <Input
                    name="name"
                    icon={FiUser}
                    placeholder="Nome"
                />

                <Input
                    name="email"
                    icon={FiMail}
                    placeholder="E-mail"
                />

                <Input
                    name="password"
                    icon={FiLock}
                    type="password"
                    placeholder="Senha"
                />

                <Button type="submit"> Cadastrar</Button>

            </Form>





        </>
    )
}

export default SingUp; 