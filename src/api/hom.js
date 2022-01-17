import request from '@/utils/request'

// 获取教育信息化数据
export function getLiveList(data) {
    return request({
        url: '../static/informationData/'+data+'.json',
        method: 'get',
    })
}
// 获取教师教学数据
export function getTeacher(data) {
    return request({
        url: '../static/teachingData/'+data+'.json',
        method: 'get',
    })
}
// 学生学习数据
export function getstudydata(data) {
    return request({
        url: '../static/studyData/'+data+'.json',
        method: 'get',
    })
}
// 设备应用数据
export function getappdata(data) {
    return request({
        url: '../static/appData/'+data+'.json',
        method: 'get',
    })
}