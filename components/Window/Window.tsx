import Image from "next/image";
import { useState } from "react";

import {
  Text_Title,
  Text_Body,
  Text_Body2,
  Text_Description,
  Text_Subtitle,
  Text_Subtitle2,
} from "styles/texts";
import {
  WindowCSS,
  GalleryWindowCSS,
  Header,
  Content,
  TwoColumns,
  Footer,
} from "./Window.styled";

const Window = () => {
  return (
    <WindowCSS>
      <InfoWindow />
    </WindowCSS>
  );
};
export default Window;

const GalleryWindow = () => {
  return (
    <GalleryWindowCSS>
      <Header>
        <div className="logo">
          <Image src="/graphics/logo-grf.svg" height={64} width={64} />
        </div>
        <Text_Title className="title">O STUDENTIMA</Text_Title>
        <div className="x-button">
          <Image src="/graphics/x-icon.svg" height={30} width={30} />
        </div>

        <div className="subtitle">
          <Text_Subtitle>galerija</Text_Subtitle>
          <hr className="line" />
        </div>
      </Header>
      <Content>
        <p>sda das dsa dsa sad dsa asd asd sad asd</p>
        <p>sda das dsa dsa sad dsa asd asd sad asd</p>
        <p>sda das dsa dsa sad dsa asd asd sad asd</p>v v
        <p>sda das dsa dsa sad dsa asd asd sad asd</p>
        <p>sda das dsa dsa sad dsa asd asd sad asd</p>
        <p>sda das dsa dsa sad dsa asd asd sad asd</p>
        <p>sda das dsa dsa sad dsa asd asd sad asd</p>
        <p>sda das dsa dsa sad dsa asd asd sad asd</p>
        <p>sda das dsa dsa sad dsa asd asd sad asd</p>
        <p>sda das dsa dsa sad dsa asd asd sad asd</p>
        <p>sda das dsa dsa sad dsa asd asd sad asd</p>
        <p>sda das dsa dsa sad dsa asd asd sad asd</p>v v
        <p>sda das dsa dsa sad dsa asd asd sad asd</p>
        <p>sda das dsa dsa sad dsa asd asd sad asd</p>
        <p>sda das dsa dsa sad dsa asd asd sad asd</p>
        <p>sda das dsa dsa sad dsa asd asd sad asd</p>
        <p>sda das dsa dsa sad dsa asd asd sad asd</p>
        <p>sda das dsa dsa sad dsa asd asd sad asd</p>
      </Content>
      {/* <footer contentEditable>Footer Content</footer> */}
    </GalleryWindowCSS>
  );
};

const InfoWindow = () => {
  const [tab, setTab] = useState(0);
  const changeTab = (x: number) => {
    setTab(x);
  };

  return (
    <GalleryWindowCSS>
      <Header>
        <div className="logo">
          <Image src="/graphics/logo-grf.svg" height={64} width={64} />
        </div>
        <Text_Title className="title">O FAKULTETU</Text_Title>
        <div className="x-button">
          <Image src="/graphics/x-icon.svg" height={30} width={30} />
        </div>

        <div className="menu">
          <nav>
            <a onClick={(e) => changeTab(0)}>
              <Text_Subtitle className={tab ? "" : "active"}>UPISI</Text_Subtitle>
            </a>
            <a onClick={() => changeTab(1)}>
              <Text_Subtitle className={tab ? "active" : ""}>STUDIJ</Text_Subtitle>
            </a>
          </nav>
        </div>
      </Header>
      <InfoContent tab={tab} />
      <Footer>
        <div className="logo">
          <Image src="/graphics/qr-code.svg" height={64} width={64} />
        </div>
        <Text_Body2 className="text">SCAN ME!</Text_Body2>
        <Text_Body className="text2">Grafički fakultet</Text_Body>
      </Footer>
    </GalleryWindowCSS>
  );
};

