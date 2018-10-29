
import * as React from "react";
import { shallow } from "enzyme";

import Item from "src/containers/Item"

const source = [
    { "id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2 },
]

test("<Item />", () => {

    const wrapper = shallow(<Item product={source}/>);
    expect(wrapper).toMatchSnapshot();
});