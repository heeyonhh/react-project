import { configureStore, createSlice } from '@reduxjs/toolkit'

export const coffee = createSlice({
  name: 'coffee',
  initialState: [
    { id: 0, title: "아메리카노", content: null, price: "3,200원", explain: "구운 견과류의 고소한 향미와 다크 초콜렛의 깊고 깔끔한 테이스트가 특징인 플라토의 대표 음료"},
    { id: 1, title: "ICED 콜드브루 아메리카노", content: "ICED Only", price: "3,900원", explain: "플라토만의 블렌딩을 통해 커피의 깊은 단맛과 바디감을 느낄 수 있는 콜드브루 커피"},
    { id: 2, title: "ICED 넛츠 크림 라떼", content: "ICED Only", price: "4,700원", explain: "부드러운 크림과 에스프레소, 너티 플레이버가 어우러져 만들어진 완벽한 한 잔의 라떼"},
    { id: 3, title: "ICED 디카페인 콜드브루 화이트 비엔나", content: "ICED Only", price: "5,200원", explain: "달콤한 크림과 화이트 초콜릿향, 아이리쉬 크림향이 더해져 콜드브루의 풍미가 잘 어우러진 음료"},
    { id: 4, title: "카페라떼", content: null, price: "4,200원", explain: "진한 에스프레소와 부드러운 우유가 만나 고소한 풍미를 더하는 메뉴"},
    { id: 5, title: "카페모카", content: null, price: "4,500원", explain: "모카시럽을 만나 한층 풍부해진 에스프레소에 우유로 부드러움을 더한 달콤한 음료"},
  ]
})

export const beverage = createSlice({
  name: 'beverage',
  initialState: [
    { id: 0, title: "블루문 에이드", content: "ICED Only", price: "5,500원", explain: "달콤한 청포도와 상큼한 사과향이 어우러진 청량감 있는 시그니처 에이드"},
    { id: 1, title: "ICED 달고나라떼", content: "ICED Only", price: "3,700원", explain: "달콤한 달고나와 우유과 조화롭게 어우러져, 달고나 분태의 바삭한 식감과 함께 즐길 수 있는 음료"},
    { id: 2, title: "ICED 흑당라떼", content: null, price: "4,900원", explain: "진하고 달콤한 흑당과 고소한 우유가 어우러진 논커피 음료"},
    { id: 3, title: "녹차라떼", content: null, price: "3,900원", explain: "녹차에 우유가 더해져 부담없이 즐길 수 있는 음료"},
    { id: 4, title: "민트초콜릿", content: null, price: "4,200원", explain: "상쾌한 민트향이 가득한 진한 초콜렛으로 마무리한 플라토의 인기 메뉴"},
    { id: 5, title: "토피넛라떼", content: null, price: "4,200원", explain: "다양한 견과류의 맛과 달콤한 코코아가 조화롭게 어우러진 달콤한 음료"},
  ]
})

export const side = createSlice({
  name: 'side',
  initialState: [
    { id: 0, title: "약과 크림치즈 쿠키", content: null, price: "3,500원", explain: "향긋한 크림치즈가 필링 된 쿠키 위에 약과를 올려 마무리한 크림치즈 쿠키"},
    { id: 1, title: "버터 팬케이크", content: null, price: "3,900원", explain: "버터가 올라간 부드러운 팬케이크 위에 달콤한 메이플 시럽을 부어 음료와 가볍게 먹기 좋은 팬케이크"},
    { id: 2, title: "소금빵", content: null, price: "3,000원", explain: "겉은 바삭하고 속은 촉촉한 겉바속촉 소금빵"},
    { id: 3, title: "소금 버터 스콘", content: null, price: "2,900원", explain: "버터의 풍미가 가득 느껴지는 고소하고 짭짤한 소금 버터 스콘 (딸기쨈과 함께 제공)"},
    { id: 4, title: "플레인 크로플", content: null, price: "2,900원", explain: "크루아상을 와플 모양으로 찍어만든 크로플 위에 메이플 시럽과 슈가파우더가 올라간 기본 타입 크로플"},
    { id: 5, title: "더블베리 요거놀라 1인빙수", content: null, price: "6,300원", explain: "아삭한 얼음과 요거트가 어우러진 베이스에 아이스크림, 딸기 베이스, 블루베리와 바삭한 그래놀라를 더한 1인 빙수"},
  ]
})

export default configureStore({
  reducer: {
    coffee : coffee.reducer,
    beverage : beverage.reducer,
    side : side.reducer,
  }
})