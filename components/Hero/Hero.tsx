'use client'

import Image from "next/image";
import Button from "../Button/Button";
import { motion, easeIn } from 'framer-motion'
import "./Hero.css"

export default function Hero() {
  return (
    <div className="bg-white">
      <div className="hero w-[1196px] max-h-[800px] m-auto py-40">
        <div className="flex justify-between mb-20">
          <div className="w-5/12">
            <motion.h1 className="text-4xl font-black mb-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                ease: [0, 0.71, 0.2, 1.01]
              }}
            >
              Поверка счетчиков воды на дому без снятия
            </motion.h1>
            <motion.p className="mb-16 text-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.2,
                ease: [0, 0.71, 0.2, 1.01]
              }}
            >Проверка точности передаваемых показаний и соответствие счетчика метрологическим характеристикам</motion.p>
            <motion.div className=""
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.4,
                ease: [0, 0.71, 0.2, 1.01]
              }}
            >
              <Button action={() => console.log("click")} text="Оставить заявку" />
              <p className="text-xs text-gray-400 w-1/2 mt-2 ml-1">заявки выполняются в день обращения или на следующий день</p>
            </motion.div>
          </div>
          <div className="w-1/2">
            <motion.img className="m-auto"src="/water-meter.png" alt="Счетчик воды" width="500" height="500"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.4,
                ease: [0, 0.71, 0.2, 1.01]
              }}
            />
          </div>
        </div>
        <div className="flex justify-between">
          <motion.div className="flex w-[280px] justify-between p-3 bg-gradient-to-b from-gray-50 to-slate-100 border-gray-400 rounded-md items-center"
            initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                delay: 1,
                ease: [0, 0.71, 0.2, 1.01]
              }}
          >
              <div className="w-14 h-14 border rounded-md flex justify-center items-center">
                  <Image className="m-auto"src="/gost_icon.svg" alt="Счетчик воды" width="26" height="26"/>
              </div>
              <div className="w-3/4">Методика поверки по ГОСТ</div>
          </motion.div>
          <motion.div className="flex w-[280px] justify-between p-3 bg-gradient-to-b from-gray-50 to-slate-100 border-gray-400 rounded-md items-center"
            initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                delay: 1.1,
                ease: [0, 0.71, 0.2, 1.01]
              }}
          >
              <div className="w-14 h-14 border rounded-md flex justify-center items-center">
                  <Image className="m-auto"src="/arshin_icon.svg" alt="Счетчик воды" width="26" height="26"/>
              </div>
              <div className="w-3/4">Внесение результата в ФГИС «АРШИН»</div>
          </motion.div>
          <motion.div className="flex w-[280px] justify-between p-3 bg-gradient-to-b from-gray-50 to-slate-100 border-gray-400 rounded-md items-center"
            initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                delay: 1.2,
                ease: [0, 0.71, 0.2, 1.01]
              }}
          >
              <div className="w-14 h-14 border rounded-md flex justify-center items-center">
                  <Image className="m-auto"src="/accreditation_icon.svg" alt="Счетчик воды" width="24" height="26"/>
              </div>
              <div className="w-3/4">Аккредитованные метрологи</div>
          </motion.div>
          <motion.div className="flex w-[280px] justify-between p-3 bg-gradient-to-b from-gray-50 to-slate-100 border-gray-400 rounded-md items-center"
            initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                delay: 1.3,
                ease: [0, 0.71, 0.2, 1.01]
              }}
          >
              <div className="w-14 h-14 border rounded-md flex justify-center items-center">
                  <Image className="m-auto"src="/meter_icon.svg" alt="Счетчик воды" width="26" height="26"/>
              </div>
              <div className="w-3/4">Замена счётчика, непрошедшего поверку</div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
