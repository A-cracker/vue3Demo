import axios from 'axios';
// import router from '@/router/index.js';
// 公共路由(网络请求地址),一般填后端域名或IP地址
axios.defaults.baseURL ='https://www.fastmock.site/mock/df6a9659a720f5eb98239a76d22a627c/userinfo';
// 请求响应超时时间
axios.defaults.timeout = 5000;

// http request 拦截器
axios.interceptors.request.use(
  config => { if (window.sessionStorage.Token) {
      config.headers.Authorization = window.sessionStorage.Token;
    } return config;
  },
  err => { return Promise.reject(err);
  }
); 
// http response 拦截器
axios.interceptors.response.use(
  response => { return response;
  },
  error => {
    if (error.response) { 
    switch (error.response.status) { case 401: // 返回 401 清除token信息并跳转到登录页面
    //     sessionStorage.removeItem("Token");
    //     sessionStorage.removeItem("ID");
    //     router.replace({
    //             path: "/",
    //             query: { redirect: router.currentRoute.fullPath }
    //         });
      }
    } return Promise.reject(error.response.data); // 返回接口返回的错误信息
 });

export default {
  get: function (path = '',data={}) {
    return new Promise(function (resolve, reject) {
      axios.get(path, data).then(function (response) {
          // 按需求来，这里我需要的是response.data，所以返回response.data，一般直接返回response
          resolve(response.data);
        })
        .catch(function (error) {
          reject(error);
        });
    });
  },
  post: function (path = '', data={}) {
    return new Promise(function (resolve, reject) {
      axios.post(path, 
        data
        )
        .then(function (response) { 
          resolve(response.data);
        })
        .catch(function (error) {
          reject(error);
        });
    });
  },
  put: function (path = '', data = {}) {
    return new Promise(function (resolve, reject) {
      axios.put(path, data)
        .then(function (response) {
          resolve(response);
        })
        .catch(function (error) {
          reject(error);
        });
    });
  },
   delete: function(path='',data={}){
    return new Promise(function (resolve, reject) {
      axios.delete(path, data)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          reject(error);
        });
    });

  },
};
