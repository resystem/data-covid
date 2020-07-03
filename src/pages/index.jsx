import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import i18n from '../libs/i18n';
import { useTranslation } from 'react-i18next';
import scrollTo from 'gatsby-plugin-smoothscroll';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import DaysWithoutMinister from '../components/DaysWithoutMinister';
import GeneralData from '../components/GeneralData';
import brIcon from '../images/brazil-white.svg';
import globalIcon from '../images/global-black.svg';
import '../components/css/home.css';

/**
 * Function that returns Index project page
 */
const IndexPage = () => {
  const [lang, setLang] = useState('pt');
  const [data, setData] = useState(null);
  const { t } = useTranslation();
  
  useEffect(() => {
    axios.get('/data').then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <Layout>
      <SEO title="Home" />
      <section className="apresentation">
        <div className="content">
          <header className="header">
            <p className="who">{t('apresentation')}</p>
            <ul className="languages">
              <li
                className={lang === 'pt' ? "language_label __active" : "language_label"}               
                onClick={() => {
                  setLang('pt');
                  i18n.changeLanguage('pt');
                }}
              >
                {t('pt')}
              </li>
              &nbsp;/&nbsp;
              <li
                className={lang === 'en' ? "language_label __active" : "language_label"} 
                onClick={() => {
                  setLang('en');
                  i18n.changeLanguage('en');
                }}
              >
                {t('en')}
              </li>
              &nbsp;/&nbsp;
              <li
                className={lang === 'es' ? "language_label __active" : "language_label"} 
                onClick={() => {
                  setLang('es');
                  i18n.changeLanguage('es');
                }}
              >
                {t('es')}
              </li>
            </ul>
          </header>
          <div className="apresentation_content">
            <h1 className="page_title">
              DATA
              <br />
              COVID
              <br />
              BRASIL
            </h1>
            <div className="page_description_wrapper">
              <p className="page_description">
                -
                <br />
                <br />
                {t('page_description')}
              </p>
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('#brazil-covid-data');
                }}
              >
                {t('access_information')}
              </a>
            </div>
          </div>
          <p className="information_source">
            {t('information_source')}
            :&nbsp;Google Covid-19 Map
          </p>
        </div>
      </section>
      <section id="brazil-covid-data" className="brazil_covid_data">
        <div className="content">
          <header className="header">
            <img src={brIcon} alt="Brazil`s white icon" />
            <div className="title_wrapper">
              <h2 className="title">{t('current_brazil_situation')}</h2>
              { /* <p className="updated">ATUALIZADO 23/08, ÀS 21:36</p> */ }
            </div>
          </header>
          <DaysWithoutMinister
            number={moment(Date.now()).diff(moment([2020, 4, 15]), 'days')}
          />
          <GeneralData
            deaths={data ? data.brazil_cases.deaths : 0}
            cases={data ? data.brazil_cases.confirmed : 0}
            recovered={data ? data.brazil_cases.recovered : 0}
          />
        </div>
      </section>
      <section className="global_covid_data">
        <div className="content">
          <header className="header">
            <img src={globalIcon} alt="Global`s black icon" />
            <div className="title_wrapper">
              <h2 className="title">{t('current_global_situation')}</h2>
              { /* <p className="updated">ATUALIZADO 23/08, ÀS 21:36</p> */ }
            </div>
          </header>
          <GeneralData
            deaths={data ? data.global_cases.deaths : 0}
            cases={data ? data.global_cases.confirmed : 0}
            recovered={data ? data.global_cases.recovered : 0}
          />
        </div>
      </section>
      <footer>
        <h3>
          {t('developed_by')}
          &nbsp;
          <a href="https://www.instagram.com/_resystem">Re/System</a>
        </h3>
      </footer>
    </Layout>
  );
};

export default IndexPage;
