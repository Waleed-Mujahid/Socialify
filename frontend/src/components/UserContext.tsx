import { createContext } from 'react';

interface UserContextType {
  userId: string;
  setUserId: (userId: string) => void;
  username: string;
  setUsername: (username: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);
export default UserContext;
