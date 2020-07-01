import React from 'react';
import { useTranslation } from 'react-i18next';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import DaysWithoutMinister from '../components/DaysWithoutMinister';
import GeneralData from '../components/GeneralData';
import '../components/css/home.css';

/**
 * Function that returns Index project page
 */
const IndexPage = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <SEO title="Home" />
      <section className="apresentation">
        <div className="content">
          <header className="header">
            <p className="who">{t('apresentation')}</p>
            <ul className="languages">
              <li className="language_label">{t('pt')}</li>
              &nbsp;/&nbsp;
              <li className="language_label">{t('es')}</li>
              &nbsp;/&nbsp;
              <li className="language_label">{t('en')}</li>
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
              <a href="/">{t('access_information')}</a>
            </div>
          </div>
          <p className="information_source">
            {t('information_source')}
            :&nbsp;Google Covid-19 Map
          </p>
        </div>
      </section>
      <section className="brazil_covid_data">
        <div className="content">
          <header className="header">
            <img src="/icons/brazil-white.svg" alt="Brazil`s white icon" />
            <div className="title_wrapper">
              <h2 className="title">{t('current_brazil_situation')}</h2>
              <p className="updated">ATUALIZADO 23/08, ÀS 21:36</p>
            </div>
          </header>
          <DaysWithoutMinister number={60} />
          <GeneralData deaths={56320} cases={730324} recovered={256230} />
        </div>
      </section>
      <section className="global_covid_data">
        <div className="content">
          <header className="header">
            <img src="/icons/global-black.svg" alt="Global`s black icon" />
            <div className="title_wrapper">
              <h2 className="title">{t('current_global_situation')}</h2>
              <p className="updated">ATUALIZADO 23/08, ÀS 21:36</p>
            </div>
          </header>
          <GeneralData deaths={56320} cases={730324} recovered={256230} />
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;
