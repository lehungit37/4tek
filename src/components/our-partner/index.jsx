import { useWindowSize } from "@/hook/useWindowSize";
import Image from "next/image";
import { useEffect, useState } from "react";
import { StyledOurPartner } from "./styled";
import { useTranslations } from "next-intl";

function OurPartner() {
  const [active, setActive] = useState(0);
  const t = useTranslations("partner");

  const { width } = useWindowSize();

  const count = () => {
    if (width <= 1023) {
      return 5;
    }

    if (width <= 1460) {
      return 4;
    }

    return 3;
  };

  const onPrev = () => {
    if (active - 1 < 0) {
      setActive(count() - 1);
      return;
    }
    setActive(active - 1);
  };

  const onNext = () => {
    if (active + 1 === count()) {
      setActive(0);
      return;
    }
    setActive(active + 1);
  };

  const getSize = () => {
    if (width <= 1023) {
      return 188 + 12 + 94;
    }

    return 300;
  };

  return (
    <StyledOurPartner id="partner">
      <h2 className="title">{t("title")}</h2>
      <div className="slider">
        <div onClick={onPrev} className="left-arrow arrow">
          <Image width={40} height={40} src="/images/arrow-left.svg" />
        </div>
        <div className="list-logo">
          {new Array(7).fill("").map((item, index) => {
            const style = {
              transform: `translateX(-${getSize() * active}px)`,
            };

            return (
              <div className="logo" style={style}>
                <Image
                  src={`/images/logo${index + 1}.png`}
                  width={260}
                  height={100}
                />
              </div>
            );
          })}
        </div>
        <div onClick={onNext} className="right-arrow arrow">
          <Image width={40} height={40} src="/images/arrow-left.svg" />
        </div>
      </div>
    </StyledOurPartner>
  );
}

export default OurPartner;
