import React from 'react'
import PinterestIcon from '@mui/icons-material/Pinterest';
import IconButton from '@mui/material/IconButton';
import styled from 'styled-components';
import FaceIcon from '@mui/icons-material/Face';
import TextsmsIcon from '@mui/icons-material/Textsms';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
export default function Header() {
  return (
    <Wrapper>
        <LogoWrapper>
          <IconButton>
            <PinterestIcon />
          </IconButton>
        </LogoWrapper>
        <HomePageButton>
          <a href="/">HomePage</a>        
        </HomePageButton>
        <FollowingButton>
          <a href="/">Following</a>
        </FollowingButton>
        <SearchWrapper>
            <SearchBarWrapper>
              <IconButton >
                <SearchIcon />
              </IconButton>
              <form>
                <input type="text" />
                <button type='submit'></button>
              </form>
              
            </SearchBarWrapper>
        </SearchWrapper>
        <IconsWrapper>
            <IconButton>
              <NotificationsIcon />
            </IconButton>
            <IconButton>
              <TextsmsIcon />
            </IconButton>
            <IconButton>
              <FaceIcon />
            </IconButton>
            <IconButton>
              <KeyboardArrowDownIcon />
            </IconButton>
        </IconsWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  padding: 12px 4px 4px 16px;
  background-color: white;
  color: black;
`
const LogoWrapper = styled.div`
  .MuiSvgIcon-root{
    color: red;
    font-size: 32px;
    cursor: pointer;
  }
`
const HomeButton = styled.div`
  display: flex;
  height: 48px;
  min-width: 123px;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  cursor: pointer;
`
const FollowingButton = styled(HomeButton)`
  background-color: #white;
  a{
    text-decoration: none;
    color: #000;
    font-weight: 700;
  }
  :hover{
    background: #e1e1e1;
  }
`;

const HomePageButton = styled(HomeButton)`
  background: rgb(17, 17, 17);
  a{
    text-decoration: none;
    color: #fff;
    font-weight: 700;
  }
`;

const SearchWrapper = styled.div`
  flex: 1;
`
const SearchBarWrapper = styled.div`
  background: #efefef;
  display: flex;
  height: 48px;
  width: 100%;
  border-radius: 50px;
  border: none;
  padding-left: 10px;
  // margin-right: 10px;
  form{
    display: flex;
    flex: 1;
  }
  form > input{
    background: transparent;
    border: none;
    width: 100%;
    margin-left: 5px;
    font-size: 16px;
  }
  form > button{
    display: none;
  }
  input:focus{
    outline: none;
  }
  input:active{
    outline: none;
  }
`
const IconsWrapper = styled.div`

`