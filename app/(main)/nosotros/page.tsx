import PersonCard from "@/app/components/PersonCard";

export default function Nosotros(){
    return(
        <div>
            <section className="bg-[url('/ambas-gente-2.jpg')] bg-cover bg-center lg:bg-unset w-full h-fit lg:h-screen
                py-4 px-8 lg:py-16 lg:px-16 flex flex-col gap-16 lg:gap-0 justify-center lg:justify-around">
                <h1 className="text-2xl lg:text-6xl text-left lg:text-center text-white lg:w-200 lg:mx-auto">
                    <b>CONOCE</b> A NUESTRO EQUIPO
                </h1>
                <p className="text-sm text-center">Más que una asociación, somos las manos que protegen el 
                    futuro marino de El Salvador. Un equipo de mujeres líderes, técnicos y voluntarios 
                    unidos por una Fuerza Colectiva: asegurar la supervivencia de la tortuga marina a 
                    través del trabajo incansable, la transparencia y el amor por nuestra biodiversidad.
                </p>
            </section>
            <section className="p-4 bg-white flex flex-col lg:flex-row m-auto gap-8 justify-center items-center flex-wrap">
                <PersonCard name="Juan Pérez" src="/juan.jpg" rol="Expositor"/>
                <PersonCard name="Dora Matrínez" src="/dora.jpg" rol="Logistica"/>
                <PersonCard name="Eder Caceros" src="/eder.jpg" rol="Biologo Marino"/>
            </section>
        </div>
    )
}