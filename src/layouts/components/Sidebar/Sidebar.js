import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu'
import { HomeIcon, UserGroupIcon, LiveIcon, HomeActiveIcon, UserGroupActiveIcon, LiveActiveIcon } from '~/components/Icons'
import config from '~/config';
import * as userService from '~/services/userService';
import SuggestedAccounts from '~/components/SuggestedAccounts';

const cx = classNames.bind(styles);

const PER_PAGE = 5;

function Sidebar() {
    const [suggestedUsers, setSuggestedUsers] = useState([]);

    useEffect(() => {
        userService
            .getSuggested({ page: 1, perPage: PER_PAGE })
            .then((data) => {
                setSuggestedUsers((prevUsers) => [...prevUsers, ...data])
            })
            .catch((error) => console.log(error))
    }, [])

    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title='For You' to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />}/>
                <MenuItem title='Following' to={config.routes.following} icon={<UserGroupIcon />} activeIcon={<UserGroupActiveIcon />}/>
                <MenuItem title='LIVE' to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />}/>
            </Menu>
            <SuggestedAccounts label='Suggested accounts' data={suggestedUsers}/>
            <SuggestedAccounts label='Following accounts' />
        </aside>
    );
}

export default Sidebar;
