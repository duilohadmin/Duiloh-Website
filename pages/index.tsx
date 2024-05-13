import Footer1 from "@/components/Footers/Footer1";
import Header1 from "@/components/Headers/Header1";
import Header2 from "@/components/Headers/Header2";
import HomeHeaders from "@/components/Headers/HomeHeaders";
import Landing from "@/components/Landing/Landing";
import PreviewSong from "@/components/PreviewSong/PreviewSong";
import Releases from "@/components/Releases/Releases";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-prim">
      <HomeHeaders />
      <Landing />
      <Releases />
      <PreviewSong />
      <Footer1 />
    </main>
  );
}
