"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Assignment, User } from "../types";

interface AppContextType {
  user: User;
  setUser: (user: User) => void;
  updateUser: (data: Partial<User>) => void;
  assignments: Assignment[];
  addAssignment: (assignment: Assignment) => void;
  completeAssignment: (id: number) => void;
  deleteAssignment: (id: number) => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [user, setUser] = useState<User>({ name: "", program: "" });
  const [assignments, setAssignments] = useState<Assignment[]>([]);

  const updateUser = (data: Partial<User>) => {
    setUser((prev) => ({ ...prev, ...data }));
  };

  const addAssignment = (assignment: Assignment) => {
    setAssignments([...assignments, assignment]);
  };

  const completeAssignment = (id: number) => {
    setAssignments(
      assignments.map((a) =>
        a.id === id ? { ...a, completed: true } : a
      )
    );
  };

  const deleteAssignment = (id: number) => {
    setAssignments(assignments.filter((a) => a.id !== id));
  };

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        updateUser,
        assignments,
        addAssignment,
        completeAssignment,
        deleteAssignment,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context)
    throw new Error("useAppContext must be used within AppProvider");
  return context;
};
