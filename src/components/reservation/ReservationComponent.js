import React, { useState } from "react";
import FormReservation from "./FormReservation";

export default function ReservationComponent({id}) {
  const [number, setNumber] = useState(false)
  return (
    <>
      <button
        className="bg-blue-900 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg hover:opacity-70 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setNumber(true)}
      >
        Reservar
      </button>
      {number ? <FormReservation id={id} setNumber={setNumber} /> : null}
    </>

  )
}
