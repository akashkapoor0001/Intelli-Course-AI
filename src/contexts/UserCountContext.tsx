
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type UserCountContextType = {
  userCount: number;
  incrementUserCount: () => void;
};

const UserCountContext = createContext<UserCountContextType | undefined>(undefined);

export const UserCountProvider = ({ children }: { children: ReactNode }) => {
  const [userCount, setUserCount] = useState<number>(() => {
    const savedCount = localStorage.getItem('userCount');
    return savedCount ? parseInt(savedCount, 10) : 700;
  });

  useEffect(() => {
    localStorage.setItem('userCount', userCount.toString());
  }, [userCount]);

  const incrementUserCount = () => {
    setUserCount(prev => prev + 1);
  };

  return (
    <UserCountContext.Provider value={{ userCount, incrementUserCount }}>
      {children}
    </UserCountContext.Provider>
  );
};

export const useUserCount = () => {
  const context = useContext(UserCountContext);
  if (context === undefined) {
    throw new Error('useUserCount must be used within a UserCountProvider');
  }
  return context;
};
