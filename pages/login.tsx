import PageContainer from '../components/utility/PageContainer'
import Login from '../components/Login';
import Layout from '../layouts/Layout';

const login = () => {
  return (
    <Layout noDisplayNav={true}>
        <PageContainer>
        <Login />
        </PageContainer>
    </Layout>
  );
};

export default login;
