import { createContext, useContext } from "react";

export type DirectorsContent = {
    nikita: boolean;
    setNikita: (nikita: boolean) => void;
  
    christian: boolean;
    setChristian: (christian: boolean) => void;
  
    cruz: boolean;
    setCruz: (cruz: boolean) => void;
  
    drake: boolean;
    setDrake: (drake: boolean) => void;
  
    griffin: boolean;
    setGriffin: (griffin: boolean) => void;
  
    aden: boolean;
    setAden: (aden: boolean) => void;
}

export const DirectorsContext = createContext<DirectorsContent>({
    nikita: false,
    setNikita: () => {},

    christian: false,
    setChristian: () => {},

    cruz: false,
    setCruz: () => {},

    drake: false,
    setDrake: () => {},

    griffin: false,
    setGriffin: () => {},

    aden: false,
    setAden: () => {}
})

export const useDirectorsContext = () => useContext(DirectorsContext);