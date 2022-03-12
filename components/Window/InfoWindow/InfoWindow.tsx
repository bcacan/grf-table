import Image from "next/image";
import { forwardRef, useEffect, useState } from "react";

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
          <Text_Title className="title">O FAKULTETU</Text_Title>

          <ArrowsButton />
          <CloseButton />
        </Header>
        <BottomLine />

        <PageMenu>
          <nav>
            <a onTouchStart={(e) => setPage(1)}>
              <Text_Subtitle className={`page-label-1 ${page == 1 && "active-page"}`}>
                UPISI
              </Text_Subtitle>
            </a>
            <a onTouchStart={(e) => setPage(2)}>
              <Text_Subtitle className={`page-label-2 ${page == 2 && "active-page"}`}>
                STUDIJ
              </Text_Subtitle>
            </a>
            {page == 2 && (
              <>
                <a onTouchStart={() => setTab(1)}>
                  <Text_Subtitle className={`tab1  ${tab == 1 && "active-tab"}`}>
                    preddiplomski
                  </Text_Subtitle>
                </a>
                <a onTouchStart={() => setTab(2)}>
                  <Text_Subtitle className={`tab2  ${tab == 2 && "active-tab"}`}>
                    diplomski
                  </Text_Subtitle>
                </a>
                <a onTouchStart={() => setTab(3)}>
                  <Text_Subtitle className={`tab3  ${tab == 3 && "active-tab"}`}>
                    postdiplomski
                  </Text_Subtitle>
                </a>
              </>
            )}
          </nav>
        </PageMenu>

        <Footer>
          <div className="logo">
            <Image src="/graphics/qr-code.svg" height={84} width={84} />
          </div>
          <Text_Body2 className="text">PREUZMI ME!</Text_Body2>
          <Text_Body className="text2">Grafički fakultet</Text_Body>
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
    <TwoColumns>
      <div>
        <Text_Description>
          <p>
            Na preddiplomskom Studiju grafičke tehnologije studenti imaju mogućnost izbora
            između
          </p>
          <ul>
            <li>Tehničko-tehnološkog smjera i </li>
            <li>smjera Dizajn grafičkih proizvoda.</li>
          </ul>
          <p>
            Studenti tehničko-tehnološkog smjera stjecanjem osnovnih i, za grafičku
            tehnologiju specifičnih, znanja i vještina iz područja matematike, fizike,
            kemije i računalno-informacijske tehnologije usvajaju temelje za razumijevanje
            tehničko-tehnološkoga lanca stvaranja grafičkoga proizvoda.
            <br /> Specifična znanja i vještine studenti stječu kroz teme koje čine jezgru
            programa: materijali u grafičkoj proizvodnji, tiskovne forme, reprodukcijska
            fotografija, tipografija, tisak, knjigoveštvo, ambalaža, organizacija grafičke
            proizvodnje, multimedijske komunikacije, marketing i kontrola kvalitete.
          </p>
          <p>
            Uz svladavanje osnovnih tema iz navedenih područja, studenti smjera Dizajn
            grafičkih proizvoda stječu temeljna znanja i vještine iz područja
            likovno-grafičke kulture, teorije oblika, likovne prakse, originalne grafike,
            fotografije, komunikologije i vizualnih komunikacija. Iskazivanjem sposobnosti
            korištenja navedenih znanja i vještina te osobnih i drugih metodoloških
            sposobnosti u situacijama rada i učenja, studenti koji završe preddiplomski
            Studij grafičke tehnologije stječu kompetencije:
          </p>
          <ul>
            <li>upravljanja složenim tehnološkim ili stručnim aktivnostima projekata,</li>
            <li>preuzimanja odgovornosti za donošenje odluka u realnom okruženju </li>
            <li>rada ili učenja i </li>
            <li>preuzimanja odgovornosti za profesionalno upravljanje.</li>
          </ul>
          Integracijom teorijskih znanja i praktičnih vještina studenti stječu
          kompetencije za rješavanje problema u području grafičkog inženjerstva i grafičke
          struke. Konkretni stupanj kompetencije iz pojedinog od navedenih područja ovisi
          o odabranom smjeru te izbornim kolegijima koje je student položio tijekom
          studija. Na ovoj razini studenti koji su završili preddiplomski Studij grafičke
          tehnologije na Grafičkom fakultetu stječu
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
            Osobe koje su završile preddiplomski Studij grafičke tehnologije osposobljene
            su za samostalan rad u grafičkoj industriji te u različitim segmentima na nju
            vezanih djelatnosti. Stečene im kompetencije omogućuju samostalno vođenje
            grafičke proizvodnje, tj. bilo kojeg pogona tiskare (pripreme, tiska ili
            dorade) te obavljanje poslova vezanih uz dizajn suvremenih medija grafičkih
            komunikacija, nakladništvo, ambalažu, grafički menadžment, industriju papira
            te niza zanimanja vezanih uz multimediju.
          </p>
          <p>
            Preddiplomski sveučilišni studij grafičke tehnologije izvodi se u trajanju od
            šest semestra ( 180 ects bodova) čijim se završetkom stječe titula Sveučilišni
            prvostupnik/prvostupnica (baccalaureus/baccalaurea) inženjer/inženjerka
            grafičke tehnologije.
          </p>
          <p>
            Nakon završetka sveučilišnoga preddiplomskog Studija grafičke tehnologije
            student stječe pravo upisa na sveučilišni diplomski Studij grafičke
            tehnologije na Grafičkom fakultetu. Uvjete za upis na druge studijske programe
            određuju te institucije.
          </p>
        </Text_Description>
        <br /> <br /> <br /> <br /> <br /> <br />
        <Image src="/graphics/studenti.png" width={465} height={349} />
      </div>
    </TwoColumns>
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
