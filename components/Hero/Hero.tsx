'use client'

import Image from "next/image";
import Button from "../Button/Button";
import "./Hero.css"

export default function Hero() {
  return (
    <div className="bg-white">
      <div className="hero w-[1196px] max-h-[800px] m-auto py-40">
        <div className="flex justify-between mb-20">
          <div className="w-5/12">
            <h1 className="text-4xl font-black mb-8">Поверка счетчиков воды на дому без снятия</h1>
            <p className="mb-16 text-lg">Проверка точности передаваемых показаний и соответствие счетчика метрологическим характеристикам</p>
            <Button action={() => console.log("click")} text="Оставить заявку" />
            <p className="text-xs text-gray-400 w-1/2 mt-2 ml-1">заявки выполняются в день обращения или на следующий день</p>
          </div>
          <div className="w-1/2">
            <Image className="m-auto"src="/water-meter.png" alt="Счетчик воды" width="500" height="500"/>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex w-[280px] justify-between p-3 bg-gradient-to-b from-gray-50 to-slate-100 border-gray-400 rounded-md items-center">
              <div className="w-14 h-14 border rounded-md flex justify-center items-center">
                  <Image className="m-auto"src="/gost_icon.svg" alt="Счетчик воды" width="26" height="26"/>
              </div>
              <div className="w-3/4">Методика поверки по ГОСТ</div>
          </div>
          <div className="flex w-[280px] justify-between p-3 bg-gradient-to-b from-gray-50 to-slate-100 border-gray-400 rounded-md items-center">
              <div className="w-14 h-14 border rounded-md flex justify-center items-center">
                  <Image className="m-auto"src="/arshin_icon.svg" alt="Счетчик воды" width="26" height="26"/>
              </div>
              <div className="w-3/4">Внесение результата в ФГИС «АРШИН»</div>
          </div>
          <div className="flex w-[280px] justify-between p-3 bg-gradient-to-b from-gray-50 to-slate-100 border-gray-400 rounded-md items-center">
              <div className="w-14 h-14 border rounded-md flex justify-center items-center">
                  <Image className="m-auto"src="/accreditation_icon.svg" alt="Счетчик воды" width="24" height="26"/>
              </div>
              <div className="w-3/4">Аккредитованные метрологи</div>
          </div>
          <div className="flex w-[280px] justify-between p-3 bg-gradient-to-b from-gray-50 to-slate-100 border-gray-400 rounded-md items-center">
              <div className="w-14 h-14 border rounded-md flex justify-center items-center">
                  <Image className="m-auto"src="/meter_icon.svg" alt="Счетчик воды" width="26" height="26"/>
              </div>
              <div className="w-3/4">Замена счётчика, непрошедшего поверку</div>
          </div>
        </div>
      </div>
    </div>
  );
}
