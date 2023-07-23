import { ChevronDown, ChevronUp, LogOut, User2 } from 'lucide-react';
import { useContext, useState } from 'react';

import MainSidebarContainer from './styles';
import { AuthContext } from '../../../contexts/AuthContext';
import { WorkspaceContext } from '../../../contexts/WorkspaceContext';
import { TeamContext } from '../../../contexts/TeamContext';

export default function MainSidebar() {
  const { account, isAuthenticated, logout } = useContext(AuthContext);
  const { selectedTeam, selectTeam, reset: teamReset } = useContext(TeamContext);
  const { reset: workspaceReset } = useContext(WorkspaceContext);

  const [isSelectMenuOpen, setIsSelectMenuOpen] = useState<boolean>(false);

  function handleLogout() {
    workspaceReset();
    teamReset();
    logout();
  }

  function handleSelectTeam(teamId: string) {
    workspaceReset();
    selectTeam(teamId);
    setIsSelectMenuOpen(false);
  }

  return (
    <MainSidebarContainer>
      <div className="heading-wrapper">
        <h1>manage<span>app</span></h1>
      </div>
      {
        isAuthenticated && account && account.username && account.teams.length > 0 && (
          <div className="action-section">
            <div className="select-team">
              <div className="select-trigger" onClick={() => setIsSelectMenuOpen((prevState) => !prevState)}>
                <p>{selectedTeam?.name || 'Selecione seu time'}</p>
                {isSelectMenuOpen ? <ChevronUp /> : <ChevronDown />}
              </div>
              {
                isSelectMenuOpen && (
                  <div className="select-options">
                    {
                      account.teams.map((team) => (
                        <div className="option" onClick={() => handleSelectTeam(team.id)}>
                          <p>{team.name}</p>
                        </div>
                      ))
                    }
                  </div>
                )
              }
            </div>
          </div>
        )
      }
      {
        isAuthenticated && account && account.username && (
          <div className="profile-footer">
            <div className="user">
              <User2 size={40} />
              <p>Olá, {account.username}</p>
            </div>
            <button className="logout" onClick={handleLogout}><LogOut size={30} /></button>
          </div>
        )
      }
    </MainSidebarContainer>
  );
}
