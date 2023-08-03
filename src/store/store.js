import { configureStore, createSlice } from '@reduxjs/toolkit'

let coffee = createSlice({
  name: 'coffee',
  initialState: [
    { id: 0, title: "아메리카노", content: null, price: "4,900원"},
    { id: 1, title: "ICED 콜드브루 아메리카노", content: "ICED Only", price: "4,700원"},
    { id: 2, title: "ICED 넛츠 크림 라떼", content: "ICED Only", price: "4,700원"},
    { id: 3, title: "ICED 디카페인 콜드브루 화이트 비엔나", content: "ICED Only", price: "4,700원"},
    { id: 4, title: "카페라떼", content: null, price: "4,700원"},
    { id: 5, title: "카페모카", content: null, price: "4,700원"},
  ]
})

let beverage = createSlice({
  name: 'beverage',
  initialState: [
    { id: 0, title: "블루문 에이드", content: "ICED Only", price: "4,900원"},
    { id: 1, title: "ICED 달고나라떼", content: "ICED Only", price: "4,700원"},
    { id: 2, title: "ICED 흑당라떼", content: null, price: "4,700원"},
    { id: 3, title: "녹차라떼", content: null, price: "4,700원"},
    { id: 4, title: "민트초콜릿", content: null, price: "4,700원"},
    { id: 5, title: "토피넛라떼", content: null, price: "4,700원"},
  ]
})

let side = createSlice({
  name: 'side',
  initialState: [
    { id: 0, title: "약과 크림치즈 쿠키", content: null, price: "4,900원"},
    { id: 1, title: "버터 팬케이크", content: null, price: "4,700원"},
    { id: 2, title: "소금빵", content: null, price: "4,700원"},
    { id: 3, title: "소금 버터 스콘", content: null, price: "4,700원"},
    { id: 4, title: "플레인 크로플", content: null, price: "4,700원"},
    { id: 5, title: "더블베리 요거놀라 1인빙수", content: null, price: "4,700원"},
  ]
})

export default configureStore({
  reducer: {
    coffee : coffee.reducer,
    beverage : beverage.reducer,
    side : side.reducer
  }
})