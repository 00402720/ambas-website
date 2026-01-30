import DonationCard from "@/app/components/DonationCards";

export default function Patrocinadores(){
    return(
        <>
            <div className="bg-[url('/swimming-turtle.png')] bg-cover bg-center w-full lg:h-fit 
                flex flex-col items-left justify-top text-white text-center
                py-16 px-8 
                lg:py-16 lg:px-20"
            >
                <h1 className="text-2xl lg:text-8xl w-160 text-left text-white align-text-bottom">
                    CONVIÉRTETE EN <b>PROTECTOR</b> DE ELLAS
                </h1>
            </div>
            <section className="bg-[#00B9B1] w-full h-fit py-8 ">
                <div className="w-full h-fit flex flex-row items-center justify-center text-white text-center  gap-8">
                    <DonationCard title="Patrocinador Bronce" value={100} imageUrl="/turtle-drawing-3.svg"/>
                    <DonationCard title="Patrocinador Plata" value={250} imageUrl="/turtle-drawing-2.svg"/>
                    <DonationCard title="Patrocinador Oro" value={500} imageUrl="/turtle-drawing-1.svg"/>
                </div>
                <p className="text-center text-white mt-4">Contacta con nuestro equipo de patrocinadores para más información</p>
            </section>
            <section>
                <div className="bg-[url('/beach-turtles.jpeg')] bg-cover bg-center w-full lg:h-fit 
                    flex flex-col items-left justify-top text-white text-center 
                    py-16 px-8"
                    >
                    <h2 className="text-2xl lg:text-6xl w-160 text-left text-white align-text-bottom">
                        NUESTROS <b>PATROCINADORES</b>
                    </h2>
                    </div>
            </section>
        </>
    )
}