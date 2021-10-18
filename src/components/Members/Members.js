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
      />
      <MemberTemplate
        Photo={Mouna}
        Name="Mouna Khiari"
        Position="Vice-Chairwoman"
      />
      <MemberTemplate
        Photo={Hend}
        Name="Hend Kmiha"
        Position="General Secretary"
      />
      <MemberTemplate
        Photo={Mariem}
        Name="Mariem Manai"
        Position="HR Manager"
      />
      <MemberTemplate
        Photo={Amira}
        Name="Amira Becheikh"
        Position="Media Manager"
      />
      <MemberTemplate
        Photo={Syrine}
        Name="Syrine Doukali"
        Position="Treasurer"
      />
      <MemberTemplate
        Photo={Siraje}
        Name="Sirajeddine Aissa"
        Position="Webmaster"
      />
    </ul>
  );
};

export default Members;
