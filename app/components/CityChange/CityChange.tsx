'use client'

import { useEffect, useState } from "react";
import type { InferGetStaticPropsType, GetStaticProps } from 'next'

interface City {
    id: number;
    name: string;
    price: string;
    phones: string[];
}


// export default function CityChange({ cities }: InferGetStaticPropsType<typeof getStaticProps>) {
export default function CityChange() {

    const [ isListShowing, setIsListShowing ] = useState(false);
    const [ cities, setCities ] = useState<City[]>([]);

    useEffect(() => {
        getCitiesData();
    }, [])

    const getCitiesData = async () => {
        try {
            const res = await fetch('https://aquapoverka.ru/api/v1/cities/')
            const cities: City[] = await res.json()
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
                        {cities.map(city => <li className="hover:text-sky-400 cursor-pointer">{city.name}</li>)
                            
                        }
                    </ul>
                    : "Loading"}
            </div>}
        </div>
    )
} 



// export const getStaticProps = (async (context) => {
//     const res = await fetch('https://aquapoverka.ru/api/v1/cities/')
//     const repo = await res.json()
//     return { props: { repo } }
//   }) satisfies GetStaticProps<{
//     repo: Repo
//   }>


//   export async function getStaticProps() {
    
//     const res = await fetch('https://aquapoverka.ru/api/v1/cities/')
//     const cities = await res.json()
   
   
//     return {
//       props: {
//         cities,
//       },
//     }
//   }