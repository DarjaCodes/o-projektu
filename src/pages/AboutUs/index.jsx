import './style.css';
import Foto1 from './img/fotoK.jpg';
import Foto2 from './img/fotoD.jpeg';
import Github from './img/github.png';

export const AboutUs = () => {
  return (
    <div className="medajlonky">
      <div className="medajlonek1">
        <div className="darja">
          <h2 className="darja__nadpis">Darja Krjuková</h2>
          <div className="about1">
            <p>
              Měla jsem být překladatelkou, ale osud mě zavál do marketingu a
              následně i k webu. Moje cesta do IT začala jednoduchou dětskou
              otázkou. Pracovala jsem několik let v digitálním marketingu a
              ponořovala se do světa produktového obsahu, než jsem si nakonec
              řekla: „A jak vlastně funguje ten web?“ Od té chvíle začalo
              pátrání, neutichající zájem a nakonec i splnění snu - přijetí na
              Akademii. Pořád mě to baví a mám silné tušení, že mě to jen tak
              nepustí. Stejně tak jako joga, výhledy z kopců a především radost,
              když mám po svém boku svoji dcerku.
            </p>
            <p className="github1">
              GitHub
              <a href="https://github.com/DarjaCodes">
                <img className="github1__ref" src={Github} alt="logoGH"></img>
              </a>
            </p>
          </div>
        </div>
        <img src={Foto2} className="rounded-start-pill" alt="fotoKat"></img>
      </div>
      <div className="medajlonek2">
        <img src={Foto1} className="rounded-end-pill" alt="FotoDarj"></img>
        <div className="katerina">
          <h2 className="katerina__nadpis">Kateřina Trnková</h2>
          <div className="about2">
            <p>
              Jsem vystudovaná kulturoložka, která po studiích odjela za
              dobrodružstvím do Brazílie. Když jsem se po třech letech vrátila
              zpět do Prahy, tak jsem zjistila, že počet kulturologů na trhu
              práce předčí o 100% poptávku po těchto profesionálech. Začala jsem
              tedy pracovat v technologické firmě na zákaznickém servisu, kde
              jsem vydržela doteď. Akademii jsem začala s nulovou znalostí IT,
              takže je to pro mě velká výzva a téměř denodenní přísun kvanta
              nových informací, jejichž zpracování trvá mému mozku déle, než by
              bylo potřeba. Hlavu si nejraději větrám při běhání, čtení a
              procházkách se psem. A samozřejmě jako každý správný mileniál
              miluju cestování 🌄
            </p>
            <p className="github2">
              GitHub
              <a href="https://github.com/KatTrnk">
                <img className="github2__ref" src={Github} alt="logoGH"></img>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
