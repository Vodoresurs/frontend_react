import Image from "next/image";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <>
      <Hero />

      <div className="bg-dark-sea">
        <div className="flex justify-center gap-6 w-[1196px] m-auto text-white py-20">
          <div className="text-lg w-1/6 font-bold">
            <h2>Об услуге</h2>
          </div>
          <div className="w-4/6 font-thin">
            Метрологическая поверка — это обязательная процедура, которая позволяет измерить погрешность водосчетчика. 
              Согласно Федеральному закону №102-ФЗ «Об обеспечении единства измерений», проходить поверку обязан каждый счетчик воды в сроки, 
              установленные заводом-изготовителем.
            <p className="mb-4">У нас работают только опытные специалисты, которые быстро и качественно осуществят поверку счетчика холодной и горячей воды. 
              Наша компания имеет государственную аккредитацию на оказание услуг по поверке и проводит официальную поверку на дому без снятия счетчика. 
              Копия аттестата есть с&nbsp;собой у каждого специалиста, номер аттестата можно проверить через сайт РосАккредитации. 
              После поверки срок службы счетчика продлевается на величину его межповерочного интервала, указанного в паспорте.</p>
          </div>
        </div>
      </div>

      <div className="w-[1196px] m-auto">
        <div className="w-4/6 m-auto rounded-md bg-slate-50 p-14 -mt-10 shadow-lg text-center">
          <h2 className="text-lg font-extrabold mb-10">Стоимость поверки одного счётчика</h2>
          <span className="px-2 py-4 bg-slate-100 rounded-md text-dark-sea font-black text-lg">654 руб.</span>
        </div>
      </div>

      <div>
        <div className="w-[1196px] m-auto py-20 text-center">
          
            <h2 className="text-lg font-extrabold mb-10">Когда нужно выполнять поверку и для чего?</h2>
          
          <div className="w-4/6 m-auto">
            <p className="mb-4">Сотрудники управляющих компаний фиксируют дату постановки счетчика на учет. Как только подходит к концу срок его эксплуатации, расчет потребляемой воды производится по общедомовым показаниями, а через 3 месяца по нормативу. По этой причине жильцы квартир получают квитанции с завышенными показаниями. Чтобы этого избежать необходимо пройти процедуру поверки счетчиков по истечению срока эксплуатации приборов.</p>
          </div>
        </div>
      </div>

      <div>
        <div className="w-[1196px] m-auto py-20">
          
            <h2 className="text-lg font-extrabold mb-10 text-center">Как все работает?</h2>
          
          <div className="w-4/6 m-auto text-sm">
            <ul className="flex justify-center">
              <li className="w-1/4 p-2">
                <div className="rounded-full w-10 h-10 bg-sky-400 mb-4 flex justify-center">
                  <span className="w-9 h-9 my-auto px-3 py-2 block text-white rounded-full border-2 border-white font-bold">1</span>
                </div>
                <h3 className="font-bold mb-4">Оформление заявки</h3>
                <span className="font-light">наш специалист свяжется с вами для согласованиея даты и времени работ</span>
              </li>
              <li className="w-1/4 p-2">
                <div className="rounded-full w-10 h-10 bg-sky-400 mb-4 flex justify-center">
                  <span className="w-9 h-9 my-auto px-3 py-2 block text-white rounded-full border-2 border-white font-bold">2</span>
                </div>
                <h3 className="font-bold mb-4">Выезд специалиста</h3>
                <span className="font-light">с необходимыми документами и оборудованием</span>
              </li>
              <li className="w-1/4 p-2">
                <div className="rounded-full w-10 h-10 bg-sky-400 mb-4 flex justify-center">
                  <span className="w-9 h-9 my-auto px-3 py-2 block text-white rounded-full border-2 border-white font-bold">3</span>
                </div>
                <h3 className="font-bold mb-4">Поверка</h3>
                <span className="font-light">в течение 20-25 минут: опробование, проверка порога чувствительности, герметичности, определение погрешности</span>
              </li>
              <li className="w-1/4 p-2">
                <div className="rounded-full w-10 h-10 bg-sky-400 mb-4 flex justify-center">
                  <span className="w-9 h-9 my-auto px-3 py-2 block text-white rounded-full border-2 border-white font-bold">4</span>
                </div>
                <h3 className="font-bold mb-4">Оформление документов </h3>
                <span className="font-light">отнесите документы в течение 2-х недель на регистрацию в расчетный орган
</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}