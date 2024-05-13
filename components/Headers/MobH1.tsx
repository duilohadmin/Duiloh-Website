import SlideOverMenu from "../SlideOverMenu/SlideOverMenu";

type Props = {};

function MobH1({}: Props) {
  return (
    <div className="w-full h-[55px] flex items-center absolute  z-[40] bg-header1-gradient ">
      <SlideOverMenu isBlack={true} />
    </div>
  );
}

export default MobH1;
