import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { AuthWrapper, Button, Error, FormFieldWrapper, FormWrapper, Headline, Label, Input, LabelErrorWrapper } from "../styles";
import * as Yup from 'yup';
import Layout from "../../Layout/Layout";
import axios from "axios";
import { useDispatch } from "react-redux";

interface IFormValues {
    email: string;
    password: string;
}

const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Неправильна ел. пошта')
        .required(`Ел. пошта є обов'язковим полем`),
    password: Yup.string()
        .required('Неправильний пароль')
        .min(8, 'Пароль занадто короткий - мінімум 8 символів')
        .matches(/[A-Za-z0-9]/, 'Пароль може включати тільки латинські літери')
});

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [error, setError] = useState("");

    const onSubmitHandler = async (values: IFormValues) => {
        try {
            await axios.post(`http://localhost:5000/login`, { ...values })
                .then(res => {
                    if (res.data.errors) {
                        setError(res.data.errors.message);
                    } else {
                        // dispatch();
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
                <Headline>Авторизація</Headline>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validationSchema={LoginSchema}
                    onSubmit={(values) => onSubmitHandler(values)}
                >
                    {({ errors, touched }) => (
                        <FormWrapper>
                            {error && <Error>{error}</Error>}
                            <FormFieldWrapper>
                                <LabelErrorWrapper>
                                    <Label htmlFor="email">Ел. пошта</Label>
                                    {errors.email && touched.email ? (
                                        <Error>{errors.email}</Error>
                                    ) : null}
                                </LabelErrorWrapper>
                                <Input type="email" name="email" placeholder="Введіть свою пошту" />

                            </FormFieldWrapper>
                            <FormFieldWrapper>
                                <LabelErrorWrapper>
                                    <Label htmlFor="password">Пароль</Label> {errors.password && touched.password ? (
                                        <Error>{errors.password}</Error>
                                    ) : null}
                                </LabelErrorWrapper>
                                <Input type="password" name="password" placeholder="Введіть свій пароль" />
                            </FormFieldWrapper>
                            <Button type="submit">Увійти</Button>
                        </FormWrapper>
                    )}
                </Formik>
            </AuthWrapper>
        </Layout>
    );
};

export default Login;
