import Footer1 from "@/components/Footers/Footer1";
import HomeHeaders from "@/components/Headers/HomeHeaders";
import Landing from "@/components/Landing/Landing";
import SoundCloudPlaya from "@/components/SoundCloudPlaya/SoundCloudPlaya";
import Releases, {
  getServerSideProps,
  ReleasesProps,
} from "../components/Releases/Releases";
const HomePage: React.FC<ReleasesProps> = ({ releases }) => {
  return (
    <main className="flex min-h-screen flex-col bg-prim">
      <HomeHeaders />
      <Landing />
      <Releases releases={releases} />
      <SoundCloudPlaya />
      <Footer1 />
    </main>
  );
};
export { getServerSideProps };
export default HomePage;
