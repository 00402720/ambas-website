import CountUp from "@/app/components/CountUp"
import DataCard from "@/app/components/DataCard"

export default function TestPage({
  children,
}: {
    children: React.ReactNode
}) {
  return (
      <>
        <div className="bg-[url('/turtle-walk.JPG')] bg-cover bg-center w-full lg:h-screen 
            flex flex-col items-left justify-top text-white text-center
            py-16 px-8 
            lg:py-16 lg:px-32"
        >
            <h2 className="text-2xl lg:text-8xl w-160 text-left text-white align-text-bottom">AQUÍ EMPIEZA EL VIAJE DE</h2>
            <CountUp end={66560} duration={1500} textSize="4xl lg:text-8xl" bold={true} align="left" />
            <h2 className="text-2xl lg:text-8xl mt-4 w-160 text-left text-white">TORTUGAS</h2>
            <p className="text-left">Unete al cambio para recuperar las tortugas y recuperar el medio ambiente. </p>
        </div>
      </>
  )
}