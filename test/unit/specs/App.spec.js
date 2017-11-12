import { createLocalVue, shallow } from 'vue-test-utils'
import Vuex from 'vuex'
import App from '@/App.vue'

describe('App.vue', () => {
  // local vue since we're installing vuex plugin
  const localVue = createLocalVue()
  localVue.use(Vuex)

  // setup mock store
  const mutations = {
    addNewParticipant: jest.fn(),
    addNewException: jest.fn()
  }

  it('should call the store to add inintial data before it\'s mounted', () => {
    const store = new Vuex.Store({
      mutations,
      getters: { hasParticipants: jest.fn() }
    })

    shallow(App, {
      localVue,
      store
    })
    expect(mutations.addNewParticipant).toHaveBeenCalledTimes(1)
    expect(mutations.addNewException).toHaveBeenCalledTimes(1)
  })

  it('should show exceptions list if there are participants', () => {
    const store = new Vuex.Store({
      mutations,
      // return true so App.vue thinks we have participants
      getters: { hasParticipants: () => true }
    })

    const wrapper = shallow(App, {
      localVue,
      store
    })
    expect(wrapper.contains('#exceptions-list-container')).toBe(true)
  })
})
