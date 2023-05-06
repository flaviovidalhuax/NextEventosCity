import useSWR from 'swr';
import axios from '../helpers/axios.helper.';
import { User } from '../interfaces/user.interface';

function createUser(user: User) {
  return axios.post(`/auth/sign-up`, user);
}

function useUserMe() {
  const { data, error, isLoading, mutate } = useSWR('/auth/me');
  return {
    data: data?.results,
    error,
    isLoading,
    mutate,
  };
}

export { createUser, useUserMe };
