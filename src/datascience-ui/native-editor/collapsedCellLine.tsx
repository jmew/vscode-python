// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

'use strict';
import * as React from 'react';
import { getLocString } from '../react-common/locReactSide';

interface ICollapsedCellLineProps {
    baseTheme: string;
    className: string;
    circleClassName: string;
    click() : void;
}

export class CollapsedCellLine extends React.Component<ICollapsedCellLineProps> {
    constructor(props: ICollapsedCellLineProps) {
        super(props);
    }

    public render() {
        const className = `add-cell-line ${this.props.className}`;
        const tooltip = getLocString('DataScience.ExpandCollapsedCell', 'Expand Collpased Cell'); //TODO change tooltip
        return (
            <div className={className}>
                <button role='button' aria-pressed='false' title={tooltip} aria-label={tooltip} className='add-cell-line-button' onClick={this.props.click}>
                    <div className={this.props.circleClassName}/>
                    <span className='add-cell-line-divider'/>
                </button>
            </div>
        );
    }

}
