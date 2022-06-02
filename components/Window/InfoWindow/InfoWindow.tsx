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
import usePreviousValue from "hooks/usePreviousValue";
import { BottomLine } from "components/Window/BottomLine.styled";
import { ArrowsButton, CloseButton } from "components/Window/Buttons";
import { config, useSpring } from "@react-spring/web";
import { theme } from "styles/theme";

import { InfoText } from "content/texts";

const InfoWindow = forwardRef((props: any, ref) => {
  const [page, setPage] = useState(2);
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
      case 1:
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
      case 2:
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

        {/* <PageMenu>
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
            {page == 2 && (
              <>
                <a onTouchStart={() => setTab(1)}>
                  <Text_Subtitle className={`tab1  ${tab == 1 && "active-tab"}`}>
                    {InfoText.tab2_1}
                  </Text_Subtitle>
                </a>
                <a onTouchStart={() => setTab(2)}>
                  <Text_Subtitle className={`tab2  ${tab == 2 && "active-tab"}`}>
                    {InfoText.tab2_2}
                  </Text_Subtitle>
                </a>
                <a onTouchStart={() => setTab(3)}>
                  <Text_Subtitle className={`tab3  ${tab == 3 && "active-tab"}`}>
                    {InfoText.tab2_3}
                  </Text_Subtitle>
                </a>
              </>
            )}
          </nav>
        </PageMenu> */}

        <Footer>
          <div className="logo">
            <Image src="/graphics/izlozba/qr-instagram.svg" height={150} width={150} />
          </div>
          <Text_Body2 className="text">{InfoText.footer_qr}</Text_Body2>
          <Text_Body className="text2">{InfoText.footer_title}</Text_Body>
        </Footer>
      </MainWindowCSS>
      {pageContent}
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
    </>
  );
};

