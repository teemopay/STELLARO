import Link from "next/link";
import { GsapReveal } from "@/components/GsapReveal";
import { TextReveal } from "@/components/TextReveal";
import Image from "next/image";
const steps = [
  [
    "1",
    "Completa tu solicitud",
    "Ingresa tus datos básicos a través de nuestro formulario en línea.",
  ],
  [
    "2",
    "Verificamos tu información",
    "Validamos tus datos para continuar con el proceso de forma segura.",
  ],
  [
    "3",
    "Evaluamos tu solicitud",
    "Analizamos tu información y determinamos las condiciones disponibles para ti.",
  ],
  [
    "4",
    "Recibe tu préstamo",
    "Si tu solicitud es aprobada y aceptas las condiciones, recibirás el dinero en tu cuenta.",
  ],
];

const requirements = [
  "DNI vigente",
  "Ser mayor de 18 años",
  "Celular activo",
  "Cuenta bancaria",
];

const uses = ["Emergencias", "Gastos personales", "Proyectos"];

const reasons = [
  [
    "Proceso en línea",
    "Realiza tu solicitud sin necesidad de acudir a una oficina.",
  ],
  ["Respuesta rápida", "Procesamos tu solicitud de manera ágil."],
  [
    "Condiciones claras",
    "Conoce la información relevante de tu préstamo antes de aceptarlo.",
  ],
  [
    "Tus datos protegidos",
    "Tratamos tu información personal de acuerdo con nuestra Política de Privacidad.",
  ],
];

const reasonDescriptionWidths = [
  "max-w-[276px]",
  "max-w-[301px]",
  "max-w-[396px]",
  "max-w-[324px]",
];

const faqs = [
  [
    "¿Qué necesito para solicitar un préstamo?",
    "Debes cumplir con los requisitos establecidos y proporcionar la información solicitada durante el proceso.",
  ],
  [
    "¿Cuánto puedo solicitar?",
    "El monto disponible dependerá de la evaluación de tu solicitud.",
  ],
  [
    "¿Cuánto tiempo tarda el proceso?",
    "El tiempo puede variar según la información proporcionada y el proceso de validación correspondiente.",
  ],
  [
    "¿Cuánto voy a pagar?",
    "Antes de aceptar el préstamo podrás conocer la tasa aplicable, los costos correspondientes y el monto total a pagar.",
  ],
  [
    "¿Cómo recibiré el dinero?",
    "Si tu solicitud es aprobada y aceptas las condiciones, el desembolso será realizado a la cuenta bancaria indicada.",
  ],
  [
    "¿Qué pasa si no puedo pagar a tiempo?",
    "Si tienes dificultades para realizar un pago, puedes comunicarte con nosotros a través de nuestros canales oficiales de atención.",
  ],
];

