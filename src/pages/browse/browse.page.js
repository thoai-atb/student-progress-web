import { Outlet } from "react-router-dom";
import { BrowseProvider } from "./browse.context";

export const BrowsePage = () => {
  return (
    <BrowseProvider>
      <div className="relative w-full h-full flex items-center flex-col">
        <div className="absolute inset-0 overflow-auto scrollbar-styled flex items-center flex-col pb-2">
          <div
            className="w-full flex flex-col items-center justify-start text-background-500 text-xl px-4 pb-10"
            style={{
              maxWidth: "1400px",
            }}
          >
            <Outlet />
          </div>
        </div>
      </div>
    </BrowseProvider>
  );
};
