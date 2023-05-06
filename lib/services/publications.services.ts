import useSWR from 'swr';
import axios from '../helpers/axios.helper.'; //usamos el axios personalizado, para hacer esas configuraciones
import {
  PublicationForm,
  PublicationResponse,
} from '../interfaces/publications.interface';

function usePublications({ categoryId }: { categoryId?: string } = {}) {
  const url = categoryId
    ? `/publications?publications_types_ids=${categoryId}`
    : '/publications/';

  const { data, error, isLoading, mutate } = useSWR<PublicationResponse>(url);

  return {
    data: data?.results,
    error,
    isLoading,
    mutate,
  };
}

function createPublications(data: PublicationForm) {
  return axios.post('/publications', data);
}

function votePublications(publicationID: string) {
  return axios.post(`/publications/${publicationID}/vote`);
}

function postPublicationsImage(idPublication: string, fromData: object) {
  const options = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };
  return axios.post(
    `https://paracuando-academlo-api.academlo.tech/api/v1/publications/${idPublication}/add-image`,
    fromData,
    options
  );
}

export {
  usePublications,
  createPublications,
  votePublications,
  postPublicationsImage,
};
