'use client'

import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { ICity } from "@/app/interfaces/ICity"

type CityContextProps = {
  children?: ReactNode
}

const defaultCity: ICity = {
    id: 1,
    name: "Троицк (Челябинская область)",
    phones: ['+79507454572', '+73516371889'],
    price: "650.00",
}



interface CityContextType {
  currentCity: ICity;
  setCurrentCity: React.Dispatch<React.SetStateAction<ICity>>;
}

const CityContext = createContext<CityContextType | undefined>(undefined);
  
export const CityProvider: React.FC<CityContextProps> = ({ children }) => {

  const [ currentCity, setCurrentCity ] = useState<ICity>(defaultCity);

  useEffect(() => {
    function isValidCity(city: any): city is ICity {
        return typeof city === 'object' && 'name' in city;
    }
  
    const lsCity = localStorage.getItem('currentCity')
    if (lsCity) {
        try {
            const parsedCity: ICity = JSON.parse(lsCity);
            if (isValidCity(parsedCity)) {
                setCurrentCity(parsedCity);
                return;
            }
        } catch (error) {
            console.log('Error parsing city from local storage:', error);
        }
    }
    localStorage.setItem('currentCity', JSON.stringify(currentCity));
  }, [])

  useEffect(() => {
    if (currentCity.id !== defaultCity.id) {
      localStorage.setItem('currentCity', JSON.stringify(currentCity));
    }
  }, [currentCity])

    return (
      <CityContext.Provider value={{currentCity, setCurrentCity}}>
        {children}
      </CityContext.Provider>
    )
}

export const useCurrentCity = () => {
  const context = useContext(CityContext);
  if (!context) {
    throw new Error('useCity must be used within a CityProvider');
  }
  return context;
};
