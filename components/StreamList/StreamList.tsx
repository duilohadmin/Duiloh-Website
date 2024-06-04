import Link from "next/link";
import Image from "next/image";
type Props = {};

const StreamList = (props: Props) => {
  const spotify =
    "https://open.spotify.com/artist/2Tto8jU80d955YFYSMX5IX?si=5yTnoe5WQHei278VBTMp8w";
  const apple = "https://music.apple.com/us/artist/duiloh/1608844545";
  const youtube = "https://www.youtube.com/@duiloh";
  const soundcloud = "https://soundcloud.com/user-932376509";
  return (
    <div
      className="bg-metallic-silver-gradient p-2 font-mont mt-12 max-w-[365px] sm:max-w-full"
      style={{ boxShadow: "0 4px 6px rgba(204, 255, 51, 0.8)" }}
    >
      <div className="font-medium text-black text-xs tracking-widest text-center">
        STREAM NOW
      </div>
      <div className="flex items-center justify-center mt-2">
        <Link href={spotify} passHref rel="noopener noreferrer" target="_blank">
          <Image
            src={"/spotify-fill.svg"}
            alt="spotify"
            width={30}
            height={30}
            className="cursor-pointer mr-7"
          ></Image>
        </Link>
        <Link href={apple} passHref rel="noopener noreferrer" target="_blank">
          <Image
            src={"/apple-fill.svg"}
            alt="apple"
            width={30}
            height={30}
            className="cursor-pointer -mt-1 mr-7"
          ></Image>
        </Link>
        <Link href={youtube} passHref rel="noopener noreferrer" target="_blank">
          <Image
            src={"/youtube-black.svg"}
            alt="youtube"
            width={30}
            height={30}
            className="cursor-pointer mr-7"
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
  );
};

export default StreamList;
