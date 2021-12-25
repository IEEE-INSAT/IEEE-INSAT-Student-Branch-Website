import React from "react";
import MemberTemplate from "./MemberTemplate";
import Random from "../../assets/images/members/random.jpg";


const Members = () => {
  return (
    <ul id="members" className="list-members">
      <MemberTemplate
        Photo={Random}
        Name="Med Ali Zormati"
        Position="Chairman"
        FB="https://www.facebook.com/ma.zormati"
        INSTA="https://www.instagram.com/maz.zormati"
        Linked="https://www.linkedin.com/in/mohamedalizormati"
        IEEEMail="mailto:zormati@ieee.org"
      />
      <MemberTemplate
        Photo={Random}
        Name="Mouna Khiari"
        Position="Vice-Chairwoman"
        FB="https://www.facebook.com/mouna.khiari.54"
        INSTA="https://www.instagram.com/mounakhiari1"
        Linked="https://www.linkedin.com/in/mounakhiari"
        IEEEMail="mailto:mounakhiari9@ieee.org"
      />
      <MemberTemplate
        Photo={Random}
        Name="Hend Kmiha"
        Position="General Secretary"
        FB="https://www.facebook.com/hend.kmiha"
        INSTA="https://www.instagram.com/hendkmiha"
        Linked="https://www.linkedin.com/in/hend-kmiha-08b607222"
        IEEEMail="mailto:Hend.kmiha@ieee.org"
      />
      <MemberTemplate
        Photo={Random}
        Name="Mariem Manai"
        Position="HR Manager"
        FB="https://www.facebook.com/profile.php?id=100009415355434"
        INSTA="https://www.instagram.com/mariem._mannai"
        Linked="https://www.linkedin.com/in/mariem-manai-2688481a9"
        IEEEMail="mailto:mariemmanai@ieee.org"
      />
      <MemberTemplate
        Photo={Random}
        Name="Amira Becheikh"
        Position="Media Manager"
        FB="https://www.facebook.com/amira.becheikh.56"
        INSTA="https://www.instagram.com/amira_becheikh"
        Linked="https://www.linkedin.com/in/amira-becheikh-85600620a"
        IEEEMail="mailto:amirabecheikh12@gmail.com"
      />
      <MemberTemplate
        Photo={Random}
        Name="Syrine Doukali"
        Position="Treasurer"
        FB="https://www.facebook.com/syrine.doukali"
        INSTA="https://www.instagram.com/syrine_doukali"
        Linked="https://www.linkedin.com/in/doukali-syrine-a26273209"
        IEEEMail="mailto:syrinedoukali@ieee.org"
      />
      <MemberTemplate
        Photo={Random}
        Name="Sirajeddine Aissa"
        Position="Webmaster"
        FB="https://www.facebook.com/Sirajeddine.Aissa"
        INSTA="https://www.instagram.com/sirajeddine.aissa"
        Linked="https://www.linkedin.com/in/sirajeddineaissa"
        IEEEMail="mailto:sirajeddineaissa@ieee.org"
        Github="https://github.com/sirajeddineaissa/"
      />
    </ul>
  );
};

export default Members;
