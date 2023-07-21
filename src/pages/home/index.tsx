import Page from '../../global/components/Page';
import HomePageContainer from './styles';
import Sidebar from './components/Sidebar';

export default function Home() {
  return (
    <Page>
      <HomePageContainer>
        <Sidebar />
      </HomePageContainer>
    </Page>
  );
}
