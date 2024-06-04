import React from "react";
import Image from "next/image";
import Link from "next/link";

interface SongCardProps {
  imgSrc: string;
  name: string;
  spotify: string;
  apple: string;
  youtube: string;
  soundcloud: string;
}

function SongCard({
  imgSrc,
  name,
  spotify,
  apple,
  youtube,
  soundcloud,
}: SongCardProps) {
  return (
    <div className="flex flex-col h-full shadow-lg">
      <div className="relative flex-grow cursor-pointer overflow-hidden">
        <div className="transition-transform duration-1000 ease-in-out hover:scale-110">
          <Link href={youtube} rel="noopener noreferencer" target="_blank">
            <div className="relative w-full h-0 pb-[100%]">
              <Image
                src={imgSrc}
                alt="song"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </Link>
        </div>
      </div>
      <div className="flex-grow bg-cream pb-4">
        <div className="h-14 flex flex-col justify-center">
          <p
            className=" mt-2 text-sm px-2
                          lg:text-lg
                          font-medium 
                        text-black text-center transform: uppercase"
          >
            {name}
          </p>
        </div>

        <div
          className="flex items-center justify-center
                        my-1 mb-2 
                        lg:my-2"
        >
          <Link
            href={spotify}
            passHref
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              src={"/spotify-fill.svg"}
              alt="spotify"
              width={30}
              height={30}
              className="cursor-pointer mr-2"
            ></Image>
          </Link>
          <Link href={apple} passHref rel="noopener noreferrer" target="_blank">
            <Image
              src={"/apple-fill.svg"}
              alt="apple"
              width={30}
              height={30}
              className="cursor-pointer -mt-1 mr-2 "
            ></Image>
          </Link>
          <Link
            href={youtube}
            passHref
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              src={"/youtube-black.svg"}
              alt="youtube"
              width={30}
              height={30}
              className="cursor-pointer mr-2"
            />
          </Link>
          <Link
            href={soundcloud}
            passHref
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              src={"/soundcloud-black.svg"}
              alt="soundcloud"
              width={30}
              height={30}
              className="cursor-pointer"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SongCard;
