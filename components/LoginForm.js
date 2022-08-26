import {Form, Input, Button} from 'antd';
import { useCallback, useState, useMemo } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import useInput from '../hooks/useInput';
import { useDispatch } from 'react-redux';
import { loginAction } from '../reducers/user';

/* 
    useMemo : 값을 캐싱
    useCallback : 함수를 캐싱. 컴포넌트 안에 넣을 때
    
    style 컴포넌트 쓰기 싫을 때
    style 리렌더링 최적화
    useMemo 이용

    const style = useMemo(() => ({marginTop: 10}), []);
    
    <div style={style}>    
*/
const ButtonWrapper = styled.div`
    margin: 10px;
`;
const FormWrapper = styled(Form)`
    padding: 10px;
`;

const LoginForm = () => {
    const dispatch = useDispatch();
    const [id, onChangeId] = useInput('');
    const [password, onChangePassword] = useInput('');

    const onSubmitForm = useCallback(() => {
        console.log(id, password);
        dispatch(loginAction({id, password}));
    }, [id, password]);

    {/**
        최초 한번은 return 컴포넌트 전체를 렌더링
        그 후 비교하여 달라진 부분만 리렌더링
    */}
    return (
        <FormWrapper onFinish={onSubmitForm}> {/** onFinish 는 이미 preventDefault 가 적용되어 있음 */}
            <div>
                <label htmlFor='user-id'> 아이디 </label>
                <br />
                <Input name="user-id" value={id} onChange={onChangeId} required />
            </div>
            <div>
                <label htmlFor='user-password'> 비밀번호 </label>
                <br />
                <Input name="user-password" type='password' value={password} onChange={onChangePassword} required />
            </div>
            {/* 
                <div style={{marginTop : 10}}>
                style을 위와 같이 객체로 줄 경우 
                실제 변경된 것이 없어도 
                기존 객체와 신규 객체는
                virtual dom 은 변경된 것으로 감지하여 리랜더링됨
                
                {} === {} 
                false
            */}
            
            <ButtonWrapper>
                <Button type="primary" htmlType='submit' loading={false}>로그인</Button>
                <Link href="/signup"><a><Button>회원가입</Button></a></Link>
            </ButtonWrapper>
        </FormWrapper>
    )
}

export default LoginForm;