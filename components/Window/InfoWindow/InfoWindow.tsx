import Image from "next/image";
import { forwardRef, useEffect, useState } from "react";

import {
  Text_Title,
  Text_Body,
  Text_Body2,
  Text_Description,
  Text_Subtitle,
  Text_Subtitle2,
  Text_Pitanja,
} from "styles/texts";

import {
  WindowCSS,
  MainWindowCSS,
  Header,
  Content,
  TwoColumns,
  Footer,
  MenuStudij,
  VerticalText,
  MenuLines,
  PageMenu,
  InfoContent,
} from "components/Window/Window.styled";
import { BottomLine } from "components/Window/BottomLine.styled";
import { ArrowsButton, CloseButton } from "components/Window/Buttons";
import { config, useSpring } from "@react-spring/web";
import { theme } from "styles/theme";

import { InfoText } from "content/texts";

const InfoWindow = forwardRef((props: any, ref) => {
  const [page, setPage] = useState(1);
  const [tab, setTab] = useState(1);

  const [pageContent, setPageContent] = useState(<></>);

  const [winStyle, winStyleApi] = useSpring(() => ({
    height: theme.const.window_smallHeight,
    config: config.gentle,
  }));

  const [contentStyle, contentStyleApi] = useSpring(() => ({
    height: theme.const.info_content_smallHeight,
    top: theme.const.info_content_smallTop,

    config: config.default,
  }));

  useEffect(() => {
    switch (page) {
      case 2:
        winStyleApi.start({
          height: theme.const.window_smallHeight,
        });
        contentStyleApi.start({
          height: theme.const.info_content_smallHeight,
          top: theme.const.info_content_smallTop,
        });
        setPageContent(
          <InfoContent style={contentStyle}>
            <InfoContentUpisi />
          </InfoContent>,
        );
        break;
      case 1:
        winStyleApi.start({
          height: theme.const.window_largeHeight,
        });
        contentStyleApi.start({
          height: theme.const.info_content_largeHeight,
          top: theme.const.info_content_largeTop,
        });
        setPageContent(
          <InfoContent style={contentStyle}>
            <InfoContentStudij tab={tab} />
          </InfoContent>,
        );
        break;
      default:
        break;
    }
  }, [page, tab]);

  return (
    <>
      <MainWindowCSS ref={ref} style={winStyle}>
        <Header>
          <div className="logo">
            <Image src="/graphics/logo-grf.svg" height={64} width={64} />
          </div>
          <Text_Title className="title">{InfoText.title}</Text_Title>

          <ArrowsButton />
          <CloseButton />
        </Header>
        <BottomLine />

        <PageMenu>
          <nav>
            <a onTouchStart={(e) => setPage(1)}>
              <Text_Subtitle className={`page-label-1 ${page == 1 && "active-page"}`}>
                {InfoText.tab1}
              </Text_Subtitle>
            </a>
            <a onTouchStart={(e) => setPage(2)}>
              <Text_Subtitle className={`page-label-2 ${page == 2 && "active-page"}`}>
                {InfoText.tab2}
              </Text_Subtitle>
            </a>
          </nav>
        </PageMenu>

        {pageContent}

        <Footer>
          <div className="logo">
            <Image src="/graphics/izlozba/qr-instagram.svg" height={150} width={150} />
          </div>
          <Text_Body2 className="text">{InfoText.footer_qr}</Text_Body2>
          <Text_Body className="text2">{InfoText.footer_title}</Text_Body>
        </Footer>
      </MainWindowCSS>
    </>
  );
});
InfoWindow.displayName = "InfoWindow";
export default InfoWindow;

