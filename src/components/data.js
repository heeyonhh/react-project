import { MdOutlinePhonelinkRing } from 'react-icons/md';
import { BiStore } from 'react-icons/bi';
import { RiEBike2Line } from 'react-icons/ri';

// 주문
export const orderdata = [

    {
        id: 0,
        icon: <MdOutlinePhonelinkRing fontSize="large" />,
        name: "간편주문",
    },

    {
        id: 1,
        icon: <BiStore />,
        name: "매장주문",
    },

    {
        id: 2,
        icon: <RiEBike2Line />,
        name: "배달주문",
    },
]

// md
export const mddata = [

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
];