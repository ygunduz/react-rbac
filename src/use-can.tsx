import React from 'react'
import { check } from './helpers'
import { RBACContext } from './rbac-context'

export const useCan = () => {
    const context = React.useContext(RBACContext);

    const can = React.useMemo(() => (
        (screen: string, action: string, authorities?: string[]) => 
        check(context.authorities, context.permissionSet, authorities, screen, action)
    ), [context.authorities, context.permissionSet])

    return { can }
}