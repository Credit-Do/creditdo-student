import { FaCog, FaLock, FaPhoneAlt, FaInfoCircle, FaSignOutAlt } from 'react-icons/fa';

import { IconType } from "react-icons";

export interface Action {
    href: string;
    text: string;
    icon: IconType;
}

export const actions: Action[] = [
    {
        href: '/profile',
        icon: FaCog,
        text: 'Settings'
    },
    {
        href: '/profile',
        icon: FaLock,
        text: 'Privacy Policy'
    },
    {
        href: '/profile',
        icon: FaPhoneAlt,
        text: 'Get Support'
    },
    {
        href: '/profile',
        icon: FaInfoCircle,
        text: 'About'
    },
    {
        href: '/profile',
        icon: FaSignOutAlt,
        text: 'Log Out'
    }
];