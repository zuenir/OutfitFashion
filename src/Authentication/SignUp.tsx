import React, { useRef } from "react";
import { Container, MyButton, MyTextInput } from "../Components";
import { Box, Text } from "../Components/Theme";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AuthNavigationProps} from "./../Components/Navigation";
import { TextInput as RNTextInput } from "react-native";
import Footer from './../Components/Form/Footer';

const SignUpSchema = Yup.object().shape({
  password: Yup.string()
    .min(4, "Too Short!")
    .max(6, "Too Long!")
    .required("Required"),
  passwordConfirmation: Yup.string()
    .equals([Yup.ref("password")], "Password don´t match")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const SignUp = ({
  navigation,
}: AuthNavigationProps<"SignUp">) => {
  const password = useRef<RNTextInput>(null);
  const passwordConfirmation = useRef<RNTextInput>(null);

  const footer = (
    <Footer
      title="Already have an account?"
      action="Login here"
      onPress={() => navigation.navigate("Login")}
    />
  );

  const { handleChange, handleBlur, handleSubmit, errors, touched } = useFormik(
    {
      validationSchema: SignUpSchema,
      initialValues: { email: "", password: "", passwordConfirmation: "" },
      onSubmit: (values) => console.log(values),
    }
  );

  return (
    <Container pattern={1} {...{ footer }}>
      <Text variant="title1" textAlign="center" marginBottom="s">
        Create account
      </Text>
      <Text variant="body" textAlign="center" marginBottom="s">
        Let’s us know what your name, email, and your password
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
        <Box paddingBottom="m">
          <MyTextInput
            ref={password}
            icon="lock"
            placeholder="Enter your Password"
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            error={errors.password}
            touched={touched.password}
            secureTextEntry
            autoCapitalize="none"
            autoCompleteType="password"
            returnKeyType="next"
            returnKeyLabel="next"
            onSubmitEditing={() => passwordConfirmation.current?.focus()}
          />
        </Box>

        <MyTextInput
          ref={passwordConfirmation}
          icon="lock"
          placeholder="Confirm your Password"
          onChangeText={handleChange("passwordConfirmation")}
          onBlur={handleBlur("passwordConfirmation")}
          error={errors.passwordConfirmation}
          touched={touched.passwordConfirmation}
          secureTextEntry
          autoCapitalize="none"
          autoCompleteType="password"
          returnKeyType="go"
          returnKeyLabel="go"
          onSubmitEditing={() => handleSubmit()}
        />

        <Box alignItems="center" marginTop="m">
          <MyButton
            variant="primary"
            label="Create your account"
            onPress={handleSubmit}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default SignUp;
