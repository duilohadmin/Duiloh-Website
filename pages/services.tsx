import Header1 from "@/components/Headers/Header1";
import Header2 from "@/components/Headers/Header2";
import Footer1 from "@/components/Footers/Footer1";
import styles from "../styles/bio-head.module.css";
import ServiceCard from "@/components/ServiceCard/ServiceCard";
import MobH1 from "@/components/Headers/MobH1";
import MobH2 from "@/components/Headers/MobH2";
function services() {
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
            <h2 className="italic text-[4rem] md:text-[6rem] tracking-widest font-bold text-black drop-shadow-2xl opacity-95">
              SERVICES
            </h2>
          </div>
        </div>
        <div className="border-b border-white z-10 h-[50px] -mt-[48px] md:-mt-[50px] text-2xl font-bold  w-full text-center bg-gradient-to-b from-transparent to-prim" />
      </div>

      <div
        className=" bg-prim w-full 
      flex flex-col items-center px-8 py-4"
      >
        <ServiceCard serviceName="DJ SERVICE" />
      </div>
      <Footer1 />
    </>
  );
}

export default services;
