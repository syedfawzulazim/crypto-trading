import React, { useState } from "react";
import { IChildren } from "../types";

interface IPaginationContext {
  pageNumber: number;
  setPageNumber: (page: number) => void;
}

export const PaginationContext = React.createContext<IPaginationContext>({
  pageNumber: 0,
  setPageNumber: () => {},
});

export const PaginationContextProvider: React.FC<IChildren> = ({
  children,
}) => {
  const [pageNumber, setPageNumber] = useState<number>(1);

  return (
    <PaginationContext.Provider value={{ pageNumber, setPageNumber }}>
      {children}
    </PaginationContext.Provider>
  );
};
