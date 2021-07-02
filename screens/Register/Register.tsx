import React, { useState } from 'react';
import { Text, View, Image, TextInput, Button } from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import { images, theme } from '../../constants';
import AuthService from '../../services/Auth';
import { color, event } from 'react-native-reanimated';
import { useForm, Controller } from 'react-hook-form';
import { RadioButton } from 'react-native-paper';

const { registerImage } = images;

const { COLORS, FONTS, SIZES } = theme;

const Register = ({ navigation }: any) => {
  const [status, setStatus] = useState(false);
  const [message, setMessage] = useState('');
  const [value, setValue] = useState('student');

  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  function onSubmit(data: any) {
    console.log(data);
  }

  function handleRegister(data: any) {
    AuthService.register(
      data.firstname,
      data.lastname,
      data.email,
      data.password
    ).then(
      (response) => {
        setMessage(response.data.message);
        setStatus(true);
      },
      (error) => {
        console.log(error);
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setStatus(false);
        setMessage(resMessage);
      }
    );
  }

  return (
    <View style={{ backgroundColor: '#FFF', height: '100%' }}>
      <Image
        resizeMode="contain"
        source={registerImage}
        style={{ width: '100%', height: '43%' }}
      />
      <Text
        style={{
          ...FONTS.h1,
          alignSelf: 'center',
          marginBottom: 20,
        }}
      >
        Register
      </Text>

      <Text
        style={{
          ...FONTS.body3,
          alignSelf: 'center',
          marginBottom: 5
        }}
      >
        Quel est votre rôle ?
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 55,
        }}
      >
        <RadioButton.Group
          onValueChange={(value) => setValue(value)}
          value={value}
          {...register('roles')}
        >
          <RadioButton.Item
            label="Student"
            value="student"
          />
          <RadioButton.Item label="Teacher" value="teacher" />
        </RadioButton.Group>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 55,
          borderWidth: 2,
          marginTop: 10,
          paddingHorizontal: 10,
          borderColor: COLORS.purple,
          borderRadius: 23,
          paddingVertical: 2,
        }}
      >
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={{ paddingHorizontal: 10, fontSize: 16 }}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="First Name"
              placeholderTextColor={COLORS.purple}
            />
          )}
          name="firstname"
          defaultValue=""
        />
        {errors.firstname && (
          <Text style={{ color: 'red' }}>First Name is required.</Text>
        )}
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 55,
          borderWidth: 2,
          marginTop: 15,
          paddingHorizontal: 10,
          borderColor: COLORS.purple,
          borderRadius: 23,
          paddingVertical: 2,
        }}
      >
        <Controller
          control={control}
          rules={{
            maxLength: 100,
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Last Name"
              placeholderTextColor={COLORS.purple}
              style={{ paddingHorizontal: 10, fontSize: 16 }}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="lastname"
          defaultValue=""
        />
        {errors.lastname && (
          <Text style={{ color: 'red' }}>Last Name is required.</Text>
        )}
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 55,
          borderWidth: 2,
          marginTop: 15,
          paddingHorizontal: 10,
          borderColor: COLORS.purple,
          borderRadius: 23,
          paddingVertical: 2,
        }}
      >
        <Controller
          control={control}
          rules={{
            maxLength: 100,
            required: true,
            pattern: /^\S+@\S+$/i,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Email"
              placeholderTextColor={COLORS.purple}
              style={{ paddingHorizontal: 10, fontSize: 16 }}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="email"
          defaultValue=""
        />
        {errors.email && (
          <Text style={{ color: 'red' }}>Email is required.</Text>
        )}
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 55,
          borderWidth: 2,
          marginTop: 15,
          paddingHorizontal: 10,
          borderColor: COLORS.purple,
          borderRadius: 23,
          paddingVertical: 2,
        }}
      >
        <Controller
          control={control}
          rules={{
            maxLength: 100,
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              secureTextEntry
              placeholder="************"
              placeholderTextColor={COLORS.purple}
              style={{ paddingHorizontal: 10, fontSize: 16 }}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="password"
          defaultValue=""
        />
        {errors.password && (
          <Text style={{ color: 'red' }}>Password is required.</Text>
        )}
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 55,
        }}
      >
        <Text>
          {message && (
            <View>
              <View>
                <Text>{message}</Text>
              </View>
            </View>
          )}
        </Text>
      </View>

      <View
        style={{
          marginHorizontal: 55,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 20,
          backgroundColor: COLORS.purple,

          borderRadius: 23,
        }}
      >
        <Button
          color={COLORS.white}
          title="Register"
          onPress={handleSubmit(onSubmit)}
        />
      </View>

      <View
        style={{
          marginHorizontal: 55,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 10,

          paddingVertical: 10,
        }}
      >
        <Text
          onPress={() => navigation.navigate('Login')}
          style={{
            color: COLORS.purple,
            ...FONTS.body3,
          }}
        >
          Already member ? Login here
        </Text>
      </View>
    </View>
  );
};

export default Register;
