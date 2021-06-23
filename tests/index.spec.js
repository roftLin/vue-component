import { mount } from '@vue/test-utils'
import App from '../src/index'

describe('index.spec.js', () => {
  it('renders', async () => {
    const wrapper = mount(App, {
      propsData: {
        msg: 'Hello'
      },
      attachTo: '#app'
    })
    expect(wrapper.html()).to.contain('Hello')
  })
})