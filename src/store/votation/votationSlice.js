import { createSlice } from '@reduxjs/toolkit';

export const votationSlice = createSlice({
    name: 'votation',
    initialState: {
        didIVote: false,
        votation: [],
        uidParticipants: []
    },
    reducers: {
        voting: ( state, { payload } ) => {
            state.didIVote = true
            state.votation = payload
        },
        addNewParticipant: ( state, { payload }) => {
            state.uidParticipants.push( payload )
        },
        resetParticipant: ( state ) => {
            state.uidParticipants = []
        },
        meVoted: ( state ) => {
            state.didIVote = true
        },
        votationLogout: ( state ) => {
            state.didIVote = false
            state.uidParticipants = []
        }
    }
});


export const { voting, addNewParticipant, resetParticipant, meVoted, votationLogout } = votationSlice.actions;