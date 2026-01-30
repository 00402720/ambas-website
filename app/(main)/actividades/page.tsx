import IconButton from "@/app/components/buttons/icon-button";
import ImageCarousel from "@/app/components/carrousel-small";

const images =[
    {id:1, src:'/fechas-liberaciones.png'},
    {id:2, src:'/liberacion-tortugas-2.jpg'},
    {id:3, src:'/liberacion-tortugas-12.jpg'}, 
]

export default function Actividades(){
    return(
        <div>
            <section className="bg-[url('/charla-hero.jpg')] bg-cover bg-center w-full h-fit lg:h-screen"
            >
                <div className="bg-black/30 w-full py-6 px-8 lg:py-16 lg:px-16 flex flex-col
                lg:justify-start w-full h-fill lg:h-screen py-0 px-8 lg:py-16 lg:px-20 lg:!text-center lg:!justify-center"
                >
                    <h1 className="text-3xl lg:text-6xl text-left lg:text-center text-white mt-10 lg:w-200 lg:mx-auto">
                        <b>ÚNETE</b> A NUESTRAS ACTIVIDADES
                    </h1>
                    <p className="text-sm lg:text-lg">Participa junto a nosotros en nuestras actividades para la conservación</p>
                    <div className="h-40"></div>
                    <a aria-label="Chat on WhatsApp" href="https://wa.me/50368394587" 
                    className="flex w-fit h-fit bg-[#25d366] items-center px-2 py-1 rounded-lg gap-2 m-auto">
                        <p>Escribenos a nuestro WhatsApp</p>
                        <img alt="Chat on WhatsApp" src="/whatsapp.png" className="w-10"/>
                    </a>
                </div>
            </section>
            <section className="flex flex-col bg-[#EDDCC8]">
                <div className="bg-[url('/textura-ambas.png')] bg-top lg:bg-bottom p-4 lg:py-4 lg:px-16 w-full">
                <h2 className="text-3xl lg:text-6xl text-left text-white align-text-bottom mt-10 mb-4">
                    <b>PROXIMAS ACTIVIDADES</b>
                </h2>
                <ImageCarousel images={images} />
                </div>
            </section>
            
        </div>
    )
}