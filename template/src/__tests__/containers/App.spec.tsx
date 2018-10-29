import * as React from 'react'
import { Provider } from 'react-redux'
import { mount } from "enzyme"
import App from 'src/containers/App'

import setupStore from 'src/__tests__/setupStore'

describe('>>>H O M E --- REACT-REDUX (Shallow + passing the {store} directly)', () => {

    let stores: any

    beforeEach(() => {
        stores = setupStore()
    })

    it('should render a placeholder when no dog image is fetched', () => {

        const wrapper = mount(<Provider store={stores}><App /></Provider>);
        expect(wrapper.find('.item').exists()).toBe(true)
    })

});