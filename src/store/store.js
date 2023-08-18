import { configureStore, createSlice } from '@reduxjs/toolkit'
import cartReducer from './cartSlice';

export const productData = createSlice({
  name: 'productData',
  initialState: [

    // 커피
    { id: 0, category: 'coffee', title: "아메리카노", content: null, price: "3,200원", explain: "구운 견과류의 고소한 향미와 다크 초콜렛의 깊고 깔끔한 테이스트가 특징인 플라토의 대표 음료", img: "https://raw.githubusercontent.com/heeyonhh/img/main/coffee0.png" },
    { id: 1, category: 'coffee', title: "ICED 콜드브루 아메리카노", content: "ICED Only", price: "3,900원", explain: "플라토만의 블렌딩을 통해 커피의 깊은 단맛과 바디감을 느낄 수 있는 콜드브루 커피", img: "https://raw.githubusercontent.com/heeyonhh/img/main/coffee1.png" },
    { id: 2, category: 'coffee', title: "ICED 넛츠 크림 라떼", content: "ICED Only", price: "4,700원", explain: "부드러운 크림과 에스프레소, 너티 플레이버가 어우러져 만들어진 완벽한 한 잔의 라떼", img: "https://raw.githubusercontent.com/heeyonhh/img/main/coffee2.png" },
    { id: 3, category: 'coffee', title: "ICED 디카페인 콜드브루 화이트 비엔나", content: "ICED Only", price: "5,200원", explain: "달콤한 크림과 화이트 초콜릿향, 아이리쉬 크림향이 더해져 콜드브루의 풍미가 잘 어우러진 음료", img: "https://raw.githubusercontent.com/heeyonhh/img/main/coffee3.png" },
    { id: 4, category: 'coffee', title: "카페라떼", content: null, price: "4,200원", explain: "진한 에스프레소와 부드러운 우유가 만나 고소한 풍미를 더하는 메뉴", img: "https://raw.githubusercontent.com/heeyonhh/img/main/coffee4.png" },
    { id: 5, category: 'coffee', title: "카페모카", content: null, price: "4,500원", explain: "모카시럽을 만나 한층 풍부해진 에스프레소에 우유로 부드러움을 더한 달콤한 음료", img: "https://raw.githubusercontent.com/heeyonhh/img/main/coffee5.png" },

    // 음료
    { id: 6, category: 'beverage', title: "블루문 에이드", content: "ICED Only", price: "5,500원", explain: "달콤한 청포도와 상큼한 사과향이 어우러진 청량감 있는 시그니처 에이드", img: "https://raw.githubusercontent.com/heeyonhh/img/main/beverage0.png" },
    { id: 7, category: 'beverage', title: "ICED 달고나라떼", content: "ICED Only", price: "3,700원", explain: "달콤한 달고나와 우유과 조화롭게 어우러져, 달고나 분태의 바삭한 식감과 함께 즐길 수 있는 음료", img: "https://raw.githubusercontent.com/heeyonhh/img/main/beverage1.png" },
    { id: 8, category: 'beverage', title: "ICED 흑당라떼", content: null, price: "4,900원", explain: "진하고 달콤한 흑당과 고소한 우유가 어우러진 논커피 음료", img: "https://raw.githubusercontent.com/heeyonhh/img/main/beverage2.png" },
    { id: 9, category: 'beverage', title: "녹차라떼", content: null, price: "3,900원", explain: "녹차에 우유가 더해져 부담없이 즐길 수 있는 음료", img: "https://raw.githubusercontent.com/heeyonhh/img/main/beverage3.png" },
    { id: 10, category: 'beverage', title: "민트초콜릿", content: null, price: "4,200원", explain: "상쾌한 민트향이 가득한 진한 초콜렛으로 마무리한 플라토의 인기 메뉴", img: "https://raw.githubusercontent.com/heeyonhh/img/main/beverage4.png" },
    { id: 11, category: 'beverage', title: "토피넛라떼", content: null, price: "4,200원", explain: "다양한 견과류의 맛과 달콤한 코코아가 조화롭게 어우러진 달콤한 음료", img: "https://raw.githubusercontent.com/heeyonhh/img/main/beverage5.png" },
    { id: 12, category: 'side', title: "약과 크림치즈 쿠키", content: null, price: "3,500원", explain: "향긋한 크림치즈가 필링 된 쿠키 위에 약과를 올려 마무리한 크림치즈 쿠키", img: "https://raw.githubusercontent.com/heeyonhh/img/main/side0.png" },

    // 사이드
    { id: 13, category: 'side', title: "버터 팬케이크", content: null, price: "3,900원", explain: "버터가 올라간 부드러운 팬케이크 위에 달콤한 메이플 시럽을 부어 음료와 가볍게 먹기 좋은 팬케이크", img: "https://raw.githubusercontent.com/heeyonhh/img/main/side1.png" },
    { id: 14, category: 'side', title: "소금빵", content: null, price: "3,000원", explain: "겉은 바삭하고 속은 촉촉한 겉바속촉 소금빵", img: "https://raw.githubusercontent.com/heeyonhh/img/main/side2.png" },
    { id: 15, category: 'side', title: "소금 버터 스콘", content: null, price: "2,900원", explain: "버터의 풍미가 가득 느껴지는 고소하고 짭짤한 소금 버터 스콘 (딸기쨈과 함께 제공)", img: "https://raw.githubusercontent.com/heeyonhh/img/main/side3.png" },
    { id: 16, category: 'side', title: "플레인 크로플", content: null, price: "2,900원", explain: "크루아상을 와플 모양으로 찍어만든 크로플 위에 메이플 시럽과 슈가파우더가 올라간 기본 타입 크로플", img: "https://raw.githubusercontent.com/heeyonhh/img/main/side4.png" },
    { id: 17, category: 'side', title: "더블베리 요거놀라 1인빙수", content: null, price: "6,300원", explain: "아삭한 얼음과 요거트가 어우러진 베이스에 아이스크림, 딸기 베이스, 블루베리와 바삭한 그래놀라를 더한 1인 빙수", img: "https://raw.githubusercontent.com/heeyonhh/img/main/side5.png" }
  ].map(product => ({
    ...product,
    quantity: 1,
  })),
  // 수량 추가

  reducers: {
    // detail 페이지 수량 +- 기능
    increaseQuantity: (state, action) => {
      const product = state.find(product => product.id === action.payload);
      if (product) {
        product.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const product = state.find(product => product.id === action.payload);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }
    },
  }
});

