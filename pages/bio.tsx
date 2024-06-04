import Footer1 from "@/components/Footers/Footer1";
import Header1 from "@/components/Headers/Header1";
import Header2 from "@/components/Headers/Header2";
import MobH1 from "@/components/Headers/MobH1";
import MobH2 from "@/components/Headers/MobH2";
import Image from "next/image";
import styles from "../styles/bio-head.module.css";
function bio() {
  return (
    <>
      <div className="absolute top-0 left-0 w-full ">
        <div className="hidden md:block">
          <Header1 />
        </div>
        <div className="block md:hidden text-black">
          <MobH1 />
        </div>
      </div>
      <div className="flex min-h-screen flex-col bg-prim -z-10">
        <div className="hidden md:block">
          <Header2 />
        </div>
        <div className="block md:hidden">
          <MobH2 />
        </div>
        <div
          className={`z-0
              h-[26rem] bg-cover bg-center bg-no-repeat ${styles.vignette} ${styles["vinyl-image"]}`}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <h2
              className=" text-[4rem] md:text-[6rem] italic text-white drop-shadow-2xl opacity-95"
              style={{ fontFamily: "BrownSugar", fontWeight: "bolder" }}
            >
              BIO
            </h2>
          </div>
        </div>
        {/* BLUR TRANSITION DIVIDER */}
        <div className="z-10 h-[50px] -mt-[49px] md:-mt-[50px] text-2xl font-bold  w-full text-center bg-gradient-to-b from-transparent to-prim"></div>
        <h1
          className="mt-10 ml-6 md:ml-32  font-bold font-bsugar text-white text-[40px]  tracking-wider"
          style={{ fontFamily: "BrownSugar", fontWeight: "bolder" }}
        >
          THE
        </h1>
        <h1
          className="ml-6 md:ml-32 font-bsugar text-white text-[50px] tracking-wider"
          style={{ fontFamily: "BrownSugar", fontWeight: "bolder" }}
        >
          DUILOH FILES
        </h1>
        <div className="relative h-full">
          <div
            className="absolute inset-0 
                          bg-[url('/texture-05.jpg')] bg-cover bg-center  rounded-3xl 
                           shadow-bonewhite shadow-xl h-auto opacity-[80%] 
                          mx-5"
          />
          <div
            // bg-[url('/texture-05.jpg')] bg-cover bg-center shadow-lg
            // h-auto
            // rounded-xl
            className="mt-5 px-8 mx-5 py-10
                      flex flex-col
                      
                        lg:flex-row  lg:px-32 
                        font-mont text-[18px] text-black"
          >
            <div className="z-10 order-2 lg:order-1 mb-4 lg:mb-0 lg:flex-1 lg:pr-6 bg-cream bg-opacity-90 px-6">
              <p className=" my-4">
                History pulses through each beat Duiloh crafts, a journey that
                began with a passion for rhythm that ignited at a young age. At
                just nine years old, he found his voice in the world of hip hop,
                spitting verses that resonated with raw emotion and untapped
                talent.
              </p>
              <p className=" mb-4">
                Drawing inspiration from icons like LeCrae, Kendrick Lamar,
                Kanye West, MF Doom, Bon Iver, and John Bellion, Duiloh fuses
                diverse influences into a unique sonic tapestry that captivates
                audiences worldwide.
              </p>
              <p className=" mb-4">
                A defining moment came when he made the courageous decision to
                drop out of college, forsaking conventional paths to pursue his
                true calling in music. This leap of faith proved transformative,
                leading him to forge invaluable connections with industry
                heavyweights such as Kid Cudi, Lil Uzi Vert, Lil Tecca, Yeeat,
                and Drake.
              </p>
              <p className=" mb-4">
                But Duiloh isn&apos;t content with resting on his laurels. In
                the coming years, he aspires to earn the respect of his musical
                idols and peers, establishing himself as a revered figure in the
                music realm. Alongside this ambition, he aims to cultivate a
                devoted fan base, united by a shared love for his artistry.
              </p>
              <p className=" mb-4">
                So join Duiloh on this exhilarating journey as he redefines the
                boundaries of hip hop and electronic music, one pulsating beat
                at a time.
              </p>
            </div>
            <div className="order-1 lg:order-2 relative lg:flex-1 mb-4 lg:mb-0 h-[300px] lg:h-auto">
              <div className="absolute inset-0">
                <Image
                  src="/rappa2.jpeg"
                  alt="dj"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>
        </div>

        {/** SPACER */}
        <div className="h-20"></div>
      </div>
      <Footer1 />
    </>
  );
}

export default bio;
/*
<div className=" p-6 ">

*/
