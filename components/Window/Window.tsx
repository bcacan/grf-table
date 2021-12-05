import Image from "next/image";

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
            <a>
              <Text_Subtitle className="active">UPISI</Text_Subtitle>
            </a>
            <a>
              <Text_Subtitle>STUDIJ</Text_Subtitle>
            </a>
          </nav>
        </div>
        {/* <Menu onMouseDown=() /> */}
      </Header>
      <Content>
        <TwoColumns>
          <div>
            <Text_Description>
              <p>
                Od 2010. godine u sustav obrazovanja Republike Hrvatske uvodi se državna
                matura kao standardizirani završni ispit srednjoškolske izobrazbe.
              </p>
              <p>
                Prijava ispita državne mature i prijava za upis na studijske programe
                izvodi se putem nacionalnog informacijskog sustava prijava na visoka
                učilišta (NISpVU) kojemu se pristupa preko mrežne stranice
                www.postani-student.hr.
              </p>
              <p>
                Obvezu polaganja državne mature imaju učenici gimnazijskih programa, dok
                će učenici strukovnih škola polagati državnu maturu samo ako žele
                nastaviti obrazovanje na nekom od visokih učilišta.
              </p>
              <p>
                Uspjeh ostvaren na državnoj maturi temelj je rangiranja kandidata
                prijavljenih na studijske programe pojedinih fakulteta.
              </p>
              <p>
                Obvezu polaganja državne mature imaju učenici gimnazijskih programa, dok
                će učenici strukovnih škola polagati državnu maturu samo ako žele
                nastaviti obrazovanje na nekom od visokih učilišta.
              </p>
              <p>
                Uspjeh ostvaren na državnoj maturi temelj je rangiranja kandidata
                prijavljenih na studijske programe pojedinih fakulteta.
              </p>
              <p>
                Obvezu polaganja državne mature imaju učenici gimnazijskih programa, dok
                će učenici strukovnih škola polagati državnu maturu samo ako žele
                nastaviti obrazovanje na nekom od visokih učilišta.
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
                Tehničko-tehnološki smjer, uspjeh ostvaren na državnoj maturi relevantan
                je čimbenik rangiranja prijavljenih kandidata;
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
