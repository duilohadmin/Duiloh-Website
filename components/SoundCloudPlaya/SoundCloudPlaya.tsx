import React, { useState, useEffect } from "react";

function SoundCloudPlaya() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop;
      const threshold = 300; // Adjust based on where you want to load the player
      if (scrollPosition > threshold) {
        setIsLoaded(true);
        window.removeEventListener("scroll", handleScroll); // Remove event listener after loading
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); // Clean up on unmount
    };
  }, []);

  const embedCode = `<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1789501162&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/user-932376509" title="Duiloh" target="_blank" style="color: #cccccc; text-decoration: none;">Duiloh</a> · <a href="https://soundcloud.com/user-932376509/travis-scott-type-beat" title="Travis Scott Type Beat" target="_blank" style="color: #cccccc; text-decoration: none;">Travis Scott Type Beat</a></div>`;

  return (
    <div className="px-8 font-mont text-white pb-24">
      <p className="w-full border-b border-dgreen my-5 md:my-10 py-4 md:py-6 text-[16px] md:text-[28px] ">
        LATEST TRACK
      </p>
      <div>
        {isLoaded && <div dangerouslySetInnerHTML={{ __html: embedCode }} />}
      </div>
    </div>
  );
}

export default SoundCloudPlaya;
