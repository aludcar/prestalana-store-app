import customFetch from '../utils/customFetch';
import { useDispatch } from 'react-redux';
import { authUser } from '../actions/authActions';
import UseDataPersistence from './UseDataPersistence';
import { ResponseType } from '../types/base';
import { AxiosError } from 'axios';

const useAuthenticateUser = () => {
  const dispatch = useDispatch();
  const { setDataPersistence } = UseDataPersistence();

  //export this function to be used in the component hook
  //problems with dispatch directly.
  const authenticateUser = async (username: string, password: string): Promise<ResponseType> => {
    try {
      const response = await customFetch.post('/auth/login', {
        username,
        password,
      });

      dispatch(
        authUser({
          username,
          token: response.data.token,
          isAuthenticated: true,
        })
      );
      setDataPersistence({
        key: username,
        data: {
          username,
          token: response.data.token,
          isAuthenticated: true,
          favoriteProducts: []
        },
        source: "login"
      });
      return {
        data: response.data,
        status: "success",
        error: null
      };
    } catch (error) {
      console.log(error);
      if ((error as AxiosError).response) {
        const axiosError = error as AxiosError;
        return {
          status: "failure",
          error: axiosError.response?.data
        };
      } else {
        return {
          status: "failure",
          error
        };
      }
    }
  };

  return { authenticateUser };
};

export default useAuthenticateUser;