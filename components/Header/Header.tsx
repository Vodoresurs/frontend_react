// import styles from './Header.module.scss'
'use client'
import Image from "next/image"
import Link from "next/link";
import CityChange from "../CityChange/CityChange";
import {useCurrentCity} from "@/app/providers/CityProvider";
import { ICity } from "@/app/interfaces/ICity";
import { useEffect, useMemo } from "react";

const Header:React.FC = () => {
    const { currentCity, setCurrentCity } = useCurrentCity();

    const phone = useMemo(
        () => currentCity.phones[0].replace(/\D+/g, '').replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, '+$1 ($2) $3-$4-$5'),
        [currentCity]
    )

    

    return (
        <header className="">
            <div className="bg-gradient-to-b from-slate-100 to-gray-50 border-slate-100 border-b">
                <div className="flex justify-between w-[1196px] m-auto py-2 items-center text-gray-400 text-sm">
                    <CityChange />
                    <a href="https://admin.aquapoverka.ru">
                        <Image src={`/signin_icon.svg`} className="inline mr-2" alt="logo" width="16" height="16"/>
                        <span>Вход для партнёров</span>
                    </a>
                </div>
            </div>
            <div className="bg-white">
                <div className="flex justify-between w-[1196px] m-auto py-4 items-center">
                    <div className="w-[270px]">
                        <Image src={`/Logo_site.svg`} alt="logo" width="200" height="200"/>
                    </div>
                    <ul className="flex gap-6">
                        <li><Link href="/">Главная</Link></li>
                        <li><Link href="/partner">Сотрудничество</Link></li>
                        <li><Link href="/about">О компании</Link></li>
                        <li><Link href="/contact">Контакты</Link></li>
                    </ul>
                    <div className="font-extrabold text-xl text-dark-sea">
                        <a href={`tel:${currentCity.phones[0]}`}>{phone}</a>
                    </div>
                </div>
            </div>
            
        </header>
    )
}

export default Header;