let regUrl = /https?:\/\/[^\/]*\/?/i;
let url = window.location.href;
let localUrl = regUrl.exec(url);


export const commonConfig = {
    url: (() => localUrl[0])(),
    microService = {
        BASE_DATA_SERVICE: '/base-data-service', // 基础数据
    }
}