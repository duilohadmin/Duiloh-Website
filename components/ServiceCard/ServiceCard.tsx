import * as React from "react";
import Image from "next/image";
export interface ServiceCardProps {
  pic: string;
  title: string;
  subtitle: string;
  description: string;
}

export default function ServiceCard(props: ServiceCardProps) {
  return (
    <div
      className="bg-cream bg-opacity-80 p-5 text-black 
    shadow-md rounded-lg mb-14
    lg:max-w-[1000px]"
    >
      <h2 className="md:hidden text-center mb-2 md:text-left  text-[2rem] md:text-[4rem] font-sugar mt-4 md:mt-0 decoration-2 underline underline-offset-4">
        {props.title}
      </h2>
      <div className="flex flex-col md:flex-row">
        <div className=" bg-prim md:flex-1 relative h-96 md:h-auto -mt-2 sm:mt-0  justify-center items-center border border-prim">
          <Image
            src={props.pic}
            alt={`Duiloh-Service-${props.title}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="md:flex-1 md:pl-10 font-mont">
          <h2 className="hidden md:flex text-center md:text-left  text-[2rem] md:text-[4rem] font-sugar mt-4 md:mt-0 decoration-2 underline underline-offset-4">
            {props.title}
          </h2>
          <h3 className="text-lg mt-4 md:mt-0 md:text-xl font-mont font-bold">
            {props.subtitle}
          </h3>
          <p className="mt-2 mb-0 md:mb-12 text-base md:text-lg">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
}
