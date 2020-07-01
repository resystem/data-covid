import React from 'react';
import PropTypes from 'prop-types';
import { Trans, useTranslation } from 'react-i18next';

const DaysWithoutMinister = ({ number }) => {
  const { t } = useTranslation();
  return (
    <div className="days_without_minister">
      <span className="number">{number}</span>
      <p className="text">
        <Trans i18nKey="days_without_minister" t={t}>
          dias&nbsp;
          <i>sem</i>
          &nbsp;
          <strong>ministro da saúde</strong>
        </Trans>
      </p>
    </div>
  );
};

DaysWithoutMinister.propTypes = {
  number: PropTypes.number.isRequired,
};

export default DaysWithoutMinister;
