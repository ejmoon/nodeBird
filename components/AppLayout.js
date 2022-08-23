import { useState } from 'react';
import Proptypes from 'prop-types';
import Link from 'next/link';
import { Col, Input, Menu, Row, Item } from 'antd';
import styled from 'styled-components';

import UseProfile from '../components/UseProfile';
import LoginForm from '../components/LoginForm';

// layOut vs app.js
// app.js : 전체 공통
// layOut.js : 일부 공통

/**
    jQuery vs React
    동시 사용 비추
    React 의 장점은 리렌더링인데
    jQuery 를 같이 사용하면 jQuery 는 따로 또 그려줌
*/

const SearchInput = styled(Input.Search)`
    verticle-align: middle;
`;

const AppLayOut = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item key="menuNodebarid">
                    <Link href="/"><a>노드버드</a></Link>
                </Menu.Item>
                <Menu.Item key="menuProfile">
                    <Link href="/profile"><a>프로필</a></Link>
                </Menu.Item>
                <Menu.Item key="menuSearch">
                    <SearchInput enterButton style={{ verticalAlign: 'middle' }}/>
                </Menu.Item>
                <Menu.Item key="menuSignup">
                    <Link href="/signup"><a>회원가입</a></Link>
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                <Col xs={24} md={6}>
                   {isLoggedIn ? <UseProfile setIsLoggedIn={setIsLoggedIn}/> : <LoginForm setIsLoggedIn={setIsLoggedIn} />}
                </Col>
                <Col xs={24} md={12}>
                    {children}
                </Col>
                <Col xs={24} md={6}>
                    {/** 
                     * noreferrer noopner 
                     * 새창에 referrer 와 opner 정보 보내지 않음
                     * 보안에 위협되는 정보 없앰
                     * */}
                    <a href="https://www.google.com/" target="_blank" rel="noreferrer noopner">구글</a>
                </Col>
            </Row>
        </div>
    );
};

AppLayOut.prototype = {
    children: Proptypes.node.isRequired
};

export default AppLayOut;