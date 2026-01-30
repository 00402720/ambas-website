import DonationsButtonFixed from "../components/buttons/donations-button-fixed";
import Navbar from "../components/NavBar";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Navbar />
      <DonationsButtonFixed />
      <main className="flex-1 w-full">
        {children}
      </main>
      <footer className="bg-gray-800 text-white p-8 w-full">
        <div className="w-full mx-auto flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Contacto</h3>
            <p>Correo: ambassv356@ambas.org</p>
          </div>
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Redes Sociales</h3>
            <p>Instagram: @ambas</p>
            <p>Facebook: /ambas</p>
          </div>
        </div>
      </footer>
    </div>
  );
}