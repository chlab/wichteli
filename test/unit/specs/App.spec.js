import { mount } from 'avoriaz'
import App from '@/App.vue'

describe('App.vue', () => {
  it('should add and render a first participant', () => {
    const wrapper = mount(App)
    expect(wrapper.contains('.participant')).to.equal(true)
  })
})
