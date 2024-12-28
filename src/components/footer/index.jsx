import Image from "next/image";
import { Copyright, OurPartner } from "..";
import Input from "../input";
import { StyledFooter } from "./styled";
import { useTranslations } from "next-intl";

const LIST = [
  "/images/twitter.svg",
  "/images/facebook.svg",
  "/images/linkin.svg",
];

function Footer() {
  const t = useTranslations("footer");

  return (
    <StyledFooter>
      <OurPartner />

      <div className="footer" id="contact-us">
        <div className="logo">
          <div className="logo-main">
            <Image width={164} height={96} src={"/images/logo-pc.svg"} />
          </div>
          <div className="socials">
            {LIST.map((item) => {
              return (
                <div className="social-item">
                  <Image width={40} height={40} src={item} />
                </div>
              );
            })}
          </div>
        </div>

        <div className="address info">
          <h3>{t("address.title")}</h3>
          <div className="des">
            <div className="add-1 add">
              <div className="icon">
                <Image width={40} height={40} src={"/images/location.svg"} />
              </div>
              <p>
                {t("address.1")}
                <br />
                <br />
                {t("address.2")}
              </p>
            </div>
            <div className="add add-2">
              <div className="icon">
                <Image width={40} height={40} src={"/images/mobile.svg"} />
              </div>
              <div className="phones">
                <span>(+1) 555-0108-000</span>
                <span>or</span>
                <span>(+236) 555-0108</span>
              </div>
            </div>
          </div>
        </div>
        <div className="subscribe info">
          <h3> {t("subscribe.title")}</h3>
          <div className="des">
            <p>{t("subscribe.des")}</p>
            <Input placeHolderKey="footer-mail" />
          </div>
        </div>
      </div>
      <Copyright />
    </StyledFooter>
  );
}

export default Footer;
