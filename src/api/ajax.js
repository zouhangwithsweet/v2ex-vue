import axios from 'axios'
import qs from 'qs'

const service = axios.create({
    baseURL: process.env.MOCK_URL,
    timeout: 180000
})

/**
 * 通用request封装
 * @param method
 * @param url
 * @param data
 * @param config
 * @returns {Promise}
 */
const request = (method, url, data, config = {}) => {
    const options = Object.assign({}, config, {
        url,
        method,
        data
    })
    options.headers = options.headers || {}
    return new Promise((resolve, reject) => {
        service.request(options)
            .then(res => {
                const data = res.data
                const status = res.status
                if (status === 200) {
                    resolve(data)
                }
                // if (data.HasError) {
                //     reject(data)
                // }
                resolve(data)
            }).catch(res => {
                reject(res)
            })
    })
}

export const ajax = {
    get(url, config) {
        return request('get', url, null, config)
    },
    delete(url, data, config) {
        return request('delete', url, data, config)
    },
    head(url, config) {
        return request('head', url, null, config)
    },
    post(url, data, config = {}) {
        if (!config.headers) {
            config.headers = {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        }
        return request('post', url, qs.stringify(data), config)
    },
    put(url, data, config = {}) {
        config.headers = {
            'Content-Type': 'application/json; charset=UTF-8'
        }
        return request('put', url, data, config)
    },
    patch(url, data, config) {
        return request('path', url, qs.stringify(data), config)
    },
    setCommonHeader(key, value) {
        service.defaults.headers.common[key] = value
    }
}
