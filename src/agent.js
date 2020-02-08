import axios from 'axios';

// import { RECORD_LIMIT } from './constants/pagination';

const API_ROOT = process.env.NODE_ENV === 'production' ? 'https://www.extremist.team' : 'https://www.extremist.team'; // 104.215.141.154     127.0.0.1

axios.defaults.baseURL = API_ROOT;
axios.defaults.timeout = 4000;

const setToken = (token) => {
  //  console.log(token);
  axios.defaults.headers.common = { Token: token };
};
const responseBody = (response) => {
  //  console.debug('RESPONSE', response);
  return response;
};

const requests = {
  del: (url) => axios.del(`${url}`).then(responseBody),
  get: (url) => axios.get(`${url}`).then(responseBody),
  // getAndPushToUrl: url => superagent.get(`${url}`).use(tokenPlugin).then(responseBody),
  getPaginated: (url, pageNum) => axios
    .get(`${url}`)
    .set('page_num', pageNum)
    .then(responseBody),
  put: (url, body) => axios.put(`${url}`, body).then(responseBody),
  post: (url, body) => axios.post(`${url}`, body).then(responseBody),
  postFile: (url, key, file) => {
    const formData = new FormData();
    formData.append(key, file);
    return axios
      .post(`${url}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(responseBody);
  },
};

const Auth = {
  login: (username, password) => requests.post('/user/login/', { email: username, password }),
  logout: () => requests.post('/logout/'),
  register: ({
    name, email, password, phone,
  }) => requests.post('/user/register/', {
    name,
    email,
    password,
    phone,
  }),
  verify_otp: (otp, phone) => requests.post('/user/verify/', { otp, phone }),
  save: (user) => requests.put('/user', { user }),
  send_otp: (phone) => requests.post('/otp/send/', { phone }),

};



const BookingPage = {
  getClasses: (date) => {
    const c = requests.get(`/class/get/${date}/`);
    console.log(c);
    return c;
  },
  getBookClasses: () => requests.get('/class/booked/get/'),
  getUsers: (id) => requests.get(`/class/booked-users/${id}/`),
};

const AdminPage = {
  createClass: (cl) => requests.post('/class/create/', cl),
  createPack: (p) => requests.post('/mempack/create/', p),
  deletePack: (p) => requests.post('/mempack/del/', { mem_id: p }),
  createWorkout: (w) => requests.post('/workout/create/', w),
  deleteWorkout: (w) => requests.post('/workout/del/', { work_id: w }),
  planWorkout: (workout) => requests.post('/workout/create/', workout),
  getProducts: () => requests.get('/product/get/'),
  createProduct: (product) => requests.post('/product/create/', product),
  deleteProduct: (product) => requests.post('/product/del/', product),
  getTrainers: () => requests.get('/trainer/get/'),
  createTrainer: (trainer) => requests.post('/trainer/create/', trainer),
  deleteTrainer: (trainer) => requests.post('/trainer/del/', trainer),
  sendNotification: (data) => requests.post('/notify/', data),
  getPendingPayment: () => requests.get('/payments/pending/get/'),
  pendingPaymentPaid: (order) => requests.post('/payments/pending/clear/', order),
  getAllTrainers :() => requests.get('/trainers/get/'),
  assignTrainer :( trainer) => requests.post('/trainer/select/',trainer),
  removeTrainer :(trainer) => requests.post('/trainer/remove/',trainer),
  editPack :(pack) => requests.post('/mempack/edit/',pack),
  editProduct :(product) => requests.post('/product/edit/',product),
  editProductVariant:(variant) => requests.post('/product-variant/edit/',variant),
};
const SendOffers ={
  sendOffers:(offer) => requests.post('/send-offer/',offer)
}
const MembersPage ={
  getMembers : () => requests.get('/mempack/get/all/'),

}
const ProductStatus = {
  deliverProduct: (product) => requests.post('/products/deliver/',product),
  updateProductStatus:(status) => requests.post('/product/status/change/',status),

  productStatus: () => requests.get('/products/status/'),
}
const HomePage = {
  getPacks: () => requests.get('/mempack/get/'),
  getWorkouts: () => requests.get('/workout/get/'),
};

const RegisterPage = {
  registerFace :( userFace ) => requests.post('/register-image/',userFace) ,
  compareFace :( userFace ) => requests.post('/compare/',userFace) ,
  
}
const ReportPage = {
  getReports :() => requests.get('/reports/unresolved/'),
  resolveReport :(r) => requests.post('/report/resolve/',r)
}
export default {
  Auth,
  setToken,
  BookingPage,
  requests,
  AdminPage,
  HomePage,
  ProductStatus,
  MembersPage,
  RegisterPage,
  SendOffers,
  ReportPage

};
