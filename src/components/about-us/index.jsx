import Image from "next/image";
import { StyledAboutUs } from "./styled";
import { useTranslations } from "next-intl";

const RIGHT_DATA = [
  {
    title: "schedule.title",
    des: "schedule.des",
    img: "/images/calendar-tick.svg",
  },
  {
    title: "design.title",
    des: "design.des",
    img: "/images/pen-tool.svg",
  },
  {
    title: "team.title",
    des: "team.des",
    img: "/images/people.svg",
  },
];

function AboutUs() {
  const t = useTranslations("about");
  return (
    <StyledAboutUs id="about-us">
      <div className="content">
        <div className="left">
          <div className="info">
            <h2 className="title">{t("title")}</h2>
            <p className="des">{t("des")}</p>
          </div>
          <div className="count">
            <div className="count-item">
              <div className="number">
                600<span>M</span>+
              </div>
              <div className="type">{t("user")}</div>
            </div>
            <div className="count-item">
              <div className="number">135+</div>
              <div className="type">{t("game")}</div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="list">
            {RIGHT_DATA.map((item, index) => {
              return (
                <div className="item" key={index}>
                  <div className="icon">
                    <Image width={24} height={24} src={item.img} />
                  </div>
                  <div className="info">
                    <div className="title">{t(item.title)}</div>
                    <div className="des">{t(item.des)}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="map">
        <div className="phu-thuy">
          <Image src="/images/phu-thuy.png" width={533} height={437} />
        </div>

        <div className="pin-map">
          <Image src="/images/pin-map.png" width={1160} height={428} />
        </div>
      </div>
    </StyledAboutUs>
  );
}

export default AboutUs;
