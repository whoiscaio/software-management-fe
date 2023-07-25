/* eslint-disable @typescript-eslint/no-empty-function */
import { ReactNode, createContext, useContext, useState } from 'react';
import { ITeam, ISimpleTeam } from '../types/teamTypes';
import { toast } from 'react-toastify';
import TeamService from '../services/TeamService';
import { AuthContext } from './AuthContext';

interface TeamContextData {
  teams: ISimpleTeam[];
  handleSetTeams: (teams: ISimpleTeam[]) => void;
  selectedTeam: ITeam;
  selectTeam: (teamId: string) => Promise<void>;
  addNewTeam: (team: ISimpleTeam) => void;
  reset: () => void;
}

export const TeamContext = createContext<TeamContextData>({
  teams: [],
  handleSetTeams: () => {},
  selectedTeam: {} as ITeam,
  selectTeam: async () => {},
  addNewTeam: () => {},
  reset: () => {},
});

export default function TeamContextProvider({ children }: { children: ReactNode; }) {
  const { token } = useContext(AuthContext);

  const [teams, setTeams] = useState<ISimpleTeam[]>([]);
  const [selectedTeam, setSelectedTeam] = useState<ITeam>({} as ITeam);

  function reset() {
    setTeams([]);
    setSelectedTeam({} as ITeam);
  }

  function handleSetTeams(teams: ISimpleTeam[]) {
    if (teams.length < 1) return;

    setTeams(teams);
  }

  function addNewTeam(team: ISimpleTeam) {
    setTeams((prevState) => ([
      ...prevState, team
    ]));
  }

  async function selectTeam(teamId: string) {
    const team = teams.find((currentTeam) => currentTeam.id === teamId);

    if (!team) {
      toast.error('O time escolhido não foi encontrado ou não existe mais.');
      return;
    }

    const response = await TeamService.getTeam(teamId, token);

    if (!response) return;

    setSelectedTeam(response.data);
  }

  const contextData: TeamContextData = {
    teams,
    handleSetTeams,
    selectedTeam,
    selectTeam,
    addNewTeam,
    reset
  };

  return (
    <TeamContext.Provider value={contextData}>
      {children}
    </TeamContext.Provider>
  );
}
