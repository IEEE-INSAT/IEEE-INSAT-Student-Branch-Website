import React from "react";

const LightCompanyLogos = [
  "https://res.cloudinary.com/dzgxf5tsm/image/upload/v1701460591/oorjus6ifo6ixhd7drdn.svg",
  "https://s3.amazonaws.com/opc-downloads/company_photo/8f5eee37ab4617642e5d8e24cb131958141104726041823150.png",
];
const DarkCompanyLogos = [
  "https://pcp-consulting.fr/assets/images/logo_minimal.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Hutchinson_%28Unternehmen%29_logo.svg/2560px-Hutchinson_%28Unternehmen%29_logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/0/06/Logo_STB.png",
  "https://res.cloudinary.com/dzgxf5tsm/image/upload/v1701459612/kifhqp7cbrlhxkrtjmlh.png",

  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Mitsubishi_Electric_logo.svg/800px-Mitsubishi_Electric_logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/DR%C3%84XLMAIER_Group_Logo.svg/1200px-DR%C3%84XLMAIER_Group_Logo.svg.png",
];
const neutralCompanyLogos = [
  "https://res.cloudinary.com/dzgxf5tsm/image/upload/v1701459230/fb7jb1qn682eq6umqojm.jpg",
  "https://www.orange.tn/images/logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Deutsche_Gesellschaft_f%C3%BCr_Internationale_Zusammenarbeit_Logo.svg/2560px-Deutsche_Gesellschaft_f%C3%BCr_Internationale_Zusammenarbeit_Logo.svg.png",
  "https://www.ilboursa.com/handlers/image_news_get.ashx?id=A60A89AB-2BAA-411A-86F2-465BAF940F17",
  "https://www.eina4jobs.org/sites/default/files/styles/large/public/2022-04/313d09e5-6952-4a8a-9e8f-a289e2851be1_1.png?itok=KYfs2tOF",
  "https://www.indabaxtunisia.com/2021/wp-content/uploads/sites/3/2021/09/LogoDTC.png",
  "https://res.cloudinary.com/dzgxf5tsm/image/upload/v1701461337/ahrfevgopy2alsdayu2j.png",
  "https://www.ubci.tn/wp-content/themes/ubci/img/logo-banque-big.png",
  "https://res.cloudinary.com/dzgxf5tsm/image/upload/v1701461588/lyg24z6aj9eogwlqky3s.png",
  "https://www.gat.com.tn/sites/default/files/inline-images/logo_0.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Coat_of_arms_of_Tunisia.svg/1200px-Coat_of_arms_of_Tunisia.svg.png",
  "https://res.cloudinary.com/dzgxf5tsm/image/upload/v1701539584/je2czfzu930jixpp01s4.png",
];

const COMMON_LOGO_STYLES =
  "max-w-[8rem] max-h-[4rem] object-contain  saturate-0 transition-all hover:filter-none overflow-hidden";
const CompanyPartners = () => {
  return (
    <>
      {/* Clients */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Title */}
        <div className="w-2/3 sm:w-1/2 lg:w-1/3 mx-auto text-center mb-6">
          <h2 className="text-gray-600 dark:text-gray-400">
            Trusted by Public, Private, and Nonprofit Organizations
          </h2>
        </div>
        {/* End Title */}
        <div className="flex justify-center gap-x-6 sm:gap-x-12 lg:gap-x-24 flex-wrap gap-y-10 ">
          {[
            LightCompanyLogos.map((logo, index) => (
              <img
                src={logo}
                alt="logo"
                onError={(e) => e.currentTarget.remove()}
                key={index}
                className={`${COMMON_LOGO_STYLES} invert dark:invert-0`}
              />
            )),
            DarkCompanyLogos.map((logo, index) => (
              <img
                src={logo}
                alt="logo"
                onError={(e) => e.currentTarget.remove()}
                key={index}
                // className="max-w-[10rem] max-h-24 dark:invert object-contain  saturate-0 rounded-xl overflow-hidden "
                className={`${COMMON_LOGO_STYLES} dark:invert`}
              />
            )),
            neutralCompanyLogos.map((logo, index) => (
              <img
                src={logo}
                alt="logo"
                onError={(e) => e.currentTarget.remove()}
                key={logo}
                // className="max-w-[10rem] max-h-24 object-contain  saturate-0 rounded-xl overflow-hidden"
                className={`${COMMON_LOGO_STYLES}`}
              />
            )),
          ]
            .flat()
            .sort(() => Math.random() - 0.5)}
        </div>
      </div>
      {/* End Clients */}
    </>
  );
};

export default CompanyPartners;
