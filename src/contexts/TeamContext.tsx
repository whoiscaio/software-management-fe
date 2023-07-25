/* eslint-disable @typescript-eslint/no-empty-function */
import { ReactNode, createContext, useCallback, useContext, useEffect, useState } from 'react';
import { ITeam, ISimpleTeam } from '../global/types/teamTypes';
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
  const [newTeamAdded, setNewTeamAdded] = useState<boolean>(false);

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

    setNewTeamAdded(true);
  }

  const selectTeam = useCallback(async (teamId: string) => {
    const team = teams.find((currentTeam) => currentTeam.id === teamId);

    if (!team) {
      toast.error('O time escolhido não foi encontrado ou não existe mais.');
      return;
    }

    const response = await TeamService.getTeam(teamId, token);

    if (!response) return;

    setSelectedTeam(response.data);
  }, [teams, token]);

  useEffect(() => {
    if (teams.length < 1) return;

    if (newTeamAdded) {
      selectTeam(teams[teams.length - 1].id);
      setNewTeamAdded(false);
    }
  }, [teams, newTeamAdded, selectTeam]);

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
