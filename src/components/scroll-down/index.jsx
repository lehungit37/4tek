import { useWindowScroll } from "@/hook/useWindowScroll";
import { StyledScrollDown } from "./styled";
import Image from "next/image";

function ScrollDown() {
  const [{ y }, scrollTo] = useWindowScroll();

  const isDown = y > 1000;

  const onClick = () => {
    if (isDown) {
      scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    return scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <StyledScrollDown onClick={onClick} className={y > 1000 ? "rote" : ""}>
      <Image src={"/images/scroll-down.svg"} width={29} height={17} />
    </StyledScrollDown>
  );
}

export default ScrollDown;
