import React from 'react';
import {connect} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {Button} from 'antd';

function DashboardComponent() {
    const {t} = useTranslation();

    return (
        <div className={'outerMargin'}>
            <h4>{t('dashboard.title')}</h4>
            <Button type='primary'>Test Button</Button>
        </div>
    );
}

export const Dashboard = connect(null, null)(DashboardComponent);

