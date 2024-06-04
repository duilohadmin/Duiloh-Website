import { builder } from "@builder.io/react";

// Initialize Builder with your API key
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

// If you have no components to register, simply remove or comment out the registerComponent call
// Builder.registerComponent(
//   dynamic(() => import("")),
//   {
//     // Add your component options here
//   }
// );

// Or you can keep this file empty if there are no components to register at all.
