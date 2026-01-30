import MailButton from "@/app/components/buttons/mail-button";
import DonationCard from "@/app/components/DonationCards";
import SponsorContainer from "@/app/components/SponsorContainer";

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
                <article className="flex flex-row justify-center mt-4">
                    <p className="text-center text-white mt-4">Contacta con nuestro equipo de patrocinadores para más información</p>
                    <MailButton text="Contactar"/>
                </article>
            </section>
            <section>
                <div className="bg-[url('/turtle-walk.jpg')] bg-cover bg-center w-full lg:h-fit 
                    flex flex-col items-left justify-top text-white text-center 
                    py-16 px-8 
                    lg:py-16 lg:px-20"
                    >
                    <h2 className="text-2xl lg:text-6xl w-160 text-left text-white align-text-bottom">
                        NUESTROS <b>PATROCINADORES</b>
                    </h2>
                    <article className="flex flex-wrap gap-8 mt-8 justify-center gap-8">
                        <SponsorContainer src="/fiaes-logo.webp" alt="FIAES Logo"/>
                        <SponsorContainer src="/global-giving-logo.webp" alt="Global Giving Logo"/>
                        <SponsorContainer src="/marn-logo.png" alt="MARN Logo"/>
                        <SponsorContainer src="/avianca-logo.png" alt="Avianca Logo"/>
                        <SponsorContainer src="/universidad-don-bosco.jpg" alt="Universidad Don Bosco Logo"/>
                        <SponsorContainer src="/istu-logo.jpg" alt="Instituto Salvadoreño de Turismo Logo" />
                    </article>
                    </div>
            </section>
        </>
    );
}