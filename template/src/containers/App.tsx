import * as React from 'react';
import { connect } from "react-redux";

import { getProduct, receiveProduct, fecthFreqList, IProduct } from 'src/reducers/product'

import Item from './Item'

import './App.less';

import logo from './logo.svg';

interface IProps {
  product: IProduct[]
  fecthFreqList: () => void
}

interface IState {
  [name: string]: any
}

class App extends React.Component<IProps, IState> {

  public componentDidMount() {
    // this.props.getProdu22ct()
    this.props.fecthFreqList()
  }

  public render() {
    return (
      <div className="App">
        <Item product={this.props.product}/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo22" />
          <h1 className="App-title">Welc22222ome to Re2act</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

const mapStateToProps = ({ product }: any) => {
  return {
    product: product.product
  }
}

const mapDispatchToProps = {
  getProduct,
  fecthFreqList,
  receiveProduct
};

export default connect(mapStateToProps, mapDispatchToProps)(App)
