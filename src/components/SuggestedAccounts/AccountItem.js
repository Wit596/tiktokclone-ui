import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './SuggestedAccounts.module.scss'
import AccountPreview from './AccountPreview/AccountPreview';

const cx = classNames.bind(styles)

function AccountItem() {

    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        )
    }

    return ( 
        <div>
            <Tippy
                interactive
                offset={[-20, 0]}
                delay={[800, 0]}
                render={renderPreview}
                placement='bottom'
            >
                <div className={cx('account-item')}>
                    <img className={cx('avatar')} src='https://i.pinimg.com/originals/8d/36/43/8d3643a907a5a4fdac84206e5ea75db2.jpg' alt=''/>
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>quocnguyenphu</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                        </p>
                        <p className={cx('name')}>Quốc Nguyễn Phú</p>
                    </div>
                </div>
            </Tippy>
        </div>
     );
}

AccountItem.propTypes = {}

export default AccountItem;
