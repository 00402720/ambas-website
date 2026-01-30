import IconButton from "../components/buttons/icon-button"
import HeroCarousel, { HeroSlide } from "../components/CarrouselHero"
import CountUp from "../components/CountUp"
import DataCard from "../components/DataCard"

const slides: HeroSlide[] = [
  {
    title: "Juntas por las Tortugas",
    subtitle: "Trabajando unidas por la conservación de las tortugas marinas",
    image: "/ambas-mujeres.jpeg",
    buttonText: "Conoce a nuestro equipo",
    buttonHref: "/nosotros",
  },
  {
    title: "Comunidad y Conservación",
    subtitle: "Trabajando con comunidades locales e internacionales para proteger las tortugas marinas",
    image: "/ambas-gente-1.jpg",
  },
  {
    title: "Cada Acción Cuenta",
    subtitle: "Tu apoyo ayuda a dar una oportunidad a las tortugas marinas de sobrevivir y prosperar",
    image: "/donations-hero.jpg",
    buttonText: "Más Información",
    buttonHref: "/actividades",
  },
]

export default function MainLayout({
  children,
}: {
    children: React.ReactNode
}) {
  return (
      <>
      <HeroCarousel slides={slides}/>
        <div className="bg-[#054851] bg-cover bg-center w-full lg:h-fit 
            flex flex-col items-left justify-around text-white text-center
            py-8 px-8 lg:py-16 lg:px-16 flex-row gap-4"
        >
            <article>
                <h2 className="text-3xl lg:text-6xl text-left text-white align-text-bottom">AQUÍ EMPIEZA EL VIAJE DE</h2>
                <div className="flex flex-row items-center gap-2 lg:gap-4 ">
                    <CountUp end={100628} duration={1500} textSize="4xl lg:text-7xl" bold={true} align="left" />
                    <h2 className="text-3xl lg:text-6xl  text-left text-white !items-end">TORTUGAS</h2>
                </div>
                <p className="text-left text-sm"> 
                    Únete al cambio y ayúdanos a proteger la vida marina, restaurar nuestros
                        océanos y conservar el medio ambiente de El Salvador.
                </p>
            </article>
            <article>
                <img src="/turtle-drawing-2.svg" alt="turtle drawing" className="hidden lg:block lg:w-[400px]" />
            </article>
        </div>
        <div className="bg-[url('/laydown-turtles.jpeg')] bg-cover bg-center w-[100%] h-fit 
            flex flex-col items-left justify-top text-white text-center 
            py-8 px-4 
            lg:py-16 lg:px-16"
        >
            <article className="flex flex-col lg:flex-row justify-between ">
                <div className="flex flex-row lg:flex-col gap-2 lg:gap-0 justify-top lg:justify-left">
                    <h2 className="text-2xl lg:text-6xl lg:mb-4 w-fit font-bold text-left text-white">CONOCE</h2>
                    <h2 className="text-2xl lg:text-6xl lg:mb-4 w-fit text-left text-white">NUESTRO IMPACTO</h2>
                </div>
                <div className="flex mt-auto mb-8">
                    <IconButton
                        label="Reporte de Logros"
                        icon={<span className="material-icons !text-xl lg:!text-4xl align-middle text-black">download</span>}
                        href="/files/reporte-logros.pdf"
                        download="reporte-logros.pdf"
                        className="h-fit lg:h-25 lg:w-fit"
                        image="turtle-drawing-4.svg"
                    />
                </div>
            </article>
            <div className="items-center grid grid-cols-2 lg:flex lg:flex-col lg:flex-row gap-3 lg:gap-6 justify-center flex-wrap">
                <DataCard 
                title="Nidos Protegidos" 
                value={2983} 
                description="Nidos protegidos gracias a nuestros esfuerzos de conservación y el apoyo de nuestros heroes"
                tag="/donaciones"
                />
                <DataCard
                title="Charlas Realizadas"
                value={208}
                description="Charlas realizadas para concienciar a la comunidad sobre la importancia de la conservación de las tortugas"
                tag="/actividades"
                />
                <DataCard
                title="Alianzas con Instituciones"
                value={25}
                description="Uniones con instituciones que apoyan la preservación de las tortugas y su hábitat"
                tag="/patrocinadores"
                />
                <DataCard
                title="Publico Alcanzado"
                value={6256}
                description="Voluntarios dedicados que han contribuido a nuestras iniciativas de conservación"
                tag="/actividades"
                />
            </div>
            <p className="mt-2 text-sm lg:text-md text-white">Desde 2024*</p>
        </div>
        <div className="bg-[url('/godparent-nest.JPG')] bg-cover bg-center lg:bg-top w-full lg:h-fit 
            flex flex-col items-left text-white text-center 
            "
        >
            <div className="
                bg-black/20 w-full py-8 px-8 lg:py-16 lg:px-16 flex flex-col 
                lg:justify-start h-full "
            >
                <div className="flex flex-row lg:flex-row gap-2 lg:gap-4 justify-center lg:justify-left mb-80">
                    <h2 className="text-2xl lg:text-6xl lg:mb-4 w-fit font-bold text-left text-white">APADRINA</h2>
                    <h2 className="text-2xl lg:text-6xl lg:mb-4  text-left text-white">UN NIDO</h2>
                </div>
                <div className="h-full w-full justify-center">
                    <a href="/apadrina" className="bg-[#F03C2B] text-white px-4 py-4 rounded-lg 
                        hover:bg-[#F03C2B] transition-colors
                        text-sm lg:text-lg"
                    >
                        Apadrina un nido hoy
                    </a>
                </div>
            </div>
            
        </div>
      </>
  )
}