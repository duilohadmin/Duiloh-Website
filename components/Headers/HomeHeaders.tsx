import Header1 from "./Header1";
import Header2 from "./Header2";
import MobH1 from "./MobH1";
import MobH2 from "./MobH2";

type Props = {};

export default function HomeHeaders({}: Props) {
  return (
    <div className="z-50">
      <div className="hidden md:block">
        <Header1 />
      </div>
      <div className="block md:hidden">
        <MobH1 />
      </div>
      <div className="hidden md:block">
        <Header2 />
      </div>
      <div className="block md:hidden">
        <MobH2 />
      </div>
    </div>
  );
}
