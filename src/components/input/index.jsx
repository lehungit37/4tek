import Image from "next/image";
import { useTranslations } from "next-intl";

const { StyledInput } = require("./styled");

function Input({ white, placeHolderKey = "mail" }) {
  const t = useTranslations("input");
  return (
    <StyledInput className={white ? "white" : ""}>
      <input placeholder={t(placeHolderKey)} />
      <div className="icon">
        <Image
          src={`/images/arrow-right${white ? "-black" : ""}.svg`}
          width={24}
          height={24}
        />
      </div>
    </StyledInput>
  );
}

export default Input;
