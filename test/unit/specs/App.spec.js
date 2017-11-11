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
  const store = new Vuex.Store({
    mutations,
    getters: { hasParticipants: jest.fn() }
  })

  it('should call the store to add inintial data before it\'s mounted', () => {
    shallow(App, {
      localVue,
      store
    })
    expect(mutations.addNewParticipant).toHaveBeenCalledTimes(1)
    expect(mutations.addNewException).toHaveBeenCalledTimes(1)
  })

  // @todo add test to check if Exception list is added if there are participants
})
