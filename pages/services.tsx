import Header1 from "@/components/Headers/Header1";
import Header2 from "@/components/Headers/Header2";
import Footer1 from "@/components/Footers/Footer1";
import styles from "../styles/bio-head.module.css";
import ServiceCard from "@/components/ServiceCard/ServiceCard";
import MobH1 from "@/components/Headers/MobH1";
import MobH2 from "@/components/Headers/MobH2";
function services() {
  const services = {
    s1: {
      pic: "/dj-service.jpeg",
      title: "LIVE DJ",
      subtitle: "Elevate Your Event with Professional DJ Services",
      description:
        "Make your wedding or private party unforgettable with top-notch DJ services. Specializing in hip hop, rap, and electronic music, I create the perfect atmosphere with expert live mixing. Every beat keeps the energy high and the dance floor packed, ensuring an extraordinary experience for your guests.",
    },
    s2: {
      pic: "/beats-service.jpeg",
      title: "BEATS PRODUCTION",
      subtitle: "Top-Tier Beats Production for Artists and Producers",
      description:
        "I offer high-quality beats production specializing in rap, trap, hip hop, and type beats inspired by artists like Travis Scott and Lil Tecca. These beats are perfect for rappers, artists, and producers looking to elevate their sound for entertainment and dance. To get a custom beat made, simply reach out through the email form on my website. Let’s collaborate to create something incredible together.",
    },
    s3: {
      pic: "/dpack2.png",
      title: "SAMPLE PACKS",
      subtitle: "Premium Sample Packs for Next-Level Music Production",
      description:
        "Discover the luxurious sound of my sample packs, featuring a variety of high-quality sounds including drums, bass, 808s, synths, and hi-hats. Designed for chill, late night beats reminiscent of Brent Faiyaz & 4 Batz, these sample packs provide everything needed to produce your next hit. Available for purchase on BeatStars, these samples are perfect for producers looking to enhance their music with rich, high-quality sounds.",
    },
  };
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
      <div className="flex  flex-col bg-prim">
        <div className="hidden md:block">
          <Header2 />
        </div>
        <div className="block md:hidden">
          <MobH2 />
        </div>

        <div
          className={`
              h-[26rem] bg-cover bg-center bg-no-repeat ${styles.vignette} ${styles["services-image"]}`}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <h2
              className="italic text-[4rem] md:text-[6rem] tracking-widest font-bold text-white drop-shadow-2xl opacity-95"
              style={{ fontFamily: "BrownSugar", fontWeight: "bolder" }}
            >
              SERVICES
            </h2>
          </div>
        </div>
        <div className="z-10 h-[50px] -mt-[48px] md:-mt-[50px] text-2xl font-bold  w-full text-center bg-gradient-to-b from-transparent to-prim" />
      </div>

      <div
        className=" bg-prim w-full 
      flex flex-col items-center px-8 py-4"
      >
        {Object.values(services).map((service, index) => (
          <ServiceCard
            key={index}
            pic={service.pic}
            title={service.title}
            subtitle={service.subtitle}
            description={service.description}
          />
        ))}
      </div>
      <Footer1 />
    </>
  );
}

export default services;
