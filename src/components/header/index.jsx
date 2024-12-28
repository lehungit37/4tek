import React, { useEffect, useState } from "react";
import styles from "./header.module.css";
import { StyledHeader } from "./styled";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/router";

function Header() {
  const t = useTranslations();
  const router = useRouter();
  const { locale, asPath } = router;

  const changeLanguage = (flag) => {
    router.push(asPath, asPath, { locale: flag.locale });
    setFlagSelected(flag);
  };

  const LIST = [
    { id: "about-us", title: t("menu.aboutUs") },
    { id: "games", title: t("menu.game") },
    { id: "partner", title: t("menu.partner") },
    { id: "contact-us", title: t("menu.contact") },
  ];

  const FLAGS = [
    {
      image: "/images/viet-nam.svg",
      name: t("locale.vi"),
      locale: "vi",
    },
    {
      image: "/images/eng.svg",
      name: t("locale.en"),
      locale: "en",
    },
  ];

  const [flagSelected, setFlagSelected] = useState(FLAGS[0]);
  const [openLocale, setOpenLocale] = useState(false);
  const [showMenu, setShowMenu] = useState(true);

  const getDefault = () => {
    if (!locale) {
      return FLAGS[0];
    }

    return FLAGS.find((flag) => flag.locale === locale) || FLAGS[0];
  };

  useEffect(() => {
    setFlagSelected(getDefault());
  }, [locale]);

  const changeShowMenu = (status) => {
    setShowMenu(status);
  };

  const onMenuClick = (link) => {
    router.push(link);
    changeShowMenu(false);
  };

  const getDiffirentLocale = () => {
    return FLAGS.find((flag) => flag.locale !== flagSelected.locale);
  };

  return (
    <StyledHeader>
      <div className="logo" onClick={() => router.push("/")}></div>
      <div className={"list-menu"}>
        {LIST.map((item, index) => {
          return (
            <a key={index} href={`#${item.id}`} className={"menu-item"}>
              {item.title}
            </a>
          );
        })}

        <div
          className="menu-item flag"
          onClick={() => setOpenLocale(!openLocale)}
        >
          <Image width={40} height={40} src={flagSelected.image} />
          <div className="arrow">
            <Image width={10} height={5} src="/images/arrow-down.svg" />
          </div>

          {openLocale && (
            <div className="list-flag">
              {FLAGS.map((flag) => {
                return (
                  <div
                    className="flag-item"
                    onClick={() => changeLanguage(flag)}
                    key={flag.locale}
                  >
                    <div className="check">
                      {flag.locale === flagSelected.locale && (
                        <Image
                          width={24}
                          height={24}
                          src="/images/tick.svg"
                          className="check"
                        />
                      )}
                    </div>
                    <div className="info">
                      <Image width={40} height={40} src={flag.image} />
                      <span>{flag.name}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <div className="bar-icon" onClick={() => changeShowMenu(true)}>
        <Image src="/images/menu.svg" width={40} height={40} />
      </div>

      {showMenu && (
        <div className="mobile-menu">
          <div className="header">
            <div className="flag">
              <div
                className="flag-logo"
                onClick={() => changeLanguage(getDiffirentLocale())}
              >
                <Image
                  width={32}
                  height={32}
                  src={getDiffirentLocale().image}
                />
              </div>
              <Image src="/images/arrow-drop-down.svg" width={24} height={24} />
            </div>
            <div className="close" onClick={() => setShowMenu(false)}>
              <Image src="/images/close.svg" width={40} height={40} />
            </div>
          </div>
          <div className="mb-list-menu">
            {LIST.map((item) => {
              return (
                <div
                  onClick={() => onMenuClick(`#${item.id}`)}
                  className={"mb-menu-item"}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </StyledHeader>
  );
}

export default Header;
