import { GetServerSideProps } from "next";
import Header1 from "@/components/Headers/Header1";
import Header2 from "@/components/Headers/Header2";
import Footer1 from "@/components/Footers/Footer1";
import styles from "../styles/bio-head.module.css";
import ServiceCard from "@/components/ServiceCard/ServiceCard";
import MobH1 from "@/components/Headers/MobH1";
import MobH2 from "@/components/Headers/MobH2";
import axios from "axios";
import Head from "next/head";

interface Service {
  id: string;
  imageUrl: string;
  serviceName: string;
  subtitle: string;
  description: string;
}

interface ServicesProps {
  services: Record<string, Service>;
}

const Services = ({ services }: ServicesProps) => {
  return (
    <>
      <div className="absolute top-0 left-0 w-full ">
        <Head>
          <title> Services | Duiloh Official Site </title>
          <meta name="description" content="Duiloh's Services." />
        </Head>
        <div className="hidden md:block">
          <Header1 />
        </div>
        <div className="block md:hidden text-black">
          <MobH1 />
        </div>
      </div>
      <div className="flex min-h-screen  flex-col bg-prim">
        <div className="hidden md:block">
          <Header2 />
        </div>
        <div className="block md:hidden">
          <MobH2 />
        </div>

        <div
          className={`h-[26rem] bg-cover bg-center bg-no-repeat ${styles.vignette} ${styles["vinyl-image"]} z-0`}
        ></div>
        <div className="inset-0 flex items-center justify-center -mt-[16.29rem]">
          <h2
            className="italic text-[4rem] md:text-[6rem] tracking-widest font-bold text-white drop-shadow-2xl opacity-95 z-20"
            style={{ fontFamily: "BrownSugar", fontWeight: "bolder" }}
          >
            SERVICES
          </h2>
        </div>
        {/* <div className="z-10 h-[50px] -mt-[48px] md:-mt-[50px] text-2xl font-bold  w-full text-center bg-gradient-to-b from-transparent to-prim" /> */}
        <div className="h-[16px]"></div>
        <div className="bg-prim w-full flex flex-col items-center px-8 py-4 mt-10">
          {Object.values(services).map((service) => (
            <ServiceCard
              key={service.id}
              pic={service.imageUrl}
              title={service.serviceName}
              subtitle={service.subtitle}
              description={service.description}
            />
          ))}
        </div>
      </div>

      <Footer1 />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/services`
    );
    const services = response.data.services;

    return {
      props: {
        services,
      },
    };
  } catch (error) {
    console.error("Error fetching services:", error);
    return {
      props: {
        services: {},
      },
    };
  }
};

export default Services;
