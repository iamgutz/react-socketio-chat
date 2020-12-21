import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { getSessionUsername } from 'App/session/selectors';
import IconButton from 'components/IconButton';
import { signOff } from 'containers/Login/actions';
import {
  TopNavWrap, MenuWrap, MenuDropDown, MenuItem, MenuItemList,
} from './styles';

const TopNav = ({
  onSignOff,
  sessionUsername,
}) => {
  const [showMenu, setShowMenu] = useState(false);

  const menuWrapperRef = useRef();

  const setMenuWrapperRef = node => {
    menuWrapperRef.current = node;
  };

  const handleClickOutsideMenu = e => {
    if (menuWrapperRef && !menuWrapperRef.current.contains(e.target)) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutsideMenu);

    return () => {
      document.removeEventListener('mousedown', handleClickOutsideMenu);
    };
  }, []);

  return (
    <TopNavWrap>
      <MenuWrap ref={setMenuWrapperRef}>
        <IconButton
          icon={BsThreeDotsVertical}
          onClick={() => setShowMenu(!showMenu)}
        />
        {showMenu && (
          <MenuDropDown>
            <h5>
              {'Welcome, '}
              <strong>{sessionUsername}</strong>
            </h5>
            <MenuItemList>
              <MenuItem>Settings</MenuItem>
              <MenuItem onClick={onSignOff}>Logout</MenuItem>
            </MenuItemList>
          </MenuDropDown>
        )}
      </MenuWrap>
    </TopNavWrap>
  );
};

TopNav.propTypes = {
  onSignOff: PropTypes.func.isRequired,
  sessionUsername: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  sessionUsername: getSessionUsername(state),
});

const mapDispatchToProps = {
  onSignOff: signOff,
};

export default connect(mapStateToProps, mapDispatchToProps)(TopNav);