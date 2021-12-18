import Head from "../components/Head";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Link from "next/link";
import Image from "next/image";

import { MdDownload } from "react-icons/md";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export async function getServerSideProps(context) {
  return {
    props: {
      ...(await serverSideTranslations(context.locale, ["branding", "navbar", "footer", "getstarted"])),
    },
  };
}

export default function Branding() {
  const { t } = useTranslation("branding");

  return (
    <>
      <Head title={t("title")} />
      <Navbar />
      <header>
        <div className="promotion">
          <span>{t("title")}</span>
          <br />
          <span className="two">{t("description")}</span>
        </div>
      </header>
      <div style={{ marginTop: "550pt" }} className="content" />
      <div className="brandingContainer">
        <div className="content">
          <h2>{t("logos.title")}</h2>
          <p>{t("logos.description")}</p>
          <div className="logos">
            <div className="logo">
              <Image
                src="https://res.cloudinary.com/mue/website/logo_horizontal.webp"
                width="256"
                height="70"
                draggable="false"
                alt="Mue Horizontal"
              />
            </div>
            <div className="logo">
              <Image
                src="https://res.cloudinary.com/mue/website/logo_round.webp"
                height="80"
                width="80"
                draggable="false"
                alt="Mue Round"
              />
            </div>
            <div className="logo">
              <Image
                src="https://res.cloudinary.com/mue/website/logo_square.webp"
                height="80"
                width="80"
                draggable="false"
                alt="Mue Square"
              />
            </div>
            <div className="logo">
              <Image
                src="https://res.cloudinary.com/mue/website/logo_tile.webp"
                height="80"
                width="120"
                draggable="false"
                alt="Mue Tile"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="brandingContainer colour">
        <div className="content">
          <h2>{t("colours.title")}</h2>
          <p>{t("colours.description")}</p>
          <div className="cards">
            <div className="card theme orange" data-aos="fade-in">
              <h1>{t("colours.orange")}</h1>
              <p>#ffb032</p>
            </div>
            <div className="card theme pink" data-aos="fade-in">
              <h1>{t("colours.pink")}</h1>
              <p>#dd3b67</p>
            </div>
            <div className="card theme white" data-aos="fade-in">
              <h1>{t("colours.white")}</h1>
              <p>#fffff</p>
            </div>
          </div>
        </div>
      </div>
      <div className="getstarted">
        <div className="content">
          <span className="title">{t("getstarted.title")}</span>
          <span className="desc">{t("getstarted.description")}</span>
          <Link href="https://www.dropbox.com/s/rwi61drgu74ywch/mue-branding.pdf?dl=1">
            <a>
              <button className="hollow">
                <MdDownload /> {t("getstarted.download")}
              </button>
            </a>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}