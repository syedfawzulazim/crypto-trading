import React, { useCallback, useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

import Table from "./Table";
import Pagination from "./Pagination";
import { PaginationContextProvider } from "../../context/";

const Index: React.FC = () => {
  return (
    <div className="pt-1 bg-slate-100 dark:bg-[#1f222c] text-slate-900 dark:text-white">
      <div className="xl:max-w-[1400px] mx-auto  px-4 lg:pr-0 ">
        <PaginationContextProvider>
          <Table />
          <Pagination />
        </PaginationContextProvider>
      </div>
    </div>
  );
};

export default Index;
