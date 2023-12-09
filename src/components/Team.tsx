import React, { useRef } from "react";
import { AdvancedImage } from "@cloudinary/react";
import { cld } from "../cloudinary";
import { fit } from "@cloudinary/url-gen/actions/resize";

const team: [string, string, string][] = [
  ["Mahdi Chaari", "Chairman", "xykmv80ccatoi8829hh6"],
  ["Adam Dey", "Vice Chair Technical Activities", "nzthnxyehndaic0xaaiu"],
  ["Faten Ben Rejeb", "Vice Chair Membership", "Board/aqth4yoe4ldtff7pytyb"],
  ["Wissal Khaled", "General Secretary", "nnxev0gvbylinyaf3e1f"],
  ["Ghada Daghmoura", "Treasurer", "kzkwcyftdtjxg4s2uiyk"],
  ["Mohammed Hassan Amara", "Webmaster", "ibmo5mmxplv99nc2q5xj"],
  ["Nermine Moumen", "Community Manager", "uenoslkcacufuz0u62mk"],
  ["Omar Idoudi", "Graphic Designer", "vbt8ja5u1yil2afnmsdl"],
  ["Rayen Hamza", "Photographer", "mubrnlodbkvbsdkkwzrj"],
];

function TeamMember(props: { src: string; name: string; role: string }) {
  return (
    <div className="text-center">
      <AdvancedImage
        cldImg={cld.image(props.src).resize(fit().width(200).height(200))}
        className="object-cover rounded-full overflow-hidden w-24 h-24 mx-auto"
      />
      <div className="mt-2 sm:mt-4">
        <h3 className="font-medium text-gray-800 dark:text-gray-200">
          {props.name}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">{props.role}</p>
      </div>
    </div>
  );
}

const Team = () => {
  return (
    <>
      {/* Team */}
      <div className="max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Title */}
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
            Our team
          </h2>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            Creative people
          </p>
        </div>
        {/* End Title */}
        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12">
          {team.map((member, index) => (
            <TeamMember
              key={index}
              src={member[2]}
              name={member[0]}
              role={member[1]}
            />
          ))}
        </div>
        {/* End Grid */}
      </div>
      {/* End Team */}
    </>
  );
};
export default Team;
