// actions name
const actionTypes = [{ ADD_USER: 'ADD_USER' }];

// getters
const getters = () => ({
  user: state => state.user,
});

// actions
const actions = () => ({
  addUser({ commit }) {
    commit(actionTypes.ADD_USER);
  },
});

// mutation
const mutation = () => ({
  setUser(state, user) {
    state.user = user;
  },
});

// Initial state
const state = {
  user: null,
};

export default {
  state,
  getters,
  actions,
  mutation,
  namespaced: true,
};
