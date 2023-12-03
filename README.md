# 플라토 커피 주문 앱

## https://platocoffee.netlify.app/

React를 사용 개발한 PWA 플라토 커피 주문 웹 & 앱

## 상태 관리 및 사용 스택

<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/reactrouter-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white">

Redux 상품 상태 관리 ( 수량 업데이트 액션, 매장 정보 관리, 장바구니 관리 )

Recoil & RecoilPersist ( 카카오 로그인 사용자의 인증 상태 및 프로필 데이터 관리, 선택 매장 저장 )

Geolocation API / Kakao Login API

<img src="https://img.shields.io/badge/bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white"> <img src="https://img.shields.io/badge/mui-007FFF?style=for-the-badge&logo=mui&logoColor=white">
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white">

## 기능 소개

- 플라토 커피라는 브랜드를 만들어 사용자의 위치 정보를 기반으로 가까운 매장 계산하여 보여주고 선택할 수 있는 기능

- 카카오 계정 인가 코드를 액세스 토큰으로 교환하기 위해 POST 요청을 보낸 후 GET 요청을 보내 사용자의 프로필 데이터를 가져오는 기능

- 메인페이지의 카테고리 별로 추천되는 추천 메뉴 영역 구성

- 매장 선택 여부(이미 매장을 선택하고 다시 상품을 고를때) 매장 페이지 연결되지 않게 구현

- 사용자 주문 상품 정보 및 매장 정보 저장 총 주문 금액 계산 기능을 구현 후 주문 옵션과 결제 수단 선택하여 최종 결제 진행하는 루트 구현

## 기능 설명

## 메인 페이지 : 이미지 슬라이드쇼, 주문 영역, 추천 메뉴 영역

MUI (Material-UI) 라이브러리로 레이아웃을 구성 후 StyledEngineProvider를 사용하여 override 시키고 심플하게 디자인

플라토 커피의 메인 컬러인 오렌지 컬러로 MUI 테마를 적용하여 UI들을 구성

추천 메뉴 데이터 랜덤 선택 : Redux 스토어에서 가져온 products 데이터 중에서 각 카테고리 별로 랜덤한 상품을 선택

선택된 상품은 randomProducts 상태에 저장 (이 과정은 컴포넌트가 마운트되거나 products 데이터가 변경될 때마다 실행)

문제

## Login 페이지 : 카카오 간편 로그인 & 프로필 정보 확인 기능

Recoil로 사용자의 로그인 상태 관리 (isLoggedIn이라는 상태를 생성 recoilPersist 사용 로컬 스토리지에 상태 유지)

카카오 API를 사용하여 로그인 후 리다이렉트되는 경로(redirect 컴포넌트)를 만들어 사용자가 카카오 계정으로 로그인하면

카카오 API를 통해 인증 코드를 받아온 다음 해당 코드를 사용하여 액세스 토큰을 얻고 해당 액세스 토큰을 사용하여 사용자 프로필 정보를 가져옵니다.

로그인 정보를 Recoil 상태인 profileAtom에 저장하고, isLoggedInAtom의 상태를 true로 설정하여 로그인 상태를 관리합니다.

이후 메인 페이지로 리다이렉트되게 하였고 가져온 프로필 정보 또한 recoil을 이용하여 Profile 페이지도 구현하였습니다.

로그인 상태일 때와 로그아웃 상태일 때의 UI도 다르게 구현하였습니다.

## Location 매장 선택 페이지 : 사용자의 위치 정보를 기반으로 가까운 매장을 보여주고 선택할 수 있는 기능

Geolocation API 및 카카오 지도 설정: 브라우저의 Geolocation API를 사용하여 사용자의 현재 위치를 가져온 후

Redux 스토어에서 locationData 매장 데이터를 가져와 사용자의 위치와 각 매장의 위치 사이의 거리를 계산합니다.

이 거리를 기준으로 가장 가까운 매장 순으로 정렬하고, 가장 가까운 5개의 매장을 closestLocations 상태에 저장합니다.

이 정보를 바탕으로 각 매장에 대한 마커를 생성하고 카카오 지도의 해당 위치에 마커를 표시하도록 구현하였습니다.

Recoil 상태 관리 라이브러리로 선택 매장 저장 기능: 선택한 매장 정보를 'LocationidAtom' Recoil atom에 저장

useParams()를 통해 URL에서 가져온 파라미터 productId 값을 추출하여 매장 선택 페이지에서 상품 디테일 페이지로 이동합니다.

## Detail 상품 상세 페이지 : 상품 정보, 수량 조절, 장바구니 추가 및 주문하기 기능

Redux 스토어 상품 관리 & 데이터 조회: productData 배열에서 productId와 일치하는 상품을 찾아 가져온 후

Quantity 액션을 만들어 선택 상품의 수량 또한 설정하고 관리합니다.

장바구니 추가 및 주문하기: handleAddToCart 함수는 장바구니에 상품을 추가하는 역할을 합니다.

addToCart 액션을 디스패치하며, 상품의 정보와 수량을 전달합니다. 또한, 바로 주문하기를 위한 링크도 제공합니다.

장바구니 페이지에서 상품 목록 가져오기: useSelector를 사용하여 Redux 스토어에서 장바구니에 담긴 상품 목록인 cartItems를 가져옵니다.

## Cart 장바구니 페이지 : 사용자가 선택한 상품들을 장바구니에서 확인하고 수량을 조절하며 전체 주문하기 기능

Redux 스토어 수량 업데이트 : updateQuantity 액션을 디스패치

상품 및 장바구니 삭제 핸들 : handleQuantityChange, handleRemoveItem 함수는 상품 수량과 장바구니를 업데이트하는 역할을 합니다.

reduce 함수를 사용하여 각 상품의 가격과 수량을 곱한 값을 누적하여 계산하고

totalAmount 변수는 cartItems 배열의 각 상품에 대한 금액을 계산하여 총 주문 금액을 나타냅니다.

## Order 주문 페이지 : 사용자가 주문할 상품 정보를 보여주고 주문 옵션 및 결제 수단을 선택, 최종 결제를 진행하는 기능

선택한 매장 정보는 LocationidAtom Recoil 상태를 통해 가져옵니다.

사용자 주문한 상품 정보 가져오기: URL에서 주문한 상품 정보와 선택한 매장 정보를 가져온 후

useLocation을 사용하여 URL 쿼리 파라미터를 파싱하고, JSON.parse와 decodeURIComponent를 사용하여 주문한 상품 정보를 복원합니다.

주문한 상품들 총액 계산: 주문한 각 상품의 금액을 곱하여 총 주문 금액을 계산합니다.

reduce 함수를 사용하여 각 상품의 가격과 수량을 곱한 값을 누적하여 계산합니다.
