import React from "react";
import GameItem from "./game-item";
import { StyledGameItem, StyledOurGame } from "./styled";
import { useTranslations } from "next-intl";

const DATA = [
  { title: "e-space", order: 0 },
  { title: "king-land", order: 6 },
  { title: "last-game", order: 1 },
  { title: "g-dragon", order: 7 },
  { title: "pirates", order: 2 },
  { title: "witch-party", order: 8 },
  { title: "rocky", order: 3 },
  { title: "blue-fire", order: 9 },
  { title: "magic-tree", order: 4 },
  { title: "aborigines", order: 10 },
  { title: "cinderella", order: 5 },
  { title: "egypt", order: 11 },
];

// 1 - 3;
// 3 - 7;
// 5 - 11;
// 7 - 4;
// 9 - 8;
// 11 - 12;

function OurGame() {
  const t = useTranslations("game");

  return (
    <StyledOurGame id="games">
      <div className="title">
        <h2>{t("title")}</h2>
        <p className="des">{t("des")}</p>
      </div>

      <div className="list-game">
        {DATA.map((item, index) => {
          return (
            <GameItem
              order={item.order}
              title={t(item.title)}
              index={index + 1}
              key={index}
            />
          );
        })}
      </div>
    </StyledOurGame>
  );
}

export default OurGame;
