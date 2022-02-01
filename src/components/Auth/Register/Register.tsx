import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {Formik, Form, Field, ErrorMessage} from 'formik';
import {AuthWrapper, Button, Error, Headline, Input, Label, FormFieldWrapper, FormWrapper} from "../styles";
import * as Yup from 'yup';
import Layout from "../../Layout/Layout";
import axios from "axios";

interface IFormValues {
    name: string;
    email: string;
    password: string;
}

const RegisterSchema = Yup.object().shape({
    name: Yup.string()
        .required(`Ім'я є обов'язковим полем!`)
        .min(3, `Ім'я занадто коротке, треба мінімум 3 символи!`)
        .matches(/[a-zA-Z]/, `Ім'я може включати тільки латинські літери!`),
    email: Yup.string()
        .email('Неправильна ел. пошта!')
        .required(`Ел. пошта є обов'язковим полем!`),
    password: Yup.string()
        .required('Неправильний пароль!')
        .min(8, 'Пароль занадто короткий - мінімум 8 символів!')
        .matches(/[A-Za-z0-9]/, 'Пароль може включати тільки латинські літери!')
});

const Register = () => {
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const onSubmitHandler = async (values: IFormValues) => {
        try {
            await axios.post(`http://localhost:5000/registration`, { ...values })
                .then(res => {
                    if (res.data.errors) {
                        setError(res.data.errors.message);
                    } else {
                        navigate("/", { replace: false })
                    }
                });
        } catch (e: any) {
            console.error(e);
        }
    };

    return (
        <Layout>
            <AuthWrapper>
                <Headline>Реєстрація</Headline>
                <Formik
                    initialValues={{name: '', email: '', password: ''}}
                    validationSchema={RegisterSchema}
                    onSubmit={(values) => onSubmitHandler(values)}
                >
                    {({errors, touched}) => (
                        <FormWrapper>
                            {error && <Error>{error}</Error>}
                            <FormFieldWrapper>
                                <Label htmlFor="name">Логін</Label>
                                <Input type="text" name="name" placeholder="Введіть свій логін"/>
                                {errors.name && touched.name ? (
                                    <Error>{errors.name}</Error>
                                ) : null}
                            </FormFieldWrapper>
                            <FormFieldWrapper>
                                <Label htmlFor="email">Ел. пошта</Label>
                                <Input type="email" name="email" placeholder="Введіть свій логін"/>
                                {errors.email && touched.email ? (
                                    <Error>{errors.email}</Error>
                                ) : null}
                            </FormFieldWrapper>
                            <FormFieldWrapper>
                                <Label htmlFor="password">Пароль</Label>
                                <Input type="password" name="password" placeholder="Введіть свій логін"/>
                                {errors.password && touched.password ? (
                                    <Error>{errors.password}</Error>
                                ) : null}
                            </FormFieldWrapper>
                            <Button type="submit">Сnpm startтворити акаунт</Button>
                        </FormWrapper>
                    )}
                </Formik>
            </AuthWrapper>
        </Layout>
    );
};

export default Register;
