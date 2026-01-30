import SponsorTurtleModal from "@/app/components/ModuleGodparent";

export default function Apadrinamiento(){
    return(
        <div>
            <section className="bg-[url('/nidos-tortol.jpg')] bg-cover bg-center lg:bg-unset w-full h-fit lg:h-screen
                flex flex-col lg:gap-0">
                <div className="bg-black/30 w-full py-6 px-8 lg:py-16 lg:px-16 flex flex-col
                    justify-top w-full h-fill lg:h-screen py-0 px-8 lg:py-16 lg:px-20 lg:!text-center"
                >
                    <h1 className="text-2xl lg:text-6xl text-left lg:text-center text-white lg:w-200 lg:mx-auto">
                    <b>APADRINA</b> UN NIDO
                </h1>
                <p className="text-sm text-center">
                    Al apadrinar un nido de tortugas marinas, te conviertes en parte activa de su protección. 
                    Tu apoyo permite resguardar los huevos de amenazas como el saqueo, la contaminación y 
                    los depredadores, además de apoyar el monitoreo y la liberación segura de las crías al mar.
                </p>
                <div className="flex justify-center py-20">
                    <SponsorTurtleModal buttonText="Apadrinar un Nido" />
                </div>
                </div>
            </section>
        </div>
    )
}