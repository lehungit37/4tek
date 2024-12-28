import Image from "next/image";
import React from "react";
import { StyledGameItem } from "./styled";

function GameItem({ title, index, order }) {
  return (
    <StyledGameItem order={order}>
      <div className="image">
        <Image width={410} height={560} src={`/images/game${index}.png`} />
      </div>
      <div className="info">
        <div className="game-title">{title}</div>
        <div className="game-des">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
    </StyledGameItem>
  );
}

export default GameItem;
