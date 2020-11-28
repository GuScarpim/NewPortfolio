import React, { createContext, useState } from "react";

//Tipando os dados que quero para usuário
type HrefType = {
  href: string;
};

//Tipando as Props do contexto
type PropsHrefContext = {
  state: HrefType;
  setState: React.Dispatch<React.SetStateAction<HrefType>>;
};

//Valor default do contexto
const DEFAULT_VALUE = {
  state: {
    href: "",
  },
  setState: () => {}, //função de inicialização
};

//criando nosso contexto HrefContext
const HrefContext = createContext<PropsHrefContext>(DEFAULT_VALUE);

/**
 * Função que irá conter o estado e função que irá alterar o estado 'setState'
 * quer irá prover o contexto para os componentes filhos da árvore
 */
const HrefContextProvider: React.FC = ({ children }) => {
  const [state, setState] = useState(DEFAULT_VALUE.state);
  return (
    <HrefContext.Provider
      value={{
        state,
        setState,
      }}
    >
      {children}
    </HrefContext.Provider>
  );
};
export { HrefContextProvider };
export default HrefContext;