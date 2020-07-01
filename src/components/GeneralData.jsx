import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const GeneralData = ({ deaths, cases, recovered }) => {
  const { t } = useTranslation();
  return (
    <div className="global_data">
      <div className="data">
        <span className="number">{deaths}</span>
        <p className="text">{t('deaths')}</p>
      </div>
      <div className="data">
        <span className="number">{cases}</span>
        <p className="text">{t('infecteds')}</p>
      </div>
      <div className="data">
        <span className="number">{recovered}</span>
        <p className="text">{t('recovered')}</p>
      </div>
    </div>
  );
};

GeneralData.propTypes = {
  deaths: PropTypes.number.isRequired,
  cases: PropTypes.number.isRequired,
  recovered: PropTypes.number.isRequired,
};

export default GeneralData;
