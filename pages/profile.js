import AppLayOut from "../components/AppLayout";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";

import Head from 'next/head';

const Profile = () => {
    const followingList = [{ nickname: '제로초'}, { nickname: '둥둥'}, { nickname: "하하"}];
    const followerList = [{ nickname: '제로초'}, { nickname: '둥둥'}, { nickname: "하하"}];

    return (
        <>
            <Head>
                <meta charSet='utf-8' />
                <title>프로필| NodeBird</title>
            </Head>
            <AppLayOut>
                <NicknameEditForm />
                <FollowList header="팔로잉 목록" data={followingList}/>
                <FollowList header="팔로워 목록" data={followerList}/>
            </AppLayOut>
        </>
    )
};

export default Profile;