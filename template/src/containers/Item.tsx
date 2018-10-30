import * as React from 'react';

import { IProductState } from 'src/reducers/product'

interface IProps extends IProductState {
    propName?: any
}

class Item extends React.Component<IProps> {

    public render() {
        return (
            <div className="item">
                // item todo
            </div>
        );
    }
}

export default Item