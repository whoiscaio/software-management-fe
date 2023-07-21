import { useContext } from 'react';
import Page from '../../global/components/Page';
import { TeamContext } from '../../contexts/TeamContext';

export default function Home() {
  const { teams } = useContext(TeamContext);

  console.log(teams);

  return (
    <Page>
      Home
    </Page>
  )
}
