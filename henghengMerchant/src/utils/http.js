import Axios from '_axios@0.19.2@axios'

export function AjaxGet({ url, method, params = {} }) {
    return new Promise((resolve, reject) => {
        Axios.get(url, params)
            .then(res => {
                console.log(res)
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })
}
export function AjaxPost({ url, method, params = {} }) {
    return new Promise((resolve, reject) => {
        Axios.post(url, params)
            .then(res => {
                console.log(res)
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })
}
