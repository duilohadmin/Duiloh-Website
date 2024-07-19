import Head from "next/head";
import { Suspense } from "react";
import { lazy } from "react";
const Footer1 = lazy(() => import("@/components/Footers/Footer1"));
const SoundCloudPlaya = lazy(
  () => import("@/components/SoundCloudPlaya/SoundCloudPlaya")
);
import HomeHeaders from "@/components/Headers/HomeHeaders";
import Landing, {
  getLandingContentProps,
  LandingProps,
} from "@/components/Landing/Landing";
import Releases, {
  getReleasesProps,
  ReleasesProps,
} from "@/components/Releases/Releases";

export const getServerSideProps = async () => {
  const [landingProps, releasesProps] = await Promise.all([
    getLandingContentProps(),
    getReleasesProps(),
  ]);

  return {
    props: {
      ...landingProps.props,
      ...releasesProps.props,
    },
  };
};

const HomePage: React.FC<LandingProps & ReleasesProps> = ({
  landingContent,
  releases,
}) => {
  return (
    <main className="flex min-h-screen flex-col bg-prim">
      <Head>
        <title> Home | Duiloh Official Site </title>
        <meta
          name="description"
          content="Duiloh's landing page displaying songs and media."
        />
      </Head>
      <HomeHeaders />
      <Suspense>
        <Landing landingContent={landingContent} />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Releases releases={releases} />
      </Suspense>
      <SoundCloudPlaya />
      <Footer1 />
    </main>
  );
};

export default HomePage;
