/* eslint-disable @typescript-eslint/no-empty-function */
import { ReactNode, createContext, useCallback, useContext, useEffect, useState } from 'react';
import { ISimpleWorkspace, IWorkspace } from '../types/workspaceTypes';
import { toast } from 'react-toastify';
import { AuthContext } from './AuthContext';
import WorkspaceService from '../services/WorkspaceService';

interface WorkspaceContextData {
  workspaces: ISimpleWorkspace[],
  handleSetWorkspaces: (workspaces: ISimpleWorkspace[]) => void,
  selectedWorkspace: IWorkspace,
  selectWorkspace: (workspaceId: string) => Promise<void>;
  addNewWorkspace: (workspace: ISimpleWorkspace) => void;
  update: () => void;
  reset: () => void;
}

export const WorkspaceContext = createContext<WorkspaceContextData>({
  workspaces: [],
  handleSetWorkspaces: () => {},
  selectedWorkspace: {} as IWorkspace,
  selectWorkspace: async () => {},
  addNewWorkspace: () => {},
  update: () => {},
  reset: () => {}
});

export default function WorkspaceContextProvider({ children }: { children: ReactNode; }) {
  const { token } = useContext(AuthContext);

  const [workspaces, setWorkspaces] = useState<ISimpleWorkspace[]>([]);
  const [selectedWorkspace, setSelectedWorkspace] = useState<IWorkspace>({} as IWorkspace);
  const [newWorkspaceAdded, setNewWorkspaceAdded] = useState<boolean>(false);

  function update() {
    selectWorkspace(selectedWorkspace.id);
  }

  function reset() {
    setWorkspaces([]);
    setSelectedWorkspace({} as IWorkspace);
  }

  const handleSetWorkspaces = useCallback((workspaces: ISimpleWorkspace[]) => {
    setWorkspaces(workspaces);
  }, []);

  function addNewWorkspace(workspace: ISimpleWorkspace) {
    setWorkspaces((prevState) => ([
      ...prevState, workspace
    ]));

    setNewWorkspaceAdded(true);
  }

  const selectWorkspace = useCallback(async (workspaceId: string) => {
    const workspace = workspaces.find((workspace) => workspace.id === workspaceId);

    if (!workspace) {
      toast.error('O workspace escolhido não foi encontrado ou não existe mais.');
      return;
    }

    const response = await WorkspaceService.getWorkspace(workspaceId, token);

    if (!response) return;

    setSelectedWorkspace(response.data);
  }, [token, workspaces]);

  useEffect(() => {
    if (workspaces && workspaces.length < 1 || !newWorkspaceAdded) return;

    selectWorkspace(workspaces[workspaces.length - 1].id);
    setNewWorkspaceAdded(false);
  }, [workspaces, newWorkspaceAdded, selectWorkspace]);

  const contextData: WorkspaceContextData = {
    workspaces,
    handleSetWorkspaces,
    selectedWorkspace,
    selectWorkspace,
    addNewWorkspace,
    update,
    reset
  };

  return (
    <WorkspaceContext.Provider value={contextData}>
      {children}
    </WorkspaceContext.Provider>
  );
}
