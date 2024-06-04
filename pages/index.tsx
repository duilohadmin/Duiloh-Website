import Footer1 from "@/components/Footers/Footer1";
import HomeHeaders from "@/components/Headers/HomeHeaders";
import Landing from "@/components/Landing/Landing";
import Releases from "@/components/Releases/Releases";
import SoundCloudPlaya from "@/components/SoundCloudPlaya/SoundCloudPlaya";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-prim">
      <HomeHeaders />
      <Landing />
      <Releases />
      <SoundCloudPlaya />
      <Footer1 />
    </main>
  );
}
