import React from "react";
import { Dimensions, ScrollView } from "react-native";
import { Box, MyTextInput, Text } from "../../Components";
import { useFormik } from "formik";
import * as Yup from "yup";
import CheckBoxGroup from "./CheckBoxGroup";

interface PernsonalInfoProps {}

const { height: wHeight } = Dimensions.get("window");

const genders = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
];

const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(4, "Too Short!")
    .max(6, "Too Long!")
    .required("Required"),
  name: Yup.string().required("Required"),
});

const PernsonalInfo = () => {
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
    initialValues: { name: "", password: "", address: "" },
    onSubmit: () => {
      true;
    },
  });

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Box padding="m">
        <Text variant="body">Account information</Text>
        <Box marginTop="m">
          <MyTextInput
            icon="user"
            placeholder="Name"
            onChangeText={handleChange("name")}
            onBlur={handleBlur("name")}
            error={errors.name}
            touched={touched.name}
            autoCapitalize="characters"
            autoCompleteType="name"
          />
        </Box>
        <Box marginVertical="m">
          <MyTextInput
            icon="lock"
            placeholder="Password"
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            error={errors.password}
            touched={touched.password}
            secureTextEntry
            autoCapitalize="none"
            autoCompleteType="password"
          />
        </Box>
        <MyTextInput
          icon="map-pin"
          placeholder="My Address"
          onChangeText={handleChange("address")}
          onBlur={handleBlur("address")}
          error={errors.address}
          touched={touched.address}
          secureTextEntry
          autoCapitalize="none"
          autoCompleteType="street-address"
        />
        <CheckBoxGroup options={genders} radio />
      </Box>
    </ScrollView>
  );
};

export default PernsonalInfo;
