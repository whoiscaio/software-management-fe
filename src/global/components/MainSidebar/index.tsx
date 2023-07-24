import { ChevronDown, ChevronUp, LogOut, Plus, User2 } from 'lucide-react';
import { MouseEvent as ReactMouseEvent, useContext, useEffect, useRef, useState } from 'react';

import MainSidebarContainer from './styles';
import { AuthContext } from '../../../contexts/AuthContext';
import { WorkspaceContext } from '../../../contexts/WorkspaceContext';
import { TeamContext } from '../../../contexts/TeamContext';
import Logo from '../Logo';

export default function MainSidebar() {
  const { account, isAuthenticated, logout } = useContext(AuthContext);
  const { selectedTeam, selectTeam, reset: teamReset } = useContext(TeamContext);
  const { workspaces, selectedWorkspace, handleSetWorkspaces, selectWorkspace, reset: workspaceReset } = useContext(WorkspaceContext);

  const selectTrigger = useRef<HTMLDivElement>(null);

  const [isSelectMenuOpen, setIsSelectMenuOpen] = useState<boolean>(false);

  function handleLogout() {
    workspaceReset();
    teamReset();
    logout();
  }

  function handleSelectTeam(e: ReactMouseEvent<HTMLDivElement>, teamId: string) {
    e.stopPropagation();

    workspaceReset();
    selectTeam(teamId);
    setIsSelectMenuOpen(false);
  }

  function handleCreateWorkspace() {
    console.log('HANDLE CREATE WORKSPACE');
  }

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (selectTrigger.current && isSelectMenuOpen && !selectTrigger.current.contains(e.target as Node)) {
        setIsSelectMenuOpen(false);
      }
    }

    document.addEventListener('click', handleClickOutside);

    () => document.removeEventListener('click', handleClickOutside);
  }, [isSelectMenuOpen, selectTrigger]);

  useEffect(() => {
    if (!selectedTeam) return;

    handleSetWorkspaces(selectedTeam.workspaces);
  }, [selectedTeam, handleSetWorkspaces]);

  return (
    <MainSidebarContainer>
      <Logo />
      {
        isAuthenticated && account && account.username && (
          <div className="action-section">
            <button type="button" className="new-team-button button-pattern-measures scale-down-hover-effect">
              <Plus /> <span>Novo Time</span>
            </button>
            {
              account.teams && account.teams.length > 0 && (
                <div className={`select-team ${isSelectMenuOpen ? 'open' : ''}`}>
                  <div
                    className="select-trigger"
                    ref={selectTrigger}
                    onClick={() => setIsSelectMenuOpen((prevState) => !prevState)}
                  >
                    <p>{selectedTeam?.name || 'Selecione seu time'}</p>
                    {isSelectMenuOpen ? <ChevronUp /> : <ChevronDown />}
                    {
                      isSelectMenuOpen && (
                        <div className="select-options">
                          {
                            account.teams.map((team) => (
                              <div className="option" key={team.id} onClick={(e) => handleSelectTeam(e, team.id)}>
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
            <div className="workspaces">
              {
                workspaces && workspaces.length > 0 && workspaces.map((workspace) => (
                  <button
                    key={workspace.id}
                    type="button"
                    className={`button-pattern-measures ${selectedWorkspace.id === workspace.id ? 'selected' : ''}`}
                    onClick={() => selectWorkspace(workspace.id)}
                  >{workspace.name}</button>
                ))
              }
              {
                selectedTeam && selectedTeam.name && (
                  <button
                    type="button"
                    onClick={handleCreateWorkspace}
                    className="new-workspace-button button-pattern-measures"
                  ><Plus size={30} /> Novo Workspace</button>
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
