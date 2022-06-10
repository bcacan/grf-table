import Image from "next/image";
import { FC, forwardRef, useEffect, useState } from "react";

import {
  Text_Title,
  Text_Body,
  Text_Body2,
  Text_Description,
  Text_Subtitle,
  Text_Subtitle2,
  Text_Pitanja,
  Text_Citat,
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
  SubHeader,
  InfoContent,
  PageMenu,
} from "components/Window/Window.styled";
import Map from "./Map";
import { BottomLine } from "components/Window/BottomLine.styled";
import { ArrowsButton, CloseButton } from "components/Window/Buttons";

import { InfoText, MapText } from "content/texts";
import { config, useSpring } from "@react-spring/web";
import { theme } from "styles/theme";

const MapWindow = forwardRef((props: any, ref) => {
  const [page, setPage] = useState(3);
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
            <InfoContentAutori2 />
          </InfoContent>,
        );
        break;
      case 1:
        // winStyleApi.start({
        //   height: theme.const.window_largeHeight,
        // });
        // contentStyleApi.start({
        //   height: theme.const.info_content_largeHeight,
        //   top: theme.const.info_content_largeTop,
        // });
        setPageContent(
          <InfoContent style={contentStyle}>
            <InfoContentAutori />
          </InfoContent>,
        );
        break;

      case 3:
        setPageContent(
          <InfoContent style={contentStyle}>
            <PocetniTab />
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
          <Text_Title className="title">{MapText.title}</Text_Title>

          <ArrowsButton />
          <CloseButton />
        </Header>
        <BottomLine />

        <PageMenu>
          <nav>
            <a onTouchStart={(e) => setPage(1)}>
              <Text_Subtitle className={`page-label-1 ${page == 1 && "active-page"}`}>
                {MapText.tab1}
              </Text_Subtitle>
            </a>
            <a onTouchStart={(e) => setPage(2)}>
              <Text_Subtitle className={`page-label-TTT ${page == 2 && "active-page"}`}>
                {MapText.tab2}
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
MapWindow.displayName = "MapWindow";
export default MapWindow;

const InfoContentAutori = () => {
  return (
    <>
      <br />
      <TwoColumns>
        <div>
          <Text_Description>
            <Text_Subtitle2>Mihaela Galaš</Text_Subtitle2>, studentica Grafičkog fakulteta
            u Zagrebu, smjer Multimedij.
            <p>
              <i>
                “Holografija mi je bio predmet na fakultetu i nisam znala što očekivati,
                ali kad sam vidjela prve holograme željela sam više naučiti o tome.
                Također Holografija je bila nešto potpuno različito od stvari koje smo
                učili do sad na fakultetu. Između ostalog moji interesi su dizajn mobilnih
                i web aplikacija i PR te bih se u tom smjeru htjela nastaviti razvijati.”
              </i>
            </p>
            <br />
            <Text_Subtitle2>Filip Macan</Text_Subtitle2>, student Grafičkog fakulteta u
            Zagrebu, smjer Tehničko-tehnološki.
            <p>
              <i>
                “O hologramima najduže vremena nisam puno znao, ali oduvijek me je
                interakcija holograma i promatrača jako intrigirala. Nadam se da će i vas
                ova naša izložba uvući u čudesni svijet holografije.”
              </i>
            </p>
          </Text_Description>
        </div>
        <div>
          <Text_Description>
            <Text_Subtitle2>Jana Jambrešić</Text_Subtitle2>, studentica Grafičkog
            fakulteta u Zagrebu, smjer Multimedij.
            <p>
              <i>
                “Odlučila sam se baviti holografijom te sudjelovati u izložbi jer većina
                ljudi ne zna što je to hologram i holografija, a kroz izložbu koja je
                edukativna i nije nešto što se viđa svaki dan možemo prenjeti svoje znanje
                drugima. Između ostalog moji interesi su UX/UI dizajn te bih se u tom
                smjeru htjela nastaviti razvijati.”
              </i>
            </p>
            <br />
            <Text_Subtitle2>Marija Puzjak</Text_Subtitle2>, studentica Grafičkog fakulteta
            u Zagrebu, smjer Multimedij.
            <p>
              <i>
                “Svatko od nas ima različito razmišljanje kada čuje riječ hologram i
                drugačije si to može predočiti. Moja prva pomisao bili su filmovi.
                Međutim, kada smo krenuli s učenjem holografije na fakultetu, moj pogled
                na to područje se promijenio, a možda će se i vama. Holografija mi je
                postala jedna od dražih područja interesa, a uz to mojim interesima nema
                kraja.”
              </i>
            </p>
          </Text_Description>
        </div>
      </TwoColumns>
    </>
  );
};
const InfoContentAutori2 = () => {
  return (
    <>
      <br />
      <TwoColumns>
        <div>
          <Text_Description>
            <Text_Subtitle2>Ivona Jurišić</Text_Subtitle2>, studentica Grafičkog fakulteta
            u Zagrebu, smjer Multimedij.
            <p>
              <i>
                “Holografija kao kolegij na fakultetu me jako privukla u otkrivanje nečeg
                novog, drugačijeg i nepoznatog. Jako sam zainteresirana baviti se
                zaštitnim tiskom i grafikom, a proučavanje holograma, koji su jedan od
                zaštitnih elemenata u tisku, upotpunili su moje znanje.”
              </i>
            </p>
            <br />
            <Text_Subtitle2>Lucija Pavlović</Text_Subtitle2>, studentica Grafičkog
            fakulteta u Zagrebu, smjer Multimedij.
            <p>
              <i>
                “Počela sam se baviti holografijom jer su mi hologrami na prvu bili nešto
                potpuno novo i drugačije, a kad ih jednom krenete izrađivati sve ste više
                oduševljeni njihovim mogućnostima. Osim holografije, moji interesi su 3D
                modeliranje, animacija i dizajn aplikacija te bih voljela izgraditi
                karijeru u tim granama struke.”
              </i>
            </p>
          </Text_Description>
        </div>
        <div>
          <Text_Description>
            <Text_Subtitle2>Tara Vagner</Text_Subtitle2>, studentica Grafičkog fakulteta u
            Zagrebu, smjer Multimedij.
            <p>
              <i>
                “Iako je meni holografija prestavljala dosta apstraktan pojam, kao predmet
                na fakultetu bila je učenje nečega sasvim novoga. Najviše me je oduševilo
                to da pravi hologrami zapravo nisu ono što sam ja mislila da jesu. Iako je
                holografija jedan od mojih interesa, najveća želja mi je biti profesorica,
                kako bi druge ljude mogla podučavati grafičkoj struci i pokazati im koliko
                je ona zanimljiva i raznolika.”
              </i>
            </p>
            <br />
            <Text_Subtitle2>Jelena Katarina Milićević</Text_Subtitle2>, studentica
            Grafičkog fakulteta u Zagrebu, smjer Multimedij.
            <p>
              <i>
                “Holografija mi je predstavljala nešto apstraktno i zapravo nisam znala
                što me čeka na tom kolegiju. Kada sam malo dublje ušla u to, jako mi se
                svidjelo te sam htjela sudjelovati u izložbi. Osim holografije, moji
                interesi uključuju 3D, animaciju, dizajn igrica te UX/UI dizajn.”
              </i>
            </p>
          </Text_Description>
        </div>
      </TwoColumns>
    </>
  );
};

const PocetniTab = () => {
  return (
    <div style={{ transform: "scale(1) translateY(-4em)", height: "100%" }}>
      <span style={{ display: "grid", placeItems: "center" }}>
        <Image src="/graphics/izlozba/hologram.png" width={684} height={636} />
      </span>
      <br />
      <Text_Pitanja style={{ position: "absolute", top: "6em", left: "2em" }}>
        tko su studenti iza holograma?
      </Text_Pitanja>
      <Text_Citat
        style={{ position: "absolute", top: "16em", left: "3em", width: "80%" }}
      >
        “Memories are like holograms: you recreate in your head the whole image of
        something which isn’t there.” ~Dr. Richard Bandler
      </Text_Citat>
    </div>
  );
};
