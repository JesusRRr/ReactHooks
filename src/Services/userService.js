import http from "../http-common";

const getAll = () => {
    return http.get("/users");
}

const create = data => {
    return http.get("/users");
}

const get = id => {
    return http.get(`/users/${id}`)
}

const remove = id => {
    return http.delete(`/users/${id}`)
}