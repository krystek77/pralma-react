import React from 'react';
import styles from './footer.module.scss';

import TitleNavigation from "../titleNavigation";
import LinksList from "../linksList";
import LinkList from "../linksList/linkList";
import Social from '../menu/social';
import Copyright from './copyright';
import Address from '../address';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__menu}>
        <div className={styles.footer__item}>
          <TitleNavigation
            path="/produkty"
            label='Produkty'
            titleNavigationClass="title-navigation--footer"
          />
        </div>
        <div className={styles.footer__item}>
          <TitleNavigation
            path="/klienci"
            label='Nasi Klienci'
            titleNavigationClass="title-navigation--footer"
          />
          <LinksList linksListClass="links-list--footer">
            <LinkList path="/klienci/goscinnosc" label='Gościnność' />
            <LinkList
              path="/klienci/opieka-dlugoterminowa"
              label='Opieka długoterminowa'
            />
            <LinkList
              path="/klienci/pralnie-komercyjne"
              label='Pralnie komercyjne'
            />
            <LinkList path="/klienci/straz-pozarna" label='Straż pożarna' />
            <LinkList path="/klienci/kluby-sportowe" label='Kluby sportowe' />
            <LinkList
              path="/klienci/pralnie-chemiczne"
              label='Pralnie chemiczne'
            />
            <LinkList path="/klienci/restauracje" label='Restauracje' />
            <LinkList path="/klienci/wellness-spa" label='Wellness & SPA' />
            <LinkList path="/klienci/armia" label='Armia' />
            <LinkList
              path="/klienci/marynarka-wojenna"
              label='Marynarka Wojenna'
            />
            <LinkList
              path="/klienci/obiekty-mieszkalne"
              label='Obiekty mieszkalne'
            />
            <LinkList path="/klienci/zaklady-pracy" label='Zakłady pracy' />
            <LinkList
              path="/klienci/pralnie-samoobslugowe"
              label='Pralnie samoobsługowe'
            />
            <LinkList path="/klienci/szpitale" label='Szpitale' />
            <LinkList
              path="/klienci/opieka-nad-dziecmi"
              label='Opieka nad dziećmi'
            />
          </LinksList>
        </div>
        <div className={styles.footer__item}>
          <TitleNavigation
            path="/technologie"
            label='Technologie'
            titleNavigationClass="title-navigation--footer"
          />
          <LinksList linksListClass="links-list--footer">
            <LinkList path='/technologie/cascade-drum' label='Cascade Drum' />
            <LinkList path='/technologie/dimple-dry' label='DimpleDry' />
            <LinkList path='/technologie/ease-soap' label='easySOAP' />
            <LinkList path='/technologie/trace-tech' label='TRACE-TECH' />
            <LinkList path='/technologie/optiload' label='OPTILOAD' />
            <LinkList path='/technologie/power-wash' label='PowerWash' />
            <LinkList path='/technologie/evo4' label='EVO4' />
            <LinkList path='/technologie/senso-dry' label='senso.dry' />
            <LinkList path='/technologie/eco' label='eco' />
            <LinkList path='/technologie/radax' label='radax' />
            <LinkList path='/technologie/senso-speed' label='senso.speed' />
            <LinkList path='/technologie/ultra-balance' label='ultra-balance' />
            <LinkList path='/technologie/softwash' label='softwash' />
            <LinkList path='/technologie/shower-jet' label='Shower-Jet' />
            <LinkList path='/technologie/xcontrol-plus' label='XControl Plus' />
          </LinksList>
        </div>
        <div className={styles.footer__item}>
          <Address />
        </div>
        <div className={styles.footer__item}>
          <TitleNavigation
            path="/o-nas"
            label='O nas'
            titleNavigationClass="title-navigation--footer"
          />
          <TitleNavigation
            path="/z-ostatniej-chwili"
            label='Wiadomości'
            titleNavigationClass="title-navigation--footer"
          />
          <TitleNavigation
            path="/kontakt"
            label='Kontakt'
            titleNavigationClass="title-navigation--footer"
          />
          <Social />
          <TitleNavigation
            path="/polityka-prywatnosci"
            label='Polityka prywatności'
            titleNavigationClass="title-navigation--footer-small"
          />
          <TitleNavigation
            path="/warunki-realizacji"
            label='Warunki realizacji'
            titleNavigationClass="title-navigation--footer-small"
          />
        </div>
      </div>
      <div className={styles.container}>
        <Copyright />
      </div>
    </footer>
  );
}

export default Footer;
