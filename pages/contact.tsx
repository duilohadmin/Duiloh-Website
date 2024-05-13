import Header1 from "@/components/Headers/Header1";
import Header2 from "@/components/Headers/Header2";
import MobH1 from "@/components/Headers/MobH1";
import MobH2 from "@/components/Headers/MobH2";
import styles from "../styles/bio-head.module.css";
import Footer1 from "@/components/Footers/Footer1";
import ContactForm from "@/components/ContactForm/ContactForm";
function contact() {
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
      <div className="flex flex-col bg-prim -z-10">
        <div className="hidden md:block">
          <Header2 />
        </div>
        <div className="block md:hidden">
          <MobH2 />
        </div>

        <div
          className={`z-0
              h-[26rem] bg-cover bg-center bg-no-repeat ${styles.vignette} ${styles["services-image"]}`}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="italic text-[3rem] sm:text-[4rem] md:text-[6rem] tracking-widest font-bold text-black drop-shadow-2xl opacity-95">
              CONTACT ME
            </h2>
          </div>
        </div>

        <div className=" z-10 h-[50px] -mt-[48px] md:-mt-[50px] text-2xl font-bold  w-full text-center bg-gradient-to-b from-transparent to-prim"></div>
      </div>
      <div className=" bg-prim">
        {/* <ContactIcons /> */}
        <ContactForm />
      </div>

      <Footer1 />
    </>
  );
}

export default contact;
