import React, { useRef } from "react";
import { Container, MyButton, MyCheckBox, MyTextInput } from "../Components";
import { Box, Text } from "../Components/Theme";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextInput as RNTextInput } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { AuthNavigationProps } from './../Components/Navigation';
import Footer from './../Components/Form/Footer';
import { CommonActions } from "@react-navigation/routers";

const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(4, "Too Short!")
    .max(6, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const Login = ({ navigation }: AuthNavigationProps<"Login">) => {
  const password = useRef<RNTextInput>(null);

  const footer = (
    <Footer
      title="Don’t have an account?"
      action="Sign Up here"
      onPress={() => navigation.navigate("SignUp")}
    />
  );

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    setFieldValue,
  } = useFormik({
    validationSchema: LoginSchema,
    initialValues: { email: "", password: "", remember: false },
    onSubmit: () => navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes:[{name:"Home"}],
      })
    ),
  });

  return (
    <Container pattern={0} {...{ footer }}>
      <Text variant="title1" textAlign="center" marginBottom="s">
        Welcome back
      </Text>
      <Text variant="body" textAlign="center" marginBottom="s">
        Use your credentials below and login to your account
      </Text>
      <Box>
        <Box marginBottom="m">
          <MyTextInput
            icon="mail"
            placeholder="Enter your email"
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            error={errors.email}
            touched={touched.email}
            autoCapitalize="none"
            autoCompleteType="email"
            returnKeyType="next"
            returnKeyLabel="next"
            onSubmitEditing={() => password.current?.focus()}
          />
        </Box>
        <MyTextInput
          icon="lock"
          placeholder="Enter your Password"
          onChangeText={handleChange("password")}
          onBlur={handleBlur("password")}
          error={errors.password}
          touched={touched.password}
          secureTextEntry
          autoCapitalize="none"
          autoCompleteType="password"
          returnKeyType="go"
          returnKeyLabel="go"
          onSubmitEditing={() => handleSubmit()}
        />
        <Box
          flexDirection="row"
          justifyContent="space-between"
          marginVertical="s"
          alignItems="center"
        >
          <MyCheckBox
            label="Remember me"
            checked={values.remember}
            onChange={() => setFieldValue("remember", !values.remember)}
          />

          <BorderlessButton
            onPress={() => navigation.navigate("ForgotPassword")}
          >
            <Text variant="button" color="primary">
              Forgot password
            </Text>
          </BorderlessButton>
        </Box>
        <Box alignItems="center" marginTop="m">
          <MyButton
            variant="primary"
            label="Log into your account"
            onPress={handleSubmit}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
