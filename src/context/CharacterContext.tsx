import { createContext } from "react";
import { CharacterContextType } from "../types/charactersContext";

export const CharacterContext = createContext<CharacterContextType>({
    selectedItem: null,
    setSelectedItem: ()=>{}
});