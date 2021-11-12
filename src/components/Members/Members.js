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
      />
      <MemberTemplate
        Photo={Mouna}
        Name="Mouna Khiari"
        Position="Vice-Chairwoman"
        FB="https://www.facebook.com/mouna.khiari.54"
      />
      <MemberTemplate
        Photo={Hend}
        Name="Hend Kmiha"
        Position="General Secretary"
        FB="https://www.facebook.com/hend.kmiha"
      />
      <MemberTemplate
        Photo={Mariem}
        Name="Mariem Manai"
        Position="HR Manager"
        FB="https://www.facebook.com/profile.php?id=100009415355434"
      />
      <MemberTemplate
        Photo={Amira}
        Name="Amira Becheikh"
        Position="Media Manager"
        FB="https://www.facebook.com/amira.becheikh.56"
      />
      <MemberTemplate
        Photo={Syrine}
        Name="Syrine Doukali"
        Position="Treasurer"
        FB="https://www.facebook.com/syrine.doukali"
      />
      <MemberTemplate
        Photo={Siraje}
        Name="Sirajeddine Aissa"
        Position="Webmaster"
        FB="https://www.facebook.com/Sirajeddine.Aissa"
      />
    </ul>
  );
};

export default Members;
