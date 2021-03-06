import routerParams from '@redhat-cloud-services/frontend-components-utilities/files/RouterParams';
import propTypes from 'prop-types';
import React from 'react';
import { paths } from '../../Routes';
import { Tabs, Tab } from '@patternfly/react-core';
import invert from 'lodash/invert';

export const ComplianceTabs = (props) => {
    const { match: { path } } = props;

    const tabPaths = {
        0: paths.compliancePolicies,
        1: paths.complianceSystems
    };

    const redirect = (_, tabIndex) => {
        props.history.push(tabPaths[tabIndex]);
    };

    let currentKey = Number(invert(tabPaths)[path]);

    const tabs = [
        <Tab title={'Policies'} key={0} eventKey={0}></Tab>,
        <Tab title={'Systems'} key={1} eventKey={1}></Tab>
    ];

    return (
        <Tabs activeKey={currentKey} onSelect={redirect} aria-label="Compliance Tabs">
            { tabs }
        </Tabs>
    );
};

ComplianceTabs.propTypes = {
    history: propTypes.object,
    match: propTypes.object
};

export default routerParams(ComplianceTabs);
