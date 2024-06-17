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
          className="mt-0 ml-6 md:ml-32  font-bold font-bsugar text-white text-[40px]  tracking-wider"
          style={{ fontFamily: "BrownSugar", fontWeight: "bolder" }}
        >
          THE
        </h1>
        <h1
          className="ml-6 md:ml-32 font-bsugar text-white text-[50px] tracking-wider"
          style={{ fontFamily: "BrownSugar", fontWeight: "bolder" }}
        >
          ARCHIVES
        </h1>
        <div className="relative h-full">
          <div className="absolute inset-0 bg-[url('/texture-05.jpg')] bg-repeat bg-[length:200px_200px] rounded-2xl shadow-lg h-auto opacity-85 mx-5" />
          <div className="py-6 sm:py-10 px-4 mx-5 flex flex-col lg:flex-row lg:px-32 text-[18px] text-black">
            <div className="font-mont text-base md:text-lg z-10 order-2 lg:order-1 mb-4 lg:mb-0 lg:flex-1 lg:pr-6 bg-cream bg-opacity-90 px-6 py-4 rounded-lg shadow-lg">
              <p className="mt-4 font-bold">Executive Summary</p>
              <p className="my-4 pt-2 border-t-2 border-prim">
                The future pulses through each beat Duiloh crafts. A journey
                that began with a passion for melodies that ignited at a young
                age. At just nine years old, he found his voice in the world of
                music, penciling verses that resonated with raw emotion and
                untapped talent.
              </p>
              <p className="mb-4">
                Drawing inspiration from icons like Kendrick Lamar, Lecrae,
                Kanye West, MF Doom, Bon Iver, and Jon Bellion, Duiloh fuses
                diverse influences into a unique sonic tapestry that captivates
                audiences worldwide.
              </p>
              <p className="mb-4">
                A defining moment came when he made the decision to drop out of
                college, forsaking conventional paths to pursue his true
                calling. This leap of faith has proved transformative.
              </p>
              <p className="mb-4">
                But Duiloh isn’t content with resting until he accomplishes big
                things. In the coming years, he aspires to earn the respect of
                his musical idols and peers, establishing himself as a revered
                figure in the music realm. Alongside this ambition, he aims to
                cultivate a devoted fan base, united by a shared love for his
                artistry.
              </p>
              <p className="mb-4">
                So join Duiloh on this exhilarating journey as he redefines, not
                only the boundaries of music, but where music can go.
              </p>
            </div>
            <div className="lg:ml-1 order-1 lg:order-2 relative lg:flex-1 mb-4 lg:mb-0 flex flex-col h-auto">
              <div className="relative h-[300px] lg:h-[400px] w-full">
                <Image
                  src="/rappa2.jpeg"
                  alt="dj"
                  fill
                  className="object-cover object-top rounded-lg shadow-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="ml-1 relative w-full hidden lg:block mt-4 aspect-w-16 aspect-h-9">
                <div className="relative w-full h-96">
                  <Image
                    src="/declass.png"
                    alt="dj"
                    fill
                    className="object-cover "
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
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
