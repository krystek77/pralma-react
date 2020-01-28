import React from 'react';
import PropTypes from 'prop-types';
import { IoIosCloseCircle } from 'react-icons/io';
import styles from './modal.module.scss';

import Logo from '../logo';
import Button from '../button';
import UnorderedList from '../unorderedList';
import ListItem from '../unorderedList/listItem';

function Modal({ handleAccept }) {
  return (
    <div className={styles['backround-overlay']}>
      <div className={styles.modal}>
        <div className={styles.modal__topbar}>
          <Logo logoClass='logo-modal' />
          <IoIosCloseCircle
            className={styles.modal__close}
            onClick={handleAccept}
          />
        </div>
        <div className={styles.modal__content}>
          <p className={styles.modal__salutation}>
            Szanowna Użytkowniczko, Szanowny Użytkowniku
          </p>
          <div className={styles.modal__clause}>
            <p className={styles.modal__paragraph}>
              Zanim klikniesz <b>akceptuj</b> lub zamkniesz to okno, prosimy o
              przeczytanie tej informacji. Prosimy w niej o Twoją dobrowolną
              zgodę na przetwarzanie Twoich danych osobowych przez naszych
              partnerów biznesowych oraz przekazujemy informacje{' '}
              <strong>
                o tzw. cookies i o przetwarzaniu przez nas Twoich danych
                osobowych.{' '}
              </strong>
              Klikając „akceptuj” lub zamykając okno przez kliknięcie w znaczek
              X, zgadzasz się na poniższe. Możesz też odmówić zgody lub
              ograniczyć jej zakres.
            </p>
            <p className={styles.modal__paragraph}>
              <strong>Klauzula informacyjna</strong>
            </p>
            <p className={styles.modal__paragraph}>
              Od dnia 25 maja 2018 obowiązują nowe przepisy o ochronie danych
              osobowych RODO (RODO jest to powszechnie używany skrót
              Rozporządzenie Parlamentu Europejskiego i Rady (UE )2016/679 z
              dnia 27 kwietnia 2016r. w sprawie ochrony osób fizycznych w
              związku z przetwarzaniem danych osobowych i w sprawie swobodnego
              przepływu takich danych oraz uchylenia dyrektywy 95/46 WE (ogólne
              rozporządzenie o ochronnie danych) (Dz. U. UE. L. Z 2016 Nr 119,
              str.1)., którego celem jest ujednolicenie zasad przetwarzania
              danych osobowych na terenie UE)
            </p>
            <UnorderedList>
              <ListItem text='Administratorem Pani/Pana danych osobowych jest: Przedsiębiorstwo Produkcji Urządzeń Pralniczych “Pralma” Sp. z o.o. ul. Górnicza 49a, 25-651 Kielce NIP 6570081116, KRS 0000022564, tel. 41/3457408, 41/3450561, biuro@pralma.pl.' />
              <ListItem text='Administrator nie wyznaczył Inspektora Ochrony Danych Osobowych.' />
              <ListItem text='Ma Pani/Pan prawo dostępu do swoich danych, otrzymania ich kopii, ich sprostowania, usunięcia, ograniczenia przetwarzania, oraz prawo do przenoszenia danych, a także wniesienia sprzeciwu.' />
              <ListItem text='Do Pani/Pana danych mogą mieć dostęp podmioty przetwarzające (działające na nasze zlecenie), takie jak: firmy księgowe, kancelarie prawnicze, firmy kurierskie, podmioty świadczące usługi płatności elektronicznych, administrator systemu sprzedażowego, dostawcy usług IT. Podanie danych jest dobrowolne, ale niezbędne do realizacji powyższych celów, w szczególności obowiązków prawnych Spółki, w tym realizacji Państwa zgłoszeń lub spraw (bez ich podania nasza Spółka nie będzie mogła realizować swych obowiązków, w tym Państwa zgłoszenia)' />
              <ListItem text='Dane przechowywane są bezterminowo.' />
              <ListItem text='Przysługuje Pani/Panu wniesienia skargi do organu nadzorczego (Prezesa Urzędu Ochrony Danych Osobowych), jeśli Pani/Pana zdaniem przetwarzanie danych osobowych Pani/Pana narusza przepisy rozporządzenia RODO.' />
              <ListItem text='Pani/Pana dane osobowe nie będą przekazywane do państw trzecich i organizacji międzynarodowych. Informujemy, że firma P. P.U.P. „Pralma” Sp. z o. o. dokłada wszelkich starań, aby zapewnić wszelkie środki fizycznej, technicznej i organizacyjnej ochrony danych osobowych przed ich przypadkowym bądź umyślnym zniszczeniem, przypadkową utratą, nieuprawnionym ujawnieniem lub wykorzystaniem, zgodnie z wszelkimi obowiązującym przepisami.' />
            </UnorderedList>
            <p className={styles.modal__paragraph}>
              <strong>Cookies</strong>
            </p>
            <p className={styles.modal__paragraph}>
              Uprzejmie informujemy, że w ramach naszej witryny używamy plików
              cookies w celu świadczenia usług na najwyższym poziomie oraz w
              sposób dostosowany do Twoich indywidualnych preferencji.
              Korzystanie z witryny bez zmiany ustawień oznacza, że akceptujesz
              otrzymywanie plików cookies. Zmiany ustawień dla plików cookies
              możesz dokonać w każdym momencie użytkowania serwisu.
            </p>
            <p className={styles.modal__paragraph}>
              Zgadzam się na przetwarzanie w celach marketingowych, w tym
              poprzez profilowanie, oraz w celach analitycznych, moich danych
              osobowych pozostawianych przeze mnie w ramach korzystania ze stron
              internetowych, serwisów i innych funkcjonalności, w tym
              zapisywanych w plikach cookies, przez P.P.U.P Pralma sp. z o.o., w
              celu marketingu produktów i usług podmiotów trzecich oraz i przez
              podmioty współpracujące z P.P.U.P. Pralma.
            </p>
          </div>
        </div>
        <div className={styles.modal__actions}>
          <Button
            type='button'
            label='akceptuj'
            handleClickButton={handleAccept}
          />
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  handleAccept: PropTypes.func.isRequired,
};
export default Modal;