export default function Home() {
  return (
    <main>
      <section className="relative bg-[url('/img/section.png')] bg-cover bg-left  px-[20px] md:px-10 min-h-[887px]">
        <div className="relative mx-auto lg:grid w-full max-w-[1200px] lg:grid-cols-[minmax(0,657px)_1fr] pt-[60px]  lg:pt-[173px] font-semibold">
          <div className="w-full mt-[80px]">
            <TextReveal className="font-heading text-[48px] text-[#3D3D3D] leading-[58px] font-normal">
              <span className="title-highlight">El préstamo</span> que
              necesitas, de forma simple y segura. 
            </TextReveal>
            <TextReveal
              delay={0.5}
              className="mt-[29px] text-[16px] leading-[25px] text-[#4F4F4F] font-semibold max-w-[582px]"
            >
              Solicita tu préstamo en línea y descubre una alternativa de
              financiamiento adaptada a tus necesidades.
            </TextReveal>
            <TextReveal as="div" delay={0.8} className="mt-[107px]">
              <Link
                className="font-heading home-btn flex items-center justify-center text-[25px] text-white cursor-pointer"
                href="/contact"
              >
                Solicitar ahora
              </Link>
            </TextReveal>
          </div>
          <Image
            className="w-full md:min-w-[400px]  max-w-[593px] max-h-[603px]  mx-auto mt-10 lg:mt-0"
            width={593}
            height={603}
            src="/img/1.png"
            alt="logo"
          />
        </div>
      </section>
      <section className="bg-[#F5FBFF] pt-[120px] pb-[106px] px-[20px] md:px-10">
        <div className="mx-auto  max-w-[1070px]">
          <TextReveal className="font-heading text-[48px] text-[#3D3D3D] leading-[58px] font-normal text-center">
            <span className="title-highlight">Solicitar es más fácil</span> de
            lo que imaginas
          </TextReveal>
          <div className="mt-[74px] lg:grid w-full  lg:grid-cols-[minmax(0,510px)_1fr] lg:gap-x-[40px] xl:gap-x-[89px]">
            <GsapReveal direction="left">
              <Image
                className="w-full mx-auto mt-10 lg:mt-0 "
                width={510}
                height={574}
                src="/img/2.png"
                alt="logo"
              />
            </GsapReveal>
            <GsapReveal direction="right">
              <div className="mt-10 lg:mt-0 lg:pt-0">
                {steps.map(([number, title, description], index) => (
                  <div
                    key={number}
                    className="relative flex gap-4 pb-[59px] last:pb-0"
                  >
                    {index < steps.length - 1 && (
                      <div className="absolute bottom-0 left-[27.5px] top-[55px] border-l-2 border-dashed border-[#B6E6FF]" />
                    )}
                    <div className="relative z-10 flex h-[55px] w-[55px] shrink-0 items-center justify-center rounded-full bg-[linear-gradient(154deg,_#C0EAFF_0%,_#02A0FF_100%)] text-[28px] font-bold text-white">
                      {number}
                    </div>
                    <div className="pt-[6px]">
                      <h3 className="font-heading text-[32px] leading-[42px] font-normal text-[#3D3D3D]">
                        {title}
                      </h3>
                      <p className="mt-[14px] max-w-[352px] text-[16px] leading-[26px] font-medium text-[#6D6D6D]">
                        {description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </GsapReveal>
          </div>
        </div>
      </section>
      <section className="relative bg-white pt-[122px] pb-[76px] px-[20px] md:px-10">
        <div className="absolute left-0 top-0 w-full h-full bg-[url('/img/3.png')] bg-cover bg-right z-1"></div>
        <div className=" relative mx-auto  max-w-[1288px] z-40">
          <TextReveal className="font-heading text-[48px] text-[#3D3D3D] leading-[58px] font-normal text-center">
            <span className="title-highlight">Lo que necesitas</span> para
            solicitar
          </TextReveal>
          <TextReveal
            delay={0.5}
            className="text-[17px] text-[#4F4F4F] leading-[25px] font-semibold text-center mt-4"
          >
            Pensado para hacerte la vida más fácil
          </TextReveal>
          <div className="mt-[115px] grid gap-[14px] gap-y-[40px] md:grid-cols-2 xl:grid-cols-4">
            {requirements.map((requirement, index) => (
              <div
                key={requirement}
                className="group relative isolate flex min-h-[382px] flex-col justify-end overflow-hidden rounded-[16px] bg-[#F3FAFE] px-[24px] pb-[60px] text-[#0069AB] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] before:absolute before:-bottom-[150%] before:-left-[150%] before:z-0 before:h-[300%] before:w-[300%] before:origin-center before:scale-0 before:rounded-full before:bg-[linear-gradient(154deg,_#B7EAFF_0%,_#00A2F2_100%)] before:transition-transform before:duration-700 before:ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[10px] hover:before:scale-100 cursor-pointer"
              >
                <span className="relative z-10 self-end pt-[19px] text-[10px] font-bold text-[#0069AB] opacity-80 group-hover:text-white">
                  0{index + 1}
                </span>
                <h3 className="relative z-10 mt-auto  font-heading text-[32px] leading-[40px] font-normal text-[#0069AB] group-hover:text-white">
                  {requirement}
                </h3>
                <p className="relative z-10 mt-[11px] text-[16px] leading-[22px] text-[#6D84A6] group-hover:text-white">
                  {
                    [
                      "Un documento de identidad válido.",
                      "Cumplir con la edad requerida para solicitar.",
                      "Un número de teléfono disponible para validar tu información.",
                      "Una cuenta a tu nombre para recibir el desembolso.",
                    ][index]
                  }
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#F5FBFF] pt-[156px] pb-[107px] px-[20px] md:px-10">
        <div className="mx-auto grid max-w-[1044px] items-center  lg:grid-cols-[526px_1fr] lg:px-0 gap-y-[40px]">
          <GsapReveal direction="left">
            <div>
              <TextReveal className="font-heading md:max-w-[526px] text-[48px] leading-[58px]  text-[#3D3D3D]">
                <span className="title-highlight">¿Para qué</span> puedes usar
                tu préstamo?
              </TextReveal>
              <TextReveal
                delay={0.5}
                className="mt-[30px] text-[16px] leading-[22px]  text-[#6D84A6]"
              >
                Una opción para diferentes necesidades
              </TextReveal>
            </div>
          </GsapReveal>
          <GsapReveal direction="right">
            <div className="flex flex-col gap-[34px]">
              {uses.map((use, index) => (
                <div
                  key={use}
                  className={`flex min-h-[162px] lg:w-[440px]  gap-[20px] py-[30px] rounded-[20px] bg-white px-[30px] shadow-[0_4px_40px_rgba(20,167,255,0.08)] ${
                    index === 1
                      ? "lg:ml-0"
                      : index === 2
                        ? "lg:ml-[70px]"
                        : "lg:ml-[70px]"
                  }`}
                >
                  <Image
                    className="w-full max-w-[50px] max-h-[50px] shrink-0 object-contain"
                    width={50}
                    height={50}
                    src="/img/8.png"
                    alt="logo"
                  />
                  <div>
                    <h3 className="font-heading text-[32px] leading-[40px] font-normal text-[#3D3D3D]">
                      {use}
                    </h3>
                    <p className="mt-[10px] max-w-[310px]  text-[16px] leading-[26px]  text-[#6D84A6]">
                      {
                        [
                          "Para cubrir gastos inesperados cuando más lo necesitas.",
                          "Para compras y necesidades importantes de tu día a día.",
                          "Para avanzar con tus planes personales o pequeños proyectos.",
                        ][index]
                      }
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </GsapReveal>
        </div>
      </section>
      <section className="relative bg-[url('/img/5.png')] bg-cover bg-right pt-[99px] pb-[62px] px-[20px] md:px-10">
        <div className="mx-auto grid max-w-[1200px] items-center z-10">
          <TextReveal className="font-heading  text-[48px] leading-[58px]  text-[#3D3D3D]">
            ¿Por qué elegirnos?
          </TextReveal>
          <div className="mt-[47px] grid gap-[40px] md:grid-cols-2">
            {reasons.map(([title, description], index) => (
              <article
                className="flex  min-h-[252px] items-start gap-[12px] md:gap-[33px] rounded-[20px] bg-white px-[20px] md:px-[65px] pt-[46px] hover:shadow-[0_18px_35px_rgba(46,164,224,0.08)] cursor-pointer"
                key={index}
              >
                <Image
                  className="h-[55px] w-[55px] shrink-0 object-contain"
                  src={`/img/card-${index + 1}.png`}
                  width={55}
                  height={55}
                  alt=""
                />
                <div className="flex-1">
                  <h3 className="font-heading text-[38px] leading-[38px] font-normal text-[#3D3D3D]">
                    {title}
                  </h3>
                  <p
                    className={`mt-[19px] text-[16px] leading-[28px] text-[#6D84A6] ${reasonDescriptionWidths[index]}`}
                  >
                    {description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#F5FBFF] pt-[120px] pb-[177px] px-[20px] md:px-10">
        <div className="mx-auto  max-w-[1200px]">
          <TextReveal className="font-heading  text-[48px] leading-[58px]  text-[#3D3D3D] text-center">
            Preguntas frecuentes
          </TextReveal>
          <div className="mt-[137px] grid gap-[38px]">
            {faqs.map(([question, answer]) => (
              <article className="flex flex-col gap-[15px]" key={question}>
                <div className="flex  gap-[16px]">
                  <Image
                    className="mt-[12px] h-[30px] w-[30px] shrink-0 object-contain"
                    src="/img/user-1.png"
                    width={30}
                    height={30}
                    alt=""
                  />
                  <h3 className="flex max-w-[705] min-h-[53px] flex-1 items-center rounded-[11px] border border-[#E2E8F0] px-[14px] text-[20px] leading-[20px] font-semibold text-[#1B2559]">
                    {question}
                  </h3>
                </div>
                <div className="flex gap-[15px] self-end">
                  <Image
                    className="mt-[12px] h-[30px] w-[30px] shrink-0 object-contain"
                    src="/img/user-2.png"
                    width={30}
                    height={30}
                    alt=""
                  />
                  <p className="order-first max-w-[705] min-h-[106px] flex-1 rounded-[11px] bg-white px-[27px] py-[23px] text-[18px] leading-[30px] font-medium text-[#1B2559] shadow-[11px_20px_34px_3px_rgba(122,188,255,0.2)] ">
                    {answer}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      {/* 最后一个模块 */}
      <section className="relative bg-[url('/img/6.png')] bg-cover bg-left pt-[82px] pb-[126px] px-[20px] md:px-10">
        <div className="mx-auto lg:grid max-w-[1200px] items-center grid-cols-[1fr_547px] gap-[50px]">
          <GsapReveal direction="left">
            <div className="font-heading  text-[48px] leading-[58px]  text-[#3D3D3D]">
              ¿Necesitas un préstamo?
            </div>
            <div className="mt-[28px] text-[18px]   text-[#888888]">
              Haz tu solicitud en línea y conoce las condiciones disponibles
              para ti.
            </div>
            <Link
              className="font-heading home-btn mt-[94px] flex items-center justify-center text-[25px] text-white cursor-pointer"
              href="/contact"
            >
              Solicitar ahora
            </Link>
          </GsapReveal>
          <GsapReveal direction="right">
            <Image
              className="w-full max-w-[547px] max-h-[689px]  mx-auto mt-10 lg:mt-0"
              width={547}
              height={689}
              src="/img/7.png"
              alt="logo"
            />
          </GsapReveal>
        </div>
      </section>
    </main>
  );
}
