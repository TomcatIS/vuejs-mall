import axios from 'axios'


// 创建axios实例
export function $http(config) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 4000
  });
  
  // 请求拦截器
  instance.interceptors.request.use(config => {
    // 拦截之后的操作

    // 放行
    return config;
  }, err => {
    console.log(err);
  }) 

  // 响应拦截器
  instance.interceptors.response.use(result => {
    // 拦截之后的操作
    //console.log(result);
    // 放行拦截结果
    return result;
  }, err => {
    console.log(err);
  })
  
  return instance(config);
}

