'use client'

import { useEffect, useState } from "react";
import { ICity } from "@/app/interfaces/ICity";

// interface City {
//     id: number;
//     name: string;
//     price: string;
//     phones: string[];
// }

export default function CityChange() {

    const [ isListShowing, setIsListShowing ] = useState(false);
    const [ cities, setCities ] = useState<ICity[]>([]);

    useEffect(() => {
        getCitiesData();
    }, [])

    const getCitiesData = async () => {
        try {
            const res = await fetch('https://aquapoverka.ru/api/v1/cities/')
            const cities: ICity[] = await res.json()
            if (res.status === 200) {
                setCities(cities);
            }
            console.log(cities);
            return res;
        } catch (error) {
            console.log(error);
        }
    }

    const handleClick = () => {
        setIsListShowing((prevState) => !prevState);
    }

    return (
        <div className="relative">
            <div className="underline decoration-dotted cursor-pointer" onClick={handleClick}>г. Южноуральск</div>
            {isListShowing && <div className="absolute top-8 -left-4 bg-white p-4 shadow-lg rounded-md border z-10 ">
                {cities
                    ? <ul className="flex flex-col whitespace-nowrap gap-3 gap-x-2 text-black flex-wrap">
                        {cities.map((city, i) => <li key={i} className="hover:text-sky-400 cursor-pointer">{city.name}</li>)
                            
                        }
                    </ul>
                    : "Loading"}
            </div>}
        </div>
    )
} 