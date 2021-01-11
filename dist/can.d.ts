import React from 'react';
interface ICanProps {
    authorities?: string[];
    screen?: string;
    action?: string;
    yes: () => null | React.ReactNode;
    no: () => null | React.ReactNode;
}
declare const Can: {
    (props: ICanProps): JSX.Element;
    defaultProps: {
        yes: () => React.ReactNode;
        no: () => React.ReactNode;
    };
};
export default Can;
