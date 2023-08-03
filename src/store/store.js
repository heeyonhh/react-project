import { configureStore, createSlice } from '@reduxjs/toolkit'

let productdata = createSlice({
  name: 'productdata',
  initialState: [
    {
      id: 0,
      title: "생과일 수박 주스",
      content: "ICED Only",
      price: "4,900원"
    },
    {
      id: 1,
      title: "연유 콜드브루",
      content: "ICED Only",
      price: "4,700원"
    },
    {
      id: 2,
      title: "달고나 라떼",
      content: null,
      price: "3,700원"
    },
    {
      id: 3,
      title: "흑당 콜드브루",
      content: "ICED Only",
      price: "4,700원"
    },
    {
      id: 4,
      title: "피스타치오 쉐이크",
      content: "ICED Only",
      price: "5,200원"
    },
    {
      id: 5,
      title: "더블베리 요거놀라 1인빙수",
      content: null,
      price: "6,300원"
    },
  ]
})

export default configureStore({
  reducer: {
    productdata : productdata.reducer
  }
})