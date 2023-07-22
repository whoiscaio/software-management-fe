/* eslint-disable @typescript-eslint/no-empty-function */
import { ReactNode, createContext, useContext, useState } from 'react';
import { ISimpleWorkspace, IWorkspace } from '../types/workspaceTypes';
import { toast } from 'react-toastify';
import { AuthContext } from './AuthContext';
import WorkspaceService from '../services/WorkspaceService';

interface WorkspaceContextData {
  workspaces: ISimpleWorkspace[],
  handleSetWorkspaces: (workspaces: ISimpleWorkspace[]) => void,
  selectedWorkspace: IWorkspace,
  selectWorkspace: (workspaceId: string) => Promise<void>;
  reset: () => void;
}

export const WorkspaceContext = createContext<WorkspaceContextData>({
  workspaces: [],
  handleSetWorkspaces: () => { },
  selectedWorkspace: {} as IWorkspace,
  selectWorkspace: async () => { },
  reset: () => { }
});

export default function WorkspaceContextProvider({ children }: { children: ReactNode; }) {
  const { token } = useContext(AuthContext);

  const [workspaces, setWorkspaces] = useState<ISimpleWorkspace[]>([]);
  const [selectedWorkspace, setSelectedWorkspace] = useState<IWorkspace>({} as IWorkspace);

  function reset() {
    setWorkspaces([]);
    setSelectedWorkspace({} as IWorkspace);
  }

  function handleSetWorkspaces(workspaces: ISimpleWorkspace[]) {
    setWorkspaces(workspaces);
  }

  async function selectWorkspace(workspaceId: string) {
    const workspace = workspaces.find((workspace) => workspace.id === workspaceId);

    if (!workspace) {
      toast.error('O workspace escolhido não foi encontrado ou não existe mais.');
      return;
    }

    const response = await WorkspaceService.getWorkspace(workspaceId, token);

    if (!response) return;

    setSelectedWorkspace(response.data);
  }

  const contextData: WorkspaceContextData = {
    workspaces,
    handleSetWorkspaces,
    selectedWorkspace,
    selectWorkspace,
    reset
  };

  return (
    <WorkspaceContext.Provider value={contextData}>
      {children}
    </WorkspaceContext.Provider>
  );
}
