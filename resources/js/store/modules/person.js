import router from "../../router";
const state = {
    person: {
        name: null,
        age: null,
        job: null
    },
    people: null
}

const getters = {
    person: () => state.person,
    people: () => state.people,
    isDisabled: () => {
        return state.person.name && state.person.age && state.person.job;
    },
}

const actions = {
    getPerson({ commit }, id) {
        axios.get(`/api/people/${id}`).then((res) => {
            commit('setPerson', res.data.data)
        });
    },
    getPeople({ commit }) {
        axios.get("/api/people").then((res) => {
            commit('setPeople', res.data.data);
        });
    },
    deletePerson({ dispatch }, id) {
        axios.delete(`api/people/${id}`).then((result) => {
            dispatch('getPeople');
        });
    },
    update({}, data) {
        console.log(data);
        axios
            .patch(`/api/people/${data.id}`, {
                name: data.name,
                age: data.age,
                job: data.job,
            })
            .then(() => {
                router.push({
                    name: "person.show",
                    params: { id: data.id },
                });
            });
    },
    store({}, data) {
        axios
            .post("/api/people", {
                name: data.name,
                age: data.age,
                job: data.job,
            })
            .then(() => {
                router.push({ name: "person.index" });
            });
    },
}

const mutations = {
    setPerson(state, person) {
        state.person = person
    },
    setPeople(state, people) {
        state.people = people
    }
}

export default {
    state,
    mutations,
    getters,
    actions
}