const InfoContent = ({ tab }: { tab: number }) => {
  const upisi = (
    <Content>
      <TwoColumns>
        <div>
          <Text_Description>
            <p>
              Od 2010. godine u sustav obrazovanja Republike Hrvatske uvodi se državna
              matura kao standardizirani završni ispit srednjoškolske izobrazbe.
            </p>
            <p>
              Prijava ispita državne mature i prijava za upis na studijske programe izvodi
              se putem nacionalnog informacijskog sustava prijava na visoka učilišta
              (NISpVU) kojemu se pristupa preko mrežne stranice www.postani-student.hr.
            </p>
            <p>
              Obvezu polaganja državne mature imaju učenici gimnazijskih programa, dok će
              učenici strukovnih škola polagati državnu maturu samo ako žele nastaviti
              obrazovanje na nekom od visokih učilišta.
            </p>
            <p>
              Uspjeh ostvaren na državnoj maturi temelj je rangiranja kandidata
              prijavljenih na studijske programe pojedinih fakulteta.
            </p>
          </Text_Description>
        </div>
        <div>
          <Text_Description>
            <p> Za kandidate prijavljene na studijski program grafičke tehnologije:</p>
            <p>
              Tehničko-tehnološki smjer, uspjeh ostvaren na državnoj maturi relevantan je
              čimbenik rangiranja prijavljenih kandidata;
            </p>
            <p>
              Smjer Dizajn grafičkih proizvoda, provest će se postupak dodatne provjere
              posebnih sposobnosti (dodatni uvjet za upis na navedeni smjer).
            </p>
            <p>
              Podaci o načinu, uvjetima i vremenu održavanja postupka dodatne provjere
              posebnih sposobnosti, bit će objavljeni u Natječaju za upis na studijske
              programe u ak. godini, kojeg će raspisati Sveučilište u Zagrebu.
            </p>
          </Text_Description>
        </div>
      </TwoColumns>
    </Content>
  );

  const studij = (
    <Content>
      <TwoColumns>
        <div>
          <Text_Description>
            <p>
              Na preddiplomskom Studiju grafičke tehnologije studenti imaju mogućnost
              izbora između
            </p>
            <ul>
              <li>Tehničko-tehnološkog smjera i </li>
              <li>smjera Dizajn grafičkih proizvoda.</li>
            </ul>
            <p>
              Studenti tehničko-tehnološkog smjera stjecanjem osnovnih i, za grafičku
              tehnologiju specifičnih, znanja i vještina iz područja matematike, fizike,
              kemije i računalno-informacijske tehnologije usvajaju temelje za
              razumijevanje tehničko-tehnološkoga lanca stvaranja grafičkoga proizvoda.
              <br /> Specifična znanja i vještine studenti stječu kroz teme koje čine
              jezgru programa: materijali u grafičkoj proizvodnji, tiskovne forme,
              reprodukcijska fotografija, tipografija, tisak, knjigoveštvo, ambalaža,
              organizacija grafičke proizvodnje, multimedijske komunikacije, marketing i
              kontrola kvalitete.
            </p>
            <p>
              Uz svladavanje osnovnih tema iz navedenih područja, studenti smjera Dizajn
              grafičkih proizvoda stječu temeljna znanja i vještine iz područja
              likovno-grafičke kulture, teorije oblika, likovne prakse, originalne
              grafike, fotografije, komunikologije i vizualnih komunikacija. Iskazivanjem
              sposobnosti korištenja navedenih znanja i vještina te osobnih i drugih
              metodoloških sposobnosti u situacijama rada i učenja, studenti koji završe
              preddiplomski Studij grafičke tehnologije stječu kompetencije:
            </p>
            <ul>
              <li>
                upravljanja složenim tehnološkim ili stručnim aktivnostima projekata,
              </li>
              <li>preuzimanja odgovornosti za donošenje odluka u realnom okruženju </li>
              <li>rada ili učenja i </li>
              <li>preuzimanja odgovornosti za profesionalno upravljanje.</li>
            </ul>
            Integracijom teorijskih znanja i praktičnih vještina studenti stječu
            kompetencije za rješavanje problema u području grafičkog inženjerstva i
            grafičke struke. Konkretni stupanj kompetencije iz pojedinog od navedenih
            područja ovisi o odabranom smjeru te izbornim kolegijima koje je student
            položio tijekom studija. Na ovoj razini studenti koji su završili
            preddiplomski Studij grafičke tehnologije na Grafičkom fakultetu stječu
            <br />- opće kompetencije iz:
            <ul>
              <li>
                rješavanja problema korištenjem matematičkih operacija i logičnog
                razmišljanja
              </li>
              <li> profesionalne komunikacije na hrvatskom jeziku</li>
              <li> profesionalne komunikacije na stranom jezik</li>
              <li>upravljanja vlastitim učenjem i usavršavanjem </li>
              <li>korištenja informacijske i komunikacijske tehnologije </li>
              <li>
                poduzetnosti i inovativnosti, konstruktivnog i učinkovitog djelovanja u
                društvu i participacije u građanskom životu
              </li>
            </ul>
            - specifične kompetencije iz područja:
            <ul>
              <li>
                grafičke pripreme, tiska, grafičke dorade, multimedijske tehnologije i
                dizajniranja grafičkih proizvoda i medija grafičke komunikacije
              </li>
            </ul>
          </Text_Description>
        </div>
        <div>
          <Text_Description>
            <p>
              Osobe koje su završile preddiplomski Studij grafičke tehnologije
              osposobljene su za samostalan rad u grafičkoj industriji te u različitim
              segmentima na nju vezanih djelatnosti. Stečene im kompetencije omogućuju
              samostalno vođenje grafičke proizvodnje, tj. bilo kojeg pogona tiskare
              (pripreme, tiska ili dorade) te obavljanje poslova vezanih uz dizajn
              suvremenih medija grafičkih komunikacija, nakladništvo, ambalažu, grafički
              menadžment, industriju papira te niza zanimanja vezanih uz multimediju.
            </p>
            <p>
              Preddiplomski sveučilišni studij grafičke tehnologije izvodi se u trajanju
              od šest semestra ( 180 ects bodova) čijim se završetkom stječe titula
              Sveučilišni prvostupnik/prvostupnica (baccalaureus/baccalaurea)
              inženjer/inženjerka grafičke tehnologije.
            </p>
            <p>
              Nakon završetka sveučilišnoga preddiplomskog Studija grafičke tehnologije
              student stječe pravo upisa na sveučilišni diplomski Studij grafičke
              tehnologije na Grafičkom fakultetu. Uvjete za upis na druge studijske
              programe određuju te institucije.
            </p>
          </Text_Description>
          <br /> <br /> <br /> <br /> <br /> <br />
          <Image src="/graphics/studenti.png" width={465} height={349} />
        </div>
      </TwoColumns>
    </Content>
  );

  switch (tab) {
    case 0:
      return upisi;
      break;
    case 1:
      return studij;
      break;
    default:
      return null;
      break;
  }
};
