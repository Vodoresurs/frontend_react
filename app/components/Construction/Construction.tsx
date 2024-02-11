// import styles from "@/app/components/Construction/Construction.module.scss"
import "./Construction.css"
import Image from 'next/image'
import "@/public/logo-hr.png"

const Construction = () => {
    return (
        <div>
            <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2">
                <Image src={`/logo-hr.png`} alt="logo" width="200" height="200"/>
                <h1 className="text-4xl	text-center font-bold text-cyan-800">Vodoresurs</h1>
                <div className="text-center font-sans font-medium text-slate-400">Сайт в разработке</div>
            </div>
            <div className="ocean">
                <div className="wave"></div>
                <div className="wave"></div>
            </div>
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 ">
                <span className="text-white"><a href="/">aquapoverka.ru</a> | 2024</span>
            </div>
        </div>
    )
}

export default Construction;