////
const PreddiplomskiTab = () => {
  return (
    <>
      <span style={{ position: "absolute", top: "0.5em", left: "2em" }}>
        <Image src="/graphics/izlozba/holo1.png" width={175} height={97} />
      </span>
      <span style={{ position: "absolute", top: "8em", left: "17em" }}>
        <Image src="/graphics/izlozba/holo2.png" width={275} height={156} />
      </span>
      <span style={{ position: "absolute", top: "2em", left: "38em" }}>
        <Image src="/graphics/izlozba/holo3.gif" width={382} height={215} />
      </span>
      <span style={{ position: "absolute", top: "13em", left: "0" }}>
        <Image src="/graphics/izlozba/holo4.png" width={186} height={124} />
      </span>
      <span style={{ position: "absolute", top: "35em", left: "0" }}>
        <Image src="/graphics/izlozba/holo5.gif" width={350} height={150} />
      </span>
      <span style={{ position: "absolute", top: "28em", left: "25em" }}>
        <Image src="/graphics/izlozba/holo6.png" width={302} height={170} />
      </span>
      <span style={{ position: "absolute", top: "35em", left: "47em" }}>
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
      <br />
      <br />
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
            <p>
              Jedna od zanimljivosti je da hologrami za koje ste do sada znali i vidjeli u
              filmovima <b>nisu pravi</b>. Uglavnom se radi o projekcijama i specijalnim
              efektima. Ali bez brige, <b>hologrami ipak postoje</b>! Na našoj izložbi
              tako možete vidjeti dvije vrste holograma –
              <b>refleksijski i transmisijski</b>.
            </p>
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
          <br />
          <Image src="/graphics/izlozba/tekst1.png" width={467} height={325} />
        </div>
        <div>
          <br />
          <Image src="/graphics/izlozba/tekst2.png" width={467} height={314} />
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
          <br />
          <Image src="/graphics/izlozba/tekst3.png" width={467} height={353} />
        </div>
      </TwoColumns>
    </>
  );
};
const DiplomskiTab = () => {
  return (
    <TwoColumns>
      <div>
        <Text_Description>
          <p>
            Diplomski sveučilišni studij grafičke tehnologije izvodi se u trajanju od
            četiri semestra ( 120 ects bodova) čijim se završetkom stječe titula
            Magistar/magistra inženjer/inženjerka grafičke tehnologije.
          </p>
          <p>Na diplomskom studiju moguće je odabrati između dva smjera: </p>
          <ul>
            <li>tehničko-tehnološkog smjera </li>
          </ul>
          <p>
            Diplomski studij grafičke tehnologije osposobljava studente za stručnu i
            kreativnu nadogradnju, znanstveni razvoj i samostalan rad u svim domenama
            grafičke proizvodnje. Sukladno tome, studenti se osposobljavaju za vođenje i
            upravljanje bilo kojim tiskarskim sustavom, od najmanjih do srednje velikih i
            najvećih, te za ekonomiziranje i upravljanje kvalitetom unutar navedenih
            sustava.
            <br />
            Na tehničko-tehnološkom smjeru potrebno je odabrati jedan od pet modula:
            grafička tehnologija, multimedij, nakladništvo, ambalaža i grafički managment.
          </p>
          <ul>
            <li>dizajna grafičkih proizvoda</li>
          </ul>
          <p>
            Studenti se obrazuju za rad na oblikovanju i projektiranju grafičkih
            proizvoda, za rad na razvoju komunikoloških kriterija grafičkog dizajna te za
            ispitivanje i optimiziranje grafičkih materijala.
          </p>
          <p>
            Diplomski studij osposobljava studente za stručnu i kreativnu nadogradnju,
            znanstveni razvoj i samostalan rad u svim domenama grafičke proizvodnje.
            Sukladno tome, studenti se osposobljavaju za vođenje i upravljanje bilo kojim
            tiskarskim sustavom, od najmanjih do srednje velikih i najvećih, te za
            ekonomiziranje i upravljanje kvalitetom unutar navedenih sustava.
          </p>
          <p>
            Studenti se na smjeru Dizajn grafičkih proizvoda osposobljavaju za rad na
            oblikovanju i projektiranju grafičkih proizvoda, za rad na razvoju
            komunikoloških kriterija grafičkog dizajna te za ispitivanje i optimiziranje
            grafičkih materijala.
          </p>
        </Text_Description>
      </div>
      <div>
        <Text_Description>
          <p>
            Studenti na oba smjera stječu znanja, sposobnosti i vještine koje će im
            omogućiti:
          </p>
          <ul>
            <li>vođenje i projektiranje multimedijskih sustava;</li>
            <li>
              vođenje i upravljanje projektima vezanim uz ambalažu, izdavaštvo i grafički
              managment;
            </li>
            <li>
              obavljanje poslova vezanih uz grafički dizajn; Kreiranje idejnih rješenja
              vizualnog identiteta;
            </li>
            <li>realizaciju idejnih rešenja grafičkih komunikacija, itd.</li>
          </ul>
          <p>
            Studijem im se razvija sposobnost i vještina pronalaženja ponuđenih i
            alternativnih rješenja, koja će im omogućiti da:
          </p>
          <ul>
            <li>preventivno djeluju i uklone potencijalne probleme;</li>
            <li>ubrzaju poslovne procese;</li>
            <li>povećavaju učinkovitost rada;</li>
            <li>stvore optimalne uvjete za daljnji razvoj;</li>
            <li>te da prepoznaju potrebu za cijelo životnim obrazovanjem.</li>
          </ul>
          <p>
            Sukladno nastavnom planu i programu Grafičkog fakulteta Sveučilišta u Zagrebu
            osobe koje će završiti diplomski studij grafičke tehnologije steći će i niz
            drugih znanja, razviti sposobnosti i vještina koje će im omogućiti lako i brzo
            zapošljavanje u jednoj izuzetno perspektivnoj struci te ukoliko se odluče za
            nastavak studiranja mogućnost nastavka znanstvenog i stručnog usavršavanja na
            POSLIJEDIPLOMSKOM DOKTORSKOM STUDIJU.
          </p>
        </Text_Description>
        <br /> <br /> <br /> <br />
        <Image src="/graphics/studenti2.png" width={465} height={250} />
      </div>
    </TwoColumns>
  );
};
const PostdiplomskiTab = () => {
  return (
    <TwoColumns>
      <div>
        <Text_Description>
          <p>«Grafičko inženjerstvo i oblikovanje grafičkih proizvoda»</p>
          <p>
            Grafički fakultet, sastavnica Sveučilišta u Zagrebu (dalje u tekstu: Fakultet,
            odnosno GRF), nositelj je poslijediplomskog doktorskog studija iz područja
            tehničkih znanosti, znanstvenog polja grafička tehnologija, te provodi
            postupak za stjecanje akademskog stupnja doktora znanosti iz tog polja.
          </p>

          <p>
            Tijekom studija studenti se uvode u znanstveni rad i razvijaju kao
            znanstveno-istraživački djelatnici. Nastava se temelji djelomično na
            tradicionalnim predavanjima i proučavanjem literature, no središnja komponenta
            sveučilišnog doktorskog studija je znanstveno istraživanje upotrebom
            alternativnih metoda studija, kao što su timski rad na projektima i
            istraživački seminari, a sve u skladu s Bolonjskom deklaracijom.
          </p>
          <p>
            Doktorski studij ustrojava se i izvodi u skladu s Pravilnikom o doktorskim
            studijima na Sveučilištu u Zagrebu, kojim su propisani minimalni uvjeti za
            ustroj i izvođenje doktorskih studija. Pravilnikom o doktorskom studiju na
            Sveučilištu u Zagrebu Grafičkom fakultetu propisuju se posebni uvjeti za
            doktorski studij na GRF-u.
          </p>
          <p>
            Prijedlog programa doktorskog studija «Grafičko inženjerstvo i oblikovanje
            grafičkih proizvoda» nastao je na osnovu višegodišnjeg rada, istraživanja i
            promišljanja, akceptirajući slične programe u Europi i svijetu, uvodeći
            njihove sadržaje u prijedlog programa te prilagođavajući program
            specifičnostima hrvatskih potreba.
          </p>
        </Text_Description>
      </div>
      <div>
        <Text_Description>
          <p>
            S obzirom na specifičnost hrvatskog prostora te s obzirom na školovanje na
            predbolonjskom dodiplomskom, odnosno bolonjskom diplomskom studiju, Grafički
            fakultet Sveučilišta u Zagrebu organizirao je doktorski studij s dva smjera:
            grafičko inženjerstvo i oblikovanje grafičkih proizvoda.
            <br />
            Nastava na studiju traje 3 (tri) godine odnosno 6 (šest) semestara.
          </p>
          <p>
            Prvi semestar, koji je zajednički za oba smjera, obuhvaća kolegije koji se
            baziraju na izučavanju temeljnih disciplina neophodnih za znanstveni pristup
            grafičkoj tehnologiji.
            <br />
            Smjer «Grafičko inženjerstvo», tijekom drugog semestra, nudi veliki izbor
            kolegija koji izučavaju grafičko inženjerstvo i tehnologije. Studenti mogu
            odabrati kolegije koji se bave sadržajem vezanim uz grafičke materijale,
            računalnu pripremu, tiskarske sustave, ambalažu, knjigoveštvo, multimediju ili
            grafičke komunikacije, ekološke probleme suvremenog društva i grafičke
            tehnologije, te uz odnose društva, znanosti i grafičke reprodukcije.
          </p>
          <p>
            Smjer «Oblikovanje grafičkih proizvoda», tijekom drugog semestra, temelji se
            na povezanosti grafičke tehnologije, grafičke komunikacije i oblikovanja
            grafičkih proizvoda. Kroz kolegije na smjeru obrađuju se grafički mediji i
            njihova grafička struktura, teorija i metodologija dizajna, problematika
            industrijskog dizajna, te funkcija dizajna kao medija komunikacije. Posebno se
            govori o oblikovanju digitalnog prostora i korisničkog sučelja.
          </p>
          <p>
            Završetkom doktorskog studija kandidat stječe akademski stupanj doktora
            znanosti u području tehničkih znanosti, polje grafička tehnologija.
          </p>
          <p>
            Predviđa se, da se većina nastave odvija u prostorijama Grafičkog fakulteta.
            Tu je studentima za poslijediplomski znanstveni studij na raspolaganju oko 600
            m2 uređenog prostora. Većina znanstveno-istraživačke opreme nalazi u
            prostorijama Grafičkog fakulteta, dok je manji dio opreme dislociran.
          </p>
        </Text_Description>
      </div>
    </TwoColumns>
  );
};
/////

const InfoContentStudij = ({ tab }: { tab: number }) => {
  switch (tab) {
    case 1:
      return <PreddiplomskiTab />;
      break;
    case 2:
      return <DiplomskiTab />;
      break;
    case 3:
      return <PostdiplomskiTab />;
      break;
    default:
      return null;
      break;
  }
};
