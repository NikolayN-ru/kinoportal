import Link from "next/link";
import { FC } from "react";
import Icon from "../ui-kit/IconComponent/Icon";
import Button from "@components/ui-kit/Button";
import s from "./Footer.module.scss";
import { useTranslation } from "react-i18next";
import "../../i18n";

const Footer: FC = () => {
  const { t } = useTranslation();

  interface IComunityLink {
    id: string;
    iconName: string;
  }

  const comunityLinks: IComunityLink[] = [
    { id: "1", iconName: "vk" },
    { id: "2", iconName: "ok" },
    { id: "3", iconName: "twitter" },
    { id: "4", iconName: "callback" },
    { id: "5", iconName: "in" },
    { id: "6", iconName: "tg" },
  ];


  
  return (
    <div className={s.footer}>
      <div className={s.container}>
        <div className={s.row}>
          <div className={s.column}>
            <div className={s.title}>{t("footer.about")}</div>
            <div className={s.item}>
              <Link
                className={s.link}
                href="https://corp.ivi.ru/"
                target="_blank"
              >
                {t("footer.aboutCompany")}
              </Link>
            </div>
            <div className={s.item}>
              <Link
                className={s.link}
                href="https://corp.ivi.ru/career/#career-vacancy-block"
                target="_blank"
              >
                {t("footer.jobs")}
              </Link>
            </div>
            <div className={s.item}>
              <Link
                className={s.link}
                href="https://www.ivi.ru/pages/beta/"
                target="_blank"
              >
                {t("footer.beta")}
              </Link>
            </div>
            <div className={s.item}>
              <Link
                className={s.link}
                href="https://www.ivi.ru/info/partners"
                target="_blank"
              >
                {t("footer.information")}
              </Link>
            </div>
            <div className={s.item}>
              <Link
                className={s.link}
                href="https://corp.ivi.ru/advertisers/"
                target="_blank"
              >
                {t("footer.advertising")}
              </Link>
            </div>
            <div className={s.item}>
              <Link
                className={s.link}
                href="https://www.ivi.ru/info/agreement"
                target="_blank"
              >
                {t("footer.termsOfUse")}
              </Link>
            </div>
            <div className={s.item}>
              <Link
                className={s.link}
                href="https://www.ivi.ru/info/confidential"
                target="_blank"
              >
                {t("footer.provacyPolicy")}
              </Link>
            </div>
            <div className={s.item}>
              <Link
                className={s.link}
                href="https://www.ivi.ru/info/goryachaya-liniya-komplaens"
                target="_blank"
              >
                {t("footer.compliance")}
              </Link>
            </div>
          </div>
          <div className={s.column}>
            <div className={s.title}>{t("footer.sections")}</div>
            <div className={s.item}>
              <Link
                className={s.link}
                href="https://www.ivi.ru/new"
                target="_blank"
              >
                {t("footer.myIvi")}
              </Link>
            </div>
            <div className={s.item}>
              <a className={s.link} href="/" target="_blank">
                {t("footer.whatsNew")}
              </a>
            </div>
            <div className={s.item}>
              <a className={s.link} href="/" target="_blank">
                {t("footer.films")}
              </a>
            </div>
            <div className={s.item}>
              <a className={s.link} href="/" target="_blank">
                {t("footer.serials")}
              </a>
            </div>
            <div className={s.item}>
              <a className={s.link} href="/" target="_blank">
                {t("footer.cartoon")}
              </a>
            </div>
            <div className={s.item}>
              <a className={s.link} href="/" target="_blank">
                {t("footer.TV")}
              </a>
            </div>
            <div className={s.item}>
              <a className={s.link} href="/" target="_blank">
                {t("footer.whatToSee")}
              </a>
            </div>
            <div className={s.item}>
              <a href="/" target="_blank">
                <span className={s.gradient}>{t("footer.certificate")}</span>
              </a>
            </div>
          </div>
          <div className={s.column}>
            <div className={s.title}>{t("footer.support")}</div>
            <div className={s.description_block}>
              <div className={s.description}>{t("footer.helpYou")}</div>
              <div className={s.description}>{t("footer.operators")} 24/7</div>
            </div>
            <div className={s.support_block}>
              <div className={s.chat}>
                <Button
                  color="blue"
                  className={s.chat_btn}
                  title={String(t("footer.writeChat"))}
                />
              </div>
              <div className={s.contact__icons}>
                <Button
                  color="blue"
                  className={s.contact_btn}
                  title={<Icon name="message" />}
                />
                <Button
                  color="blue"
                  className={s.contact_btn}
                  title={<Icon name="tel" />}
                />
              </div>
              <div className={s.ask_block}>
                <span className={s.ask_text}>ask.ivi.ru</span>
                {t("footer.answersQuestions")}
              </div>
            </div>
          </div>
          <div className={s.column}>
            <div className={s.footer__widget}>
              <div className={s.image_wrap}>
                <Icon name="mouthpiece" />
              </div>
              <div className={s.footer_widget_text}>
                {t("footer.watchMovies")}
              </div>
            </div>
          </div>
        </div>
        <div className={s.subFooter}>
          <div className={s.stores}>
            <div className={s.overturn}>
              <div className={s.overturn_btn_wrap}>
                <Button
                  color="blue"
                  className={s.overturn_btn}
                  title={<Icon name="apple" />}
                  preamble={String(t("footer.download"))}
                  text="App Store"
                />
              </div>
              <div className={s.overturn_btn_wrap}>
                <Button
                  color="blue"
                  className={s.overturn_btn}
                  title={<Icon name="android" />}
                  preamble={String(t("footer.available"))}
                  text="Google Play"
                />
              </div>
              <div className={s.overturn_btn_wrap}>
                <Button
                  color="blue"
                  className={s.overturn_btn}
                  title={<Icon name="tv" />}
                  preamble={String(t("footer.look"))}
                  text="Smart TV"
                />
              </div>
              <div className={s.overturn_btn_wrap}>
                <Button
                  color="blue"
                  className={s.overturn_btn}
                  title={<Icon name="desktop" />}
                  text={String(t("footer.allDevices"))}
                />
              </div>
            </div>

            <div className={s.copyrights_block}>
              <div className={s.copyrights_site}>© 2023 ООО «Иви.ру»</div>
              <div className={s.copyrights_content}>
                HBO ® and related service marks are the property of Home Box
                Office, Inc
              </div>
            </div>
          </div>
          <div className={s.community}>
            {comunityLinks.map((comunityLink) => {
              return (
                <div className={s.community_link} key={comunityLink.id}>
                  <Button
                    color="blue"
                    className={s.social}
                    title={<Icon name={comunityLink.iconName} />}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
