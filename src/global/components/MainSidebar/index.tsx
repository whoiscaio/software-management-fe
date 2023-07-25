import { ChevronDown, ChevronUp, LogOut, Plus, User2 } from 'lucide-react';
import { MouseEvent as ReactMouseEvent, useContext, useEffect, useRef, useState } from 'react';

import MainSidebarContainer from './styles';
import { AuthContext } from '../../../contexts/AuthContext';
import { WorkspaceContext } from '../../../contexts/WorkspaceContext';
import { TeamContext } from '../../../contexts/TeamContext';
import Logo from '../Logo';
import FormModal from '../dialogs/FormModal';
import TeamService from '../../../services/TeamService';
import { TeamDTO } from '../../../types/teamTypes';
import { toast } from 'react-toastify';
import WorkspaceService from '../../../services/WorkspaceService';
import { WorkspaceDTO } from '../../../types/workspaceTypes';

export default function MainSidebar() {
  const { account, isAuthenticated, token, logout } = useContext(AuthContext);
  const { teams, selectedTeam, selectTeam, addNewTeam, reset: teamReset } = useContext(TeamContext);
  const { workspaces, selectedWorkspace, addNewWorkspace, handleSetWorkspaces, selectWorkspace, reset: workspaceReset } = useContext(WorkspaceContext);

  const selectTrigger = useRef<HTMLDivElement>(null);

  const [isSelectMenuOpen, setIsSelectMenuOpen] = useState<boolean>(false);
  const [isCreateTeamFormOpen, setIsCreateTeamFormOpen] = useState<boolean>(false);
  const [isCreateWorkspaceFormOpen, setIsCreateWorkspaceFormOpen] = useState<boolean>(false);

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

  async function handleCreateWorkspace(name: string, description?: string) {
    const body: WorkspaceDTO = {
      name,
      description: description || '',
      team_id: selectedTeam.id
    };

    const response = await WorkspaceService.createWorkspace(body, token);

    if (!response?.data) return;

    addNewWorkspace(response.data);

    toast(`Workspace ${name} criado com sucesso.`);

    setIsCreateWorkspaceFormOpen(false);
  }

  async function handleCreateTeam(name: string, description?: string) {
    const body: TeamDTO = {
      name, description: description || ''
    };

    const response = await TeamService.createTeam(body, token);

    if (!response?.data) return;

    addNewTeam(response.data);

    toast(`Time ${name} criado com sucesso.`);

    setIsCreateTeamFormOpen(false);
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
    <>
      <MainSidebarContainer>
        <Logo />
        {
          isAuthenticated && account && account.username && (
            <div className="action-section">
              <button
                type="button"
                onClick={() => setIsCreateTeamFormOpen(true)}
                className="new-team-button button-pattern-measures scale-down-hover-effect"
              >
                <Plus /> <span>Novo Time</span>
              </button>
              {
                teams && teams.length > 0 && (
                  <div className={`custom-select ${isSelectMenuOpen ? 'open' : ''}`}>
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
                              teams.map((team) => (
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
              </div>
              {
                  selectedTeam && selectedTeam.name && (
                    <button
                      type="button"
                      onClick={() => setIsCreateWorkspaceFormOpen(true)}
                      className="new-workspace-button button-pattern-measures"
                    ><Plus size={30} /> Novo Workspace</button>
                  )
                }
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
      {
        isCreateTeamFormOpen && (
          <FormModal
            action={handleCreateTeam}
            close={() => setIsCreateTeamFormOpen(false)}
            title="Criar time"
            confirmButtonText="Criar time"
          />
        )
      }
      {
        isCreateWorkspaceFormOpen && (
          <FormModal
            action={handleCreateWorkspace}
            close={() => setIsCreateWorkspaceFormOpen(false)}
            title="Criar workspace"
            confirmButtonText="Criar workspace"
          />
        )
      }
    </>
  );
}