export const { increaseQuantity, decreaseQuantity } = productData.actions;


export const locationData = createSlice({
  name: 'locationData',
  initialState: [
    { id: 0, name: '플라토커피 봉담점', latitude: 37.2174573, longitude: 126.952136, address: '경기도 화성시 봉담읍 상봉길 31 1층' },
    { id: 1, name: '플라토커피 수원시청점', latitude: 37.2720654, longitude: 127.036188, address: '경기도 수원시 팔달구 권광로 280 1층' },
    { id: 3, name: '플라토커피 서현역점', latitude: 37.3864104, longitude: 127.123921, address: '경기도 성남시 분당구 황새울로342번길 15' },
    { id: 4, name: '플라토커피 판교현대점', latitude: 37.3969299, longitude: 127.110025, address: '경기도 성남시 분당구 삼평동 판교역로 182' },
    { id: 5, name: '플라토커피 강남역점', latitude: 37.4903385, longitude: 127.031483, address: '서울특별시 강남구 강남대로 302-2 지하층 강남역지하상가 B29호' },
    { id: 6, name: '플라토커피 여의나루점', latitude: 37.5260098, longitude: 126.930734, address: '서울특별시 영등포구 여의나루로 113 2 층' },
    { id: 7, name: '플라토커피 종로3가점', latitude: 37.5700801, longitude: 126.991512, address: '서울특별시 종로구 종로 126' },
    { id: 8, name: '플라토커피 홍대중앙점', latitude: 37.5542137, longitude: 126.920918, address: '서울특별시 마포구 양화로 124' },
    { id: 9, name: '플라토커피 서초점', latitude: 37.4876932, longitude: 127.008506, address: '서울특별시 서초구 서초동 1510-2' },
    { id: 10, name: '플라토커피 잠실월드점', latitude: 37.5174724, longitude: 127.103424, address: '서울특별시 송파구 올림픽로35가길 9' },
    { id: 11, name: '플라토커피 성수아카데미점', latitude: 37.5451546, longitude: 127.057837, address: '서울특별시 성동구 성수이로 118' },
    { id: 12, name: '플라토커피 북촌마을점', latitude: 37.5793232, longitude: 126.982692, address: '서울특별시 종로구 북촌로5길 39' },
    { id: 13, name: '플라토커피 신림중앙점', latitude: 37.4843180, longitude: 126.926613, address: '서울특별시 관악구 신림동 1433-141' },
    { id: 14, name: '플라토커피 목동남부점', latitude: 37.5087428, longitude: 126.864710, address: '서울특별시 양천구 목동남로 46 1층' },
  ],
});

export const selectLocationById = (state, locationId) =>
  state.locationData.find(location => location.id === locationId);

export default configureStore({
  reducer: {
    productData: productData.reducer,
    cart: cartReducer,
    locationData : locationData.reducer
  },
});