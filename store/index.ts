import { getAccessorType, actionTree, mutationTree } from 'nuxt-typed-vuex';

import { Participant } from '~/model/participant';

/**
 * State
 */
export const state = (): {
    participants: Participant[]
} => ({
    participants: [],
})

/**
 * Getters
 */
export const getters = {
    participantsOrderedById: (state: RootState) => [...state.participants].sort((a, b) => a.id - b.id),

    isLastParticipantFilled: (state: RootState) => {
        if (state.participants.length < 1) {
            return false;
        }
        const lastParticipant = state.participants[state.participants.length - 1]
        return (lastParticipant.name !== '' && lastParticipant.email !== '')
    }
}

/**
 * Mutations
 */
export const mutations = mutationTree(state, {
    UPDATE_PARTICIPANT(state, participant: Participant) {
        state.participants = [
            ...state.participants.filter(p => p.id !== participant.id),
            participant
        ]
    },

    ADD_PARTICIPANT(state) {
        state.participants.push(new Participant())
    }
})

/**
 * Actions
 */
export const actions = actionTree(
    { state, mutations, getters },
    {
        updateParticipant({ commit, getters }, participant: Participant) {
            commit('UPDATE_PARTICIPANT', participant)
            if (getters.isLastParticipantFilled) {
                commit('ADD_PARTICIPANT');
            }
        }
    })

export type RootState = ReturnType<typeof state>
export const accessorType = getAccessorType({
    actions,
    getters,
    mutations,
    state
})
