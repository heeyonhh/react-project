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