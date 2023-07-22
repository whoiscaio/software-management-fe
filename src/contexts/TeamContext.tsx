/* eslint-disable @typescript-eslint/no-empty-function */
import { ReactNode, createContext, useContext, useState } from 'react';
import { ITeam, IUserTeam } from '../types/teamTypes';
import { toast } from 'react-toastify';
import TeamService from '../services/TeamService';
import { AuthContext } from './AuthContext';

interface TeamContextData {
  teams: IUserTeam[];
  handleSetTeams: (teams: IUserTeam[]) => void;
  selectedTeam: ITeam;
  selectTeam: (teamId: string) => Promise<void>;
}

export const TeamContext = createContext<TeamContextData>({
  teams: [],
  handleSetTeams: () => { },
  selectedTeam: {} as ITeam,
  selectTeam: async () => { },
});

export default function TeamContextProvider({ children }: { children: ReactNode; }) {
  const { token } = useContext(AuthContext);

  const [teams, setTeams] = useState<IUserTeam[]>([]);
  const [selectedTeam, setSelectedTeam] = useState<ITeam>({} as ITeam);

  function handleSetTeams(teams: IUserTeam[]) {
    if (teams.length < 1) return;

    setTeams(teams);
  }

  async function selectTeam(teamId: string) {
    const team = teams.find((currentTeam) => currentTeam.id === teamId);

    if (!team) {
      toast.error('O time escolhido não foi encontrado ou não existe mais.');
      return;
    }

    console.log(`Token: ${token}`);

    const response = await TeamService.getTeamInfo(teamId, token);

    if (!response) return;

    console.log(response.data);

    setSelectedTeam(response.data);
  }

  const contextData: TeamContextData = {
    teams,
    handleSetTeams,
    selectedTeam,
    selectTeam
  };

  return (
    <TeamContext.Provider value={contextData}>
      {children}
    </TeamContext.Provider>
  );
}
