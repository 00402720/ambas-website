import RadioButtonAmount from "@/app/components/buttons/radio-button-ammount";

export default function DonationsPage() {
  return (
    <div className="h-fit lg:flex flex-row bg-gray-100 text-black relative lg:static pb-[35vh] lg:pb-0">

      <article className="p-8">
        <a href="/">
          <img src="/ambas-logo-transparente.png" alt="Logo AMBAS" className="w-24 lg:w-32 h-auto mb-4" />
        </a>
        <h1 className="text-4xl lg:text-7xl font-bold">JUNTOS PODEMOS HACER MÁS</h1>
        <p className="text-lg lg:text-2xl mb-4">Tu donación fortalece nuestra misión</p>
        <img src="/donations-hero.jpg" alt="Donaciones" className="rounded-lg shadow-md mb-4" />
        <p className="text-lg lg:text-lg">
          En AMBAS El Salvador trabajamos día a día para proteger a las tortugas marinas, 
          una de las especies más emblemáticas y vulnerables de nuestras costas. 
          A través de acciones de conservación, monitoreo, educación ambiental y protección de nidos, 
          buscamos asegurar que futuras generaciones puedan seguir viendo nacer tortuguitas en nuestras playas.
        </p>
        
      </article>



      <article className="
        flex flex-col items-center 
        bg-white p-8 shadow-md gap-8 
        w-full lg:min-w-1/3
        fixed lg:static
        bottom-0 left-0
        "
      >
        <div className="flex flex-col items-center w-fit h-fit lg:gap-8 static lg:fixed top-1/4">
          <h2 className="text-lg lg:text-4xl">Haz tu donación</h2>
          <div className="grid grid-cols-3 gap-4 w-full max-w-md">
            <RadioButtonAmount amount={10} />
            <RadioButtonAmount amount={20} />
            <RadioButtonAmount amount={50} />
            <RadioButtonAmount amount={100} />
            <RadioButtonAmount amount={200} />
            <RadioButtonAmount amount={500} />
          </div>

          <button
            className="
              bg-[#F03C2B] text-white
              px-4 py-3 rounded-md
              w-full md:w-48
              flex items-center justify-center
              cursor-pointer mt-2
            ">
            <p className="whitespace-nowrap text-lg">Donar Ahora</p>
          </button>
        </div>
      </article>
    </div>
  );
}