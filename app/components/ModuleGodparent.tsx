"use client"

import { useState } from "react"

interface SponsorTurtleModalProps {
  buttonText?: string
}

export default function SponsorTurtleModal({
  buttonText = "Apadrinar Nido",
}: SponsorTurtleModalProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Open Button */}
      <button
        onClick={() => setOpen(true)}
        className="rounded-xl bg-[#18FFF5] px-6 py-3 font-semibold text-black transition hover:bg-[#00B9B1]"
      >
        {buttonText}
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setOpen(false)}
          />

          {/* Modal Box */}
          <div className="relative z-10 w-[90%] max-w-md rounded-2xl bg-white p-6 shadow-xl">
            <h2 className="text-xl font-bold text-gray-800">
              Apadrinar Nido de Tortuga
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Completa la información para continuar
            </p>

            {/* Form */}
            <form className="mt-6 space-y-4">
              {/* Nombre */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Nombre
                </label>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-[#18FFF5] focus:outline-none focus:ring-1 focus:ring-[#18FFF5]"
                />
              </div>

              {/* Correo */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Correo Electronico
                </label>
                <input
                  type="text"
                  placeholder="Tu correo"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-[#18FFF5] focus:outline-none focus:ring-1 focus:ring-[#18FFF5]"
                />
              </div>

              {/* Especie */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Especie de tortuga
                </label>
                <select
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-[#18FFF5] focus:outline-none focus:ring-1 focus:ring-[#18FFF5]"
                >
                  <option value="">Seleccionar especie</option>
                  <option value="Golfina">Golfina</option>
                  <option value="Prieta">Prieta</option>
                  <option value="Baule">Baule</option>
                  <option value="Carey">Carey</option>
                </select>
              </div>

              {/* Redes */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Redes sociales <span className="text-gray-400">(opcional)</span>
                </label>
                <input
                  type="text"
                  placeholder="Instagram, Facebook, etc."
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-[#18FFF5] focus:outline-none focus:ring-1 focus:ring-[#18FFF5]"
                />
              </div>

              {/* Price */}
              <div className="flex items-center justify-between rounded-lg bg-gray-100 px-4 py-3">
                <span className="font-medium text-gray-700">Total</span>
                <span className="text-lg font-bold text-gray-900">$50</span>
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 font-medium text-gray-700 hover:bg-gray-100"
                >
                  Cancelar
                </button>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-[#18FFF5] px-4 py-2 font-semibold text-black transition hover:bg-[#00B9B1]"
                >
                  Confirmar compra
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
