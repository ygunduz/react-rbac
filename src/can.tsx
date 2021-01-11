import React from 'react';
import { check } from './helpers';
import { RBACConsumer } from './rbac-context'

interface ICanProps {
    authorities? : string[],
    screen?: string,
    action?: string,
    yes: () => null | React.ReactNode,
    no: () => null | React.ReactNode
}

const DefaultProps = {
    yes: () : React.ReactNode => null,
    no:() : React.ReactNode => null,
}

const Can = (props : ICanProps) => {
    const {screen, action, yes, no} = props;
    return <RBACConsumer>
        {({permissionSet, authorities}) => check(authorities, permissionSet, props.authorities, screen, action) ? yes() : no()}
    </RBACConsumer>
}

Can.defaultProps = DefaultProps;

export default Can;