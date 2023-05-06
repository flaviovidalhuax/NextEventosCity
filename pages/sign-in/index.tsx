import { Layout } from '../../components/layout/Layout';
import { NextPageWithLayout } from '../page';

export const signIn: NextPageWithLayout = () => {
  return <div className="bg-app-yellow ">hello</div>;
};

signIn.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default signIn;
