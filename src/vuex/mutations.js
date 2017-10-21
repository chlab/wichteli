import uniqueId from 'lodash.uniqueid'

/**
 * Properly initialize a new participant
 * @return {Object}
 */
const newParticipant = () => ({
  id: uniqueId('p'),
  name: '',
  email: ''
})

/**
 * Properly initialize a new exception
 * @return {Object}
 */
const newException = () => ({
  id: uniqueId('e'),
  excludeFrom: '-',
  excludeTo: '-'
})

export default {
  /**
   * Add a new empty participant
   */
  addNewParticipant (state) {
    state.participants.push(newParticipant())
  },

  /**
   * Update a part of a participant
   */
  updateParticipant (state, { id, name, email }) {
    const participant = state.participants.find(p => p.id === id)
    if (name) {
      participant.name = name
    }
    if (email) {
      participant.email = email
    }
  },

  /**
   * Add a new exception
   */
  addNewException (state) {
    state.exceptions.push(newException())
  },

  /**
   * Update a part of an exception
   */
  updateException (state, { id, excludeFrom, excludeTo }) {
    const exception = state.exceptions.find(e => e.id === id)
    if (excludeFrom) {
      exception.excludeFrom = excludeFrom
    }
    if (excludeTo) {
      exception.excludeTo = excludeTo
    }
  }
}
