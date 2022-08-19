import {Card, Avatar, Button} from 'antd';
import { useCallback } from 'react';

const UseProfile = ({setIsLoggedIn}) => {

    const onLogOut = useCallback(() => {
        setIsLoggedIn(false);
    }, []);

    return (
        <Card 
            actions={[
                <>
                    <div key="twit">쨱짹 <br/> 0</div>
                    <div key="followings">팔로잉 <br/> 0</div>
                    <div key="followers">팔로워 <br/> 0</div>
                </>
            ]}
        >
            <Card.Meta 
                avatar={<Avatar>BTJ</Avatar>}
                title="BitingJu"
            />
            <Button onClick={onLogOut}>로그아웃</Button>
        </Card>        
    )
}

export default UseProfile;