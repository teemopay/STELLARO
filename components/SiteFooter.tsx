import Link from "next/link";
import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="bg-footer px-[20px] pt-[76px] font-footer md:px-10">
      <div className="mx-auto  w-full max-w-[1200px]  ">
        <div className="grid gap-12  lg:grid-cols-2">
          <div>
            <Link href="/">
              <Image width={312} height={98} src="/img/logo.png" alt="logo" />
            </Link>
            <p className="mt-[80px] text-[17px] text-[#6D6D6D] font-medium leading-[25px]">
              STELLARO GROUP S.A.C.-RUC 20615468054
            </p>
            <p className="mt-[11px] text-[17px] text-[#6D6D6D] font-medium leading-[25px]">
              Empresa inscrita en el registro de la SBS
            </p>
          </div>
          <div className="grid lg:grid-cols-2   gap-[60px]">
            <div>
              <div className="text-[17px] font-bold text-[#00A4F4]">
                Contacto
              </div>
              <div className="mt-[20px] text-[17px] text-[#6D6D6D]">Email:</div>
              <div className="mt-[17px] text-[17px] text-[#6D6D6D]">
                support@stellarogrp.com
              </div>
              <div className="mt-[17px] text-[17px] text-[#6D6D6D]">
                Dirección:
              </div>
              <div className="mt-[17px] text-[17px] text-[#6D6D6D]">
                AV. MARISCAL JOSE DE LA MAR 750,
              </div>
              <div className="mt-[17px] text-[17px] text-[#6D6D6D]">
                INT. 510, MIRAFLORES, LIMA，PERÚ
              </div>
            </div>
            <div>
              <div className="mb-2 text-[17px] font-bold text-[#00A4F4]">
                Legal
              </div>
              <div className="mt-[20px] text-[17px] text-[#6D6D6D]">
                <a
                  href="/Política de Privacidad.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Política de privacidad
                </a>
              </div>
              <div className="mt-[17px] text-[17px] text-[#6D6D6D]">
                <a
                  href="/TÉRMINOS Y CONDICIONES DE USO.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Términos y condiciones
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[58px] text-right text-[17px] font-semibold leading-[25px] text-[#B0B0B0] py-[28px]  border-[#B6E6FF] border-t-2">
          &copy;2026 STELLARO GROUP Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
