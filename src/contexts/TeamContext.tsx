/* eslint-disable @typescript-eslint/no-empty-function */
import { ReactNode, createContext, useState } from 'react';
import { ITeam } from '../types/teamTypes';
import { toast } from 'react-toastify';

interface TeamContextData {
  teams: ITeam[];
  handleSetTeams: (teams: ITeam[]) => void;
  selectedTeam: ITeam;
  selectTeam: (team_id: string) => void;
}

export const TeamContext = createContext<TeamContextData>({
  teams: [],
  handleSetTeams: () => { },
  selectedTeam: {} as ITeam,
  selectTeam: () => { },
});

export default function TeamContextProvider({ children }: { children: ReactNode; }) {
  const [teams, setTeams] = useState<ITeam[]>([]);
  const [selectedTeam, setSelectedTeam] = useState<ITeam>({} as ITeam);

  function handleSetTeams(teams: ITeam[]) {
    setTeams(teams);
  }

  function selectTeam(team_id: string) {
    const team = teams.find((currentTeam) => currentTeam.id === team_id);

    if (!team) {
      toast.error('O time escolhido não foi encontrado ou não existe mais.');
      return;
    }

    setSelectedTeam(team);
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
