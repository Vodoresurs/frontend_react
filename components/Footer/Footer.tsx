import Image from "next/image"
import Link from "next/link";

const Footer:React.FC = () => {
    return (
        <footer className="mt-10 bg-white">
            <div className="flex justify-between w-[1196px] m-auto py-10">
                <div className="flex gap-4 items-start">
                    <Image className="mt-1" src={`/mail.svg`} alt="logo" width="30" height="30"/>
                    <div>
                        <span className="font-bold block">Напишите нам</span>
                        <a href="mailto:info@aquapoverka.ru" className="block">info@aquapoverka.ru</a>
                    </div>
                </div>
                <ul className="flex gap-4 text-gray-500">
                        <li><Link href="/">Главная</Link></li>
                        <li><Link href="/partner">Сотрудничество</Link></li>
                        <li><Link href="/about">О компании</Link></li>
                        <li><Link href="/contact">Контакты</Link></li>
                </ul>
            </div>
            <div className="bg-gradient-to-b from-slate-100 to-gray-50 border-slate-100 border-t">
                <div className="flex justify-between w-[1196px] m-auto py-4 items-center text-slate-400">
                    <div className="w-1/6">
                        <Image src={`/Logo_site_slate.svg`} alt="logo" width="200" height="200"/>
                    </div>
                    <span className="text-center">2024 | Единая региональная метрологическая служба</span>
                    <ul className="flex gap-2 w-1/6 justify-end">
                        <li><a href="https://vk.com/"><Image src={`/vk_logo.svg`} alt="logo" width="20" height="20"/></a></li>
                        <li><a href="https://t.me/"><Image src={`/tg_logo.svg`} alt="logo" width="20" height="20"/></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;