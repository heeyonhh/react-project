# 플라토 커피 주문 앱 for React

## https://platocoffee.netlify.app/


React를 사용하여 만든 플라토 커피 주문 웹&앱 입니다.

COS 공식 사이트의 레이아웃 디자인과 기능을 유사하게 보이도록 제작하였으며,

유저에게 브랜드의 미니멀함과 고급스러움을 잘 전달할 수 있도록

기존 COS의 디자인에서 더 깔끔하게 리디자인 하는 것에 중점을 두었습니다.



## 기능 설명

Location 매장 선택 페이지

1. Geolocation API 및 카카오 지도 설정: 브라우저의 Geolocation API를 사용하여 사용자의 현재 위치를 가져온 후

Redux 스토어에서 locationData 매장 데이터를 가져와 사용자의 위치와 각 매장의 위치 사이의 거리를 계산합니다.

이 거리를 기준으로 가장 가까운 매장 순으로 정렬하고, 가장 가까운 5개의 매장을 closestLocations 상태에 저장합니다.

이 정보를 바탕으로 각 매장에 대한 마커를 생성하고 카카오 지도의 해당 위치에 마커를 표시하도록 구현하였습니다.

2. Recoil 상태 관리 라이브러리로 선택 매장 저장 기능: 선택한 매장 정보를 'LocationidAtom' Recoil atom에 저장

3. 파라미터 추출: useParams()를 통해 URL에서 가져온 productId 값을 추출하여 매장 선택 페이지에서 상품 디테일 페이지로 이동

Detail 상품 상세 페이지 (매장이 이미 선택되어 있을 때는 location으로 이동하지 않도록 링크 설정)

1. Redux 스토어 상품 관리 & 데이터 조회: productData 배열에서 productId와 일치하는 상품을 찾아 가져온 후

Quantity 액션을 만들어 선택 상품의 수량 또한 설정하고 관리합니다.

2. 장바구니 추가 및 주문하기: handleAddToCart 함수는 장바구니에 상품을 추가하는 역할을 합니다.

addToCart 액션을 디스패치하며, 상품의 정보와 수량을 전달합니다. 또한, 바로 주문하기를 위한 링크도 제공합니다.

3. 장바구니 페이지에서 상품 목록 가져오기: useSelector를 사용하여 Redux 스토어에서 장바구니에 담긴 상품 목록인 cartItems를 가져옵니다.

Cart 장바구니 페이지

1. Redux 스토어 수량 업데이트 : updateQuantity 액션을 디스패치

2. 상품 및 장바구니 삭제 핸들: handleQuantityChange, handleRemoveItem 함수는 상품 수량과 장바구니를 업데이트하는 역할을 합니다.

3. totalAmount 변수는 cartItems 배열의 각 상품에 대한 금액을 계산하여 총 주문 금액을 나타냅니다.

reduce 함수를 사용하여 각 상품의 가격과 수량을 곱한 값을 누적하여 계산
