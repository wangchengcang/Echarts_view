import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'
const UuidKey = 'Uu-id'

export function getToken() {
    return Cookies.get(TokenKey)
}

export function setToken(token) {
    return Cookies.set(TokenKey, token)
}

export function removeToken() {
    return Cookies.remove(TokenKey)
}

export function getUuid() {
    return Cookies.get(UuidKey)
}

export function setUuid(uuid) {
    return Cookies.set(UuidKey, uuid)
}

export function removeUuid() {
    return Cookies.remove(UuidKey)
}