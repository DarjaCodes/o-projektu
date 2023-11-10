import '../HomePage/style.css';
import './style.css';

export const AboutProject = () => {
  return (
    <div className="texts">
      <div className="text1">
        <div className="text1__container">
          <h2 className="text1__heading">O co jde?</h2>
          <p className="text1__about">
            Od začátku jsme chtěly pracovat na projektu, který by měl hlubší
            smysl a sociální přesah. Dlouho jsme hledaly to "pravé", až do do
            doby, kdy se Darja díky své práci v neziskovce dostala do kontaktu s
            fotografkou Julií Dobryninovou, která zrovna plánovala udělat
            fotografický projekt, který by poukazoval na problém ukrajinských
            válečných uprchlic pracujících pod svou původní kvalifikaci. Juliin
            nápad se nám moc líbil, a tak jsme se domluvily, že jí k němu
            vytvoříme web, který bude sloužit i jako nástroj k osvětě. Zahájení
            výstavy se plánuje na půlku prosince, takže máme co dělat, aby
            návštěvníci po oskenování kódu neviděli na svých telefonech jen
            smutný text s chybou 404..
          </p>
        </div>
      </div>
      <div className="text2">
        <div className="text2__container">
          <h2 className="text2__heading">Co to bude?</h2>
          <p className="text2__about">
            Rády bychom se zaměřily na design a hezké zobrazování fotek pomocí
            animace. Web by měl být designován jako mobile first, jelikož
            předpokládáme, že díky QR kódu na výstavě si lidé budou náš web
            otevírat především na svých telefonech. Naší ambicí je si vytvořit
            lokální API, kam by sama fotografka mohla vkládat fotky na web.
            Výstava bude zřejmě putovní, takže práce na webu Galavečerem
            rozhodně nekončí. Těšíme se na celý vývoj a na práci na reálné
            zakázce.
          </p>
        </div>
      </div>
    </div>
  );
};
