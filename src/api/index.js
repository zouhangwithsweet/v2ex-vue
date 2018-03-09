import { ajax } from './ajax'

//最热主题
export const getHotList = () => ajax.get('/topics/hot.json')

//最新主题
export const getNowList = () => ajax.get('/topics/latest.json')

//节点信息
export const getNodesList = ops => ajax.get(`/nodes/show.json?name=${ops}`)

//用户主页
export const getUserInfo = ops => ajax.get('/members/show.json', { params: ops })

//帖子内容
export const getListHeader = ops => ajax.get('/topics/show.json', { params: ops })

//帖子回复详情
export const getListDetail = ops => ajax.get('/replies/show.json', { params: ops })
