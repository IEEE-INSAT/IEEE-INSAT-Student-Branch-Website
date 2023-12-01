import React from "react";

const team: [string, string, string][] = [
  [
    "Mahdi Chaari",
    "Chairman",
    "https://res.cloudinary.com/dzgxf5tsm/image/upload/v1701454793/xykmv80ccatoi8829hh6.jpg",
  ],
  [
    "Adam Dey",
    "Vice Chair Technical Activities",
    "https://res.cloudinary.com/dzgxf5tsm/image/upload/v1701454769/nzthnxyehndaic0xaaiu.jpg",
  ],
  [
    "Faten Ben Rejeb",
    "Vice Chair Membership",
    "https://res.cloudinary.com/dzgxf5tsm/image/upload/v1701458566/Board/aqth4yoe4ldtff7pytyb.jpg",
  ],
  [
    "Wissal Khaled",
    "General Secretary",
    "https://res.cloudinary.com/dzgxf5tsm/image/upload/v1701454767/nnxev0gvbylinyaf3e1f.jpg",
  ],
  [
    "Ghada Daghmoura",
    "Treasurer",
    "https://res.cloudinary.com/dzgxf5tsm/image/upload/v1701461978/kzkwcyftdtjxg4s2uiyk.jpg",
  ],
  [
    "Mohammed Hassan Amara",
    "Webmaster",
    "https://res.cloudinary.com/dzgxf5tsm/image/upload/v1701454773/ibmo5mmxplv99nc2q5xj.jpg",
  ],
  [
    "Nermine Moumen",
    "Community Manager",
    "https://res.cloudinary.com/dzgxf5tsm/image/upload/v1701462979/uenoslkcacufuz0u62mk.jpg",
  ],
  [
    "Omar Idoudi",
    "Graphic Designer",
    "https://res.cloudinary.com/dzgxf5tsm/image/upload/v1701455231/vbt8ja5u1yil2afnmsdl.jpg",
  ],
  [
    "Rayen Hamza",
    "Photographer",
    "https://res.cloudinary.com/dzgxf5tsm/image/upload/v1701455320/mubrnlodbkvbsdkkwzrj.jpg",
  ],
];

function TeamMember(props: { src: string; name: string; role: string }) {
  return (
    <div className="text-center">
      <img
        className="rounded-full w-24 h-24 mx-auto object-cover"
        src={props.src}
        alt={props.name}
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
