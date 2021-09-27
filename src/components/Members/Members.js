import React from "react";
import MemberTemplate from "./MemberTemplate";
import Zormati from "../../assets/images/members/Zormati.jpg";
import Mouna from "../../assets/images/members/Mouna.jpg";
import Hend from "../../assets/images/members/Hend.jpg";
import Mariem from "../../assets/images/members/Mariem.jpg";
import Syrine from "../../assets/images/members/Syrine.jpg";
import Siraje from "../../assets/images/members/Siraje.jpg";

const Members = () => {
  return (
    <div id="members" className="container p-5">
      <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
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
          Photo={Zormati}
          Name="Med Ali Zormati"
          Position="Chairman"
        />
        
      </div>
    </div>
  );
};

export default Members;
