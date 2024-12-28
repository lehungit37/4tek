import Image from "next/image";
import React from "react";
import Input from "../input";
import CountDown from "./count-down";
import { StyledBanner } from "./styled";
import { useTranslations } from "next-intl";

function Banner() {
  const t = useTranslations("banner");
  return (
    <StyledBanner>
      <div className="banner-bg" />
      <div className="banner-absolute">
        <CountDown />
        <div className="form">
          <p>{t("des")}</p>
          <Input white />
        </div>
      </div>
      <div className="ong-tien">
        {/* <Image src="/images/ong-tien.png" width={938} height={938} /> */}
      </div>
    </StyledBanner>
  );
}

export default Banner;
