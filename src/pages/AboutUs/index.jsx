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
          <p className="about1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto,
            minus est! Laudantium exercitationem distinctio consequuntur hic
            dicta esse aspernatur iste earum voluptates ducimus voluptatibus
            magnam, ipsa possimus vel excepturi iusto?Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Et ratione corporis animi cumque ipsa
            quae, facere deleniti voluptatum! Error qui consectetur odit id et
            architecto velit ut odio numquam.
          </p>
          <p className="github1">
            GitHub
            <a href="https://github.com/DarjaCodes">
              <img className="github1__ref" src={Github} alt="logoGH"></img>
            </a>
          </p>
        </div>
        <img src={Foto2} className="rounded-start-pill" alt="fotoKat"></img>
      </div>
      <div className="medajlonek2">
        <img src={Foto1} className="rounded-end-pill" alt="FotoDarj"></img>
        <div className="katerina">
          <h2 className="katerina__nadpis">Kateřina Trnková</h2>

          <p className="about2">
            Jsem vystudovaná kulturoložka, která po studiích odjela za
            dobrodružstvím do Brazílie. Když jsem se po třech letech vrátila
            zpět do Prahy, tak jsem zjistila, že počet kulturologů na trhu práce
            předčí o 100% poptávku po těchto profesionálech. Začala jsem tedy
            pracovat v technologické firmě na zákaznickém servisu, kde jsem
            vydržela doteď. Akademii jsem začala s nulovou znalostí IT, takže je
            to pro mě velká výzva a téměř denodenní přísun kvanta nových
            informací, jejichž zpracování trvá mému mozku déle, než by bylo
            potřeba. Hlavu si nejraději větrám při běhání, čtení a procházkách
            se svým psem. A samozřejmě jako každý správný mileniál, miluju
            cestování 🌄
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
  );
};
