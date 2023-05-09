import "./DetaliiProiect.css";

const DetaliiProiect = () => {
  return (
    <div>
      <div className='titluWoz'> Gasire drum de cost minim in matrice </div>
      <div className='main'>
        <li><b>Limbaje folosite</b>: c++, js, reactjs, html, css</li>
        <li><b>Descriere</b>: Partea de algoritmica a fost scrisa in C++, iar apoi tranzitionat intr-o aplicatie ReactJS.<br /><br />

          Functionalitati:
          <div>
            <li>Generare matrice patratica cu dimensiunea intre 4 si 20.</li>
            <li>Pot fi adaugate obstacole dand click pe nodurile/elementele din matrice.</li>
            <li>Algoritmul va cauta cel mai scurt drum prin matrice, tinand cont de obstacole.</li>
            <li>Daca un obstacol este adaugat in drumul existent, acesta va fi recalculat in timp real.</li>
          </div>
          <br /><br />
          La partea de stilizare, au fost folosite elemente css.
          <br /><br />
          Librarii folosite:
          <div>
            <li><a href='https://www.npmjs.com/package/react-toastify' rel='noreferrer' target='_blank'>React-Toastify</a> - pentru notificari</li>
            <li><a href='https://www.npmjs.com/package/react-lineto' rel='noreferrer' target='_blank'>LineTo</a> - pentru desenarea drumlui</li>
            <li><a href='https://lodash.com/' rel='noreferrer' target='_blank'>Lodash</a> - pentru clonarea variabilelor</li>
          </div>
        </li>
      </div>
    </div>
  )
}

export default DetaliiProiect;