import useSWR from 'swr';
import { TagResponse } from '../interfaces/tags.interface';

function useTags() {
  const { data, error, isLoading, mutate } = useSWR<TagResponse>('/tags');
  return {
    data: data?.results,
    error,
    isLoading,
    mutate,
  };
}

export { useTags };
