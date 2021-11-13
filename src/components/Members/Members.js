import React from "react";
import MemberTemplate from "./MemberTemplate";
import Zormati from "../../assets/images/members/Zormati.jpg";
import Mouna from "../../assets/images/members/Mouna.jpg";
import Hend from "../../assets/images/members/Hend.jpg";
import Mariem from "../../assets/images/members/Mariem.jpg";
import Amira from "../../assets/images/members/Amira.jpg";
import Syrine from "../../assets/images/members/Syrine.jpg";
import Siraje from "../../assets/images/members/Siraje.jpg";

const Members = () => {
  return (
    <ul id="members" className="list-members">
      <MemberTemplate
        Photo={Zormati}
        Name="Med Ali Zormati"
        Position="Chairman"
        FB="https://www.facebook.com/ma.zormati"
        INSTA="https://www.instagram.com/maz.zormati"
        Linked="https://www.linkedin.com/in/mohamedalizormati"
        IEEEMail="mailto:zormati@ieee.org"
      />
      <MemberTemplate
        Photo={Mouna}
        Name="Mouna Khiari"
        Position="Vice-Chairwoman"
        FB="https://www.facebook.com/mouna.khiari.54"
        INSTA="https://www.instagram.com/mounakhiari1"
        Linked="https://www.linkedin.com/in/mounakhiari"
        IEEEMail="mailto:mounakhiari9@ieee.org"
      />
      <MemberTemplate
        Photo={Hend}
        Name="Hend Kmiha"
        Position="General Secretary"
        FB="https://www.facebook.com/hend.kmiha"
        INSTA="https://www.instagram.com/hendkmiha"
        Linked="https://www.linkedin.com/in/hend-kmiha-08b607222"
        IEEEMail="mailto:Hend.kmiha@ieee.org"
      />
      <MemberTemplate
        Photo={Mariem}
        Name="Mariem Manai"
        Position="HR Manager"
        FB="https://www.facebook.com/profile.php?id=100009415355434"
        Linked="https://www.linkedin.com/in/mariem-manai-2688481a9"
        IEEEMail="mailto:mariemmanai@ieee.org"
      />
      <MemberTemplate
        Photo={Amira}
        Name="Amira Becheikh"
        Position="Media Manager"
        FB="https://www.facebook.com/amira.becheikh.56"
        INSTA="https://www.instagram.com/amira_becheikh"
        Linked="https://www.linkedin.com/in/amira-becheikh-85600620a"
        IEEEMail=""
      />
      <MemberTemplate
        Photo={Syrine}
        Name="Syrine Doukali"
        Position="Treasurer"
        FB="https://www.facebook.com/syrine.doukali"
        INSTA="https://www.instagram.com/syrine_doukali/"
        Linked="https://www.linkedin.com/in/doukali-syrine-a26273209"
        IEEEMail="mailto:syrinedoukali@ieee.org"
      />
      <MemberTemplate
        Photo={Siraje}
        Name="Sirajeddine Aissa"
        Position="Webmaster"
        FB="https://www.facebook.com/Sirajeddine.Aissa"
        INSTA="https://www.instagram.com/sirajeddine.aissa"
        Linked="https://www.linkedin.com/in/sirajeddineaissa"
        IEEEMail=""
      />
    </ul>
  );
};

export default Members;