const InfoContentUpisi = () => {
  return (
    <>
      <TwoColumns>
        <div>
          <Text_Description>
            <p>
              Refleksijski hologrami formiraju sliku
              <b> reflektiranjem zrake svjetlosti od površine holograma</b>. Sastoji se od
              redova sićušnih paralelnih ogrebotina koje se ponašaju kao
              <b> raspršujuće reflektirajuće linije</b>. Ako se promijeni kut između
              promatrača i površine, te ogrebotine stvaraju
              <b> obrasce reflektirane svjetlosti</b> koja se čini kao da se predmet kreće
              preko površine.
            </p>
          </Text_Description>
          <Image src="/graphics/izlozba/tekst1.png" width={467} height={325} />
        </div>
        <div>
          <Text_Description>
            <p>
              Transmisijski hologram formira sliku
              <b> prolaskom svjetlosti kroz optičku rešetku</b> (mrežu transparentnih i
              netransparentnih dijelova). Svojstvima
              <b> interferencije i difrakcije</b> holoplakat tvori
              <b> sliku na 2D/3D zaslonu</b>. Pripremu za tisak holoplakata generira
              program koji je razvijen od strane stručnjaka na Grafičkom fakultetu.
            </p>
          </Text_Description>
          <Image src="/graphics/izlozba/tekst3.png" width={467} height={353} />
        </div>
      </TwoColumns>
    </>
  );
};

const InfoContentStudij = ({ tab }: { tab: number }) => {
  return (
    <>
      {clickBaitElement()}
      <TwoColumns>
        <div>
          <Text_Description>
            <p>
              <b>HoloGRF</b> grupa
              <b> studenata i profesora Grafičkog fakulteta u Zagrebu</b> nastala je kao
              inicijativa u svrhu <b>edukacije i promidžbe holografije</b> kao znanosti.
              Hologrami su nas oduševljavali i prikazivali nešto novo i zanimljivo te smo
              htjeli to podijeliti s drugima na zabavan način i započeti tradiciju koja će
              se nadamo se nastaviti i sa sljedećim generacijama.
            </p>
          </Text_Description>
          <br />
          <Image src="/graphics/izlozba/tekst2.png" width={467} height={314} />
        </div>
        <div>
          <br />
          <Image src="/graphics/izlozba/tekst4.png" width={467} height={443} />
          <Text_Description>
            <p>
              Jedna od zanimljivosti je da hologrami za koje ste do sada znali i vidjeli u
              filmovima <b>nisu pravi</b>. Uglavnom se radi o projekcijama i specijalnim
              efektima. Ali bez brige, <b>hologrami ipak postoje</b>! Na našoj izložbi
              tako možete vidjeti dvije vrste holograma –
              <b>refleksijski i transmisijski</b>.
            </p>
          </Text_Description>
        </div>
      </TwoColumns>
    </>
  );
};

const clickBaitElement = () => {
  return (
    <div style={{ transform: "scale(0.75) translateY(-15%)" }}>
      <span style={{ position: "absolute", top: "0.5em", left: "2em" }}>
        <Image src="/graphics/izlozba/holo1.png" width={175} height={97} />
      </span>
      <span style={{ position: "absolute", top: "6em", left: "17em" }}>
        <Image src="/graphics/izlozba/holo2.png" width={275} height={156} />
      </span>
      <span style={{ position: "absolute", top: "0em", left: "38em" }}>
        <Image src="/graphics/izlozba/holo3.gif" width={382} height={215} />
      </span>
      <span style={{ position: "absolute", top: "11em", left: "0" }}>
        <Image src="/graphics/izlozba/holo4.png" width={186} height={124} />
      </span>
      <span style={{ position: "absolute", top: "28em", left: "0" }}>
        <Image src="/graphics/izlozba/holo5.gif" width={350} height={150} />
      </span>
      <span style={{ position: "absolute", top: "24em", left: "25em" }}>
        <Image src="/graphics/izlozba/holo6.png" width={302} height={170} />
      </span>
      <span style={{ position: "absolute", top: "30em", left: "47em" }}>
        <Image src="/graphics/izlozba/holo7.png" width={277} height={156} />
      </span>
      <br />
      <br />
      <br /> <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <span style={{ color: theme.colors.cyan, display: "grid", placeItems: "center" }}>
        <Text_Pitanja>jesu li hologrami stvarni?</Text_Pitanja>
      </span>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};
