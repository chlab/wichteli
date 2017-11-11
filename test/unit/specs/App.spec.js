import { mount } from 'avoriaz'
import App from '@/App.vue'
import store from '@/vuex/'

describe('App.vue', () => {
  it('should add and render a first participant', () => {
    const wrapper = mount(App, {
      store
    })
    expect(wrapper.find('.participant').length).toBeGreaterThanOrEqual(1)
  })
})
