import * as React from 'react';

import { IProductState } from 'src/reducers/product'

interface IProps extends IProductState {
    propName?: any
}

class Item extends React.Component<IProps> {

    public render() {
        return (
            <div className="item">
                {this.props.product.map((v, idx) => {
                   return <li key={idx} className={`${idx}o`}>{v.id}</li>
               })}
            </div>
        );
    }
}

export default Item