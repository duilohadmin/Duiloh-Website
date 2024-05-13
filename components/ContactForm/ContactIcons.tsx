import * as React from "react";

export interface ContactIconsProps {}

export default function ContactIcons(props: ContactIconsProps) {
  return (
    <div className="flex justify-center items-center text-black">
      <div>phone</div>
      <div>email</div>
    </div>
  );
}
