"use client";
import { FormEvent } from "react";
import { GsapReveal } from "@/components/GsapReveal";

export default function ContactPage() {
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    if (!formData.get("privacy")) {
      return;
    }
    const params = Object.fromEntries(formData.entries());
    const { privacy, ...o } = params;
    if (window.confirm("Please confirm?")) {
      const response = await fetch("/api/sendMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: o }),
      });
    }
  }

  return (
    <main className="contact-page min-h-screen px-[20px] md:px-10 pt-[164px] bg-[url('/img/9.png')] bg-cover bg-left ">
      <GsapReveal className="mx-auto w-full max-w-[1024px]">
        <section className="reveal-item rounded-4xl bg-white px-[20px] md:px-[40px]  lg:px-[87px]  shadow-xl pb-[77px] pt-[47px]">
          <div className="font-heading text-[32px] text-[#34364A]  font-normal text-center">
            Contáctenos
          </div>
          <form
            className="grid gap-y-[15px] md:grid-cols-2 md:gap-x-[130px] mt-[52px]"
            onSubmit={handleSubmit}
          >
            {[
              ["Monto a solicitar", "amount", "text"],
              ["Número de identificación", "document", "text"],
              ["Nombre", "name", "text"],
              ["Correo", "email", "email"],
              ["Apellido", "lastName", "text"],
              ["Teléfono", "phone", "tel"],
            ].map(([label, name, type]) => (
              <label className="grid gap-3 font-semibold" key={name}>
                <span className="text-[14px] font-semibold">{label}</span>
                <input
                  className="contact-input h-[60px] w-full rounded-full border-2 border-transparent bg-field px-7 text-ink transition"
                  autoFocus={name === "amount"}
                  name={name}
                  type={type}
                  required
                />
              </label>
            ))}
            <label className="col-span-full flex items-start justify-center gap-1 text-center text-[16px] font-normal text-[#888888] md:mt-4">
              <input
                className="mt-1 size-4 shrink-0"
                name="privacy"
                type="checkbox"
                required
              />
              <span>
                Al enviar su información, significa que ha leído la Política de
                Privacidad de Stellaro y acepta que Stellaro utilice sus datos
                en todas sus comunicaciones.
              </span>
            </label>
            <button
              className="col-span-full h-[60px] mx-auto mt-[30px] w-[370px] rounded-full   bg-[linear-gradient(154deg,_#C0EAFF_0%,_#02A0FF_100%)] text-[18px] font-medium text-white cursor-pointer"
              type="submit"
            >
              Enviar
            </button>
          </form>
        </section>
      </GsapReveal>
    </main>
  );
}
