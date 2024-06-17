import { builder, Builder } from "@builder.io/react";
import dynamic from "next/dynamic";

// Initialize Builder with your API key
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(
  dynamic(() => import("./components/BeatItem/BeatItem")),
  {
    name: "BeatItem",
  }
);

Builder.registerComponent(
  dynamic(() => import("./pages/beats")),
  {
    name: "Beats",
    // Initialize Builder with your API key
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/BeatsCard/BeatsCard")),
  {
    name: "BeatsCard",
  }
);

Builder.registerComponent(
  dynamic(
    () => import("./components/ContactForm/ContactForm")
    // Initialize Builder with your API key
  ), // Initialize Builder with your API key
  // Initialize Builder with your API key
  {
    name: "ContactForm",
  }
);

Builder.registerComponent(
  dynamic(
    () => import("./components/ServiceCard/ServiceCard")
    // Initialize Builder with your API key
  ), // Initialize Builder with your API key
  // Initialize Builder with your API key
  {
    name: "ServiceCard",
    inputs: [
      {
        name: "description",
        type: "string",
        required: true,
      },
      {
        name: "pic",
        type: "string",
        required: true,
      },
      {
        name: "subtitle",
        type: "string",
        required: true,
      },
      {
        name: "title",
        type: "string",
        required: true,
      },
    ],
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/SongCard/SongCard")),
  {
    // Initialize Builder with your API key
    name: "SongCard",
    inputs: [
      {
        name: "apple",
        type: "string",
        required: true,
      },
      {
        name: "imgSrc",
        type: "string",
        required: true,
      },
      {
        name: "name",
        type: "string",
        required: true,
      },
      {
        name: "soundcloud",
        type: "string",
        required: true,
      },
      {
        name: "spotify",
        type: "string",
        required: true,
      },
      {
        name: "youtube",
        type: "string",
        required: true,
      },
    ],
  }
);

Builder.registerComponent(
  dynamic(
    () =>
      import(
        "./components/BurgerButton/BurgerButton"
        // Initialize Builder with your API key
      ) // Initialize Builder with your API key
  ),
  {
    name: "BurgerButton",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/Footers/Footer1")),
  {
    name: "Footer1",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/Headers/Header1")),
  {
    name: "Header1",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/Headers/Header2")),
  {
    name: "Header2",
  }
);

Builder.registerComponent(
  dynamic(() => import("./pages")),
  {
    name: "Home",
  }
); // Initialize Builder with your API key

Builder.registerComponent(
  dynamic(() => import("./components/Headers/HomeHeaders")),
  {
    name: "HomeHeaders",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/Landing/Landing")),
  {
    name: "Landing",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/Headers/MobH1")),
  {
    name: "MobH1",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/Headers/MobH2")),
  {
    name: "MobH2",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/Releases/Releases")),
  {
    // Initialize Builder with your API key
    name: "Releases",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/SlideOverMenu/SlideOverMenu")),
  {
    name: "SlideOverMenu",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/SoundCloudPlaya/SoundCloudPlaya")),
  {
    name: "SoundCloudPlaya",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/StreamList/StreamList")),
  // Initialize Builder with your API key
  {
    name: "StreamList",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/Counter/Counter")),
  {
    name: "Counter",
    inputs: [
      {
        name: "initialCount",
        type: "number",
      },
    ],
  }
);
