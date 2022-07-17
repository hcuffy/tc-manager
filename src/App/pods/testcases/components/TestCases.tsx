import React from 'react';
import {connect} from 'react-redux';
import {useTranslation} from 'react-i18next';

function TestCasesComponent() {
    const {t} = useTranslation();

    return (
        <div>
            <h4>{t('testcase.title')}</h4>
        </div>
    );
}

export const TestCases = connect(null, null)(TestCasesComponent);

