import dynamic from "next/dynamic";
import React from "react";
import { useTranslations } from "next-intl";
import { StyledCountdown } from "./styled";

const Timer = dynamic(() => import("./time"), {
  ssr: false,
});

function CountDown() {
  const t = useTranslations("banner");
  return (
    <StyledCountdown>
      <div className={"countDown-title"}>{t("getting")}</div>
      <div className="time">
        <Timer targetDate={new Date().setDate(new Date().getDate() + 30)} />
      </div>
    </StyledCountdown>
  );
}

export default CountDown;
