import * as React from "react";
import Image from "next/image";
export interface ServiceCardProps {
  serviceName: string;
}

export default function ServiceCard(props: ServiceCardProps) {
  return (
    <div className="bg-cream p-5 text-black shadow-md rounded-lg lg:max-w-[1000px]">
      <div className="flex flex-col md:flex-row">
        <div className="md:flex-1 relative h-96 -mt-2 sm:mt-0">
          <Image
            src="/chessboard-darkwood.png"
            alt="Duiloh-Service"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
        <div className="md:flex-1 md:pl-10">
          <h2 className="text-3xl font-bold md:mt-0">{props.serviceName}</h2>
          <p className="mt-2">
            If you want unique Trap Melodies that stand out, Trap God is your
            secret weapon. This kit takes inspiration from chart-topping artists
            like 21 Savage, Future, Lil Baby, Gunna, Travis Scott, CuBeatz and
            more. Instantly giving you that hard Trap sound.
          </p>
          <ul className="list-disc pl-5 mt-4">
            <li>
              150+ Original Melody Loops: You&apos;ll never find yourself short
              of inspiration at any time with what seems like a never-ending
              supply of our hardest new loops!
            </li>
            <li>
              Grammy-Level Quality: Produced and recorded by award-winning
              session musicians to ensure your music stands out in the crowd.
            </li>
            <li>
              Authenticity to the Core: Elevate your music with 100% original
              loops that bleed that hard Trap feeling.
            </li>
          </ul>
          <div className="mt-4 font-bold text-xl">Value: $200</div>
        </div>
      </div>
    </div>
  );
}
