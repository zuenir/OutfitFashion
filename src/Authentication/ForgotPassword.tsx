import React from "react";
import { Container, MyTextInput, MyButton } from "../Components";
import { Box, Text } from "../Components/Theme";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Linking } from "react-native";
import { AuthNavigationProps } from "./../Components/Navigation";
import Footer from "../Components/Form/Footer";

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
});

const ForgotPassword = ({
  navigation,
}: AuthNavigationProps<"ForgotPassword">) => {
  const footer = (
    <Footer
      title="Don’t work?"
      action="Try another way"
      onPress={() => Linking.openURL("mailto:help@Support.com")}
    />
  );

  const { handleChange, handleBlur, handleSubmit, errors, touched } = useFormik(
    {
      validationSchema: ForgotPasswordSchema,
      initialValues: { email: "" },
      onSubmit: () => navigation.navigate("PasswordChanged"),
    }
  );

  return (
    <Container pattern={2} {...{ footer }}>
      <Text variant="title1" textAlign="center" marginBottom="s">
        Forgot password?
      </Text>
      <Text variant="body" textAlign="center" marginBottom="s">
        Enter the email address associated with your account
      </Text>
      <Box>
        <Box marginTop="m">
          <MyTextInput
            icon="mail"
            placeholder="Enter your email"
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            error={errors.email}
            touched={touched.email}
            autoCapitalize="none"
            autoCompleteType="email"
            returnKeyType="go"
            returnKeyLabel="go"
            onSubmitEditing={() => handleSubmit()}
          />
        </Box>

        <Box alignItems="center" marginTop="m">
          <MyButton
            variant="primary"
            label="Reset password"
            onPress={handleSubmit}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default ForgotPassword;
