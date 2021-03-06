import { makeStyles } from "@mui/styles";
import { useState, useEffect } from "react";
import { 
    getUserInfo,
} from "../../../api/getUserInfo";

const UserInfoStyles = makeStyles ({
    container: {
        height: "100%" ,
        display: "flex",
        justifyContent: "center",
    },

    userImageWrap: {
        marginTop: "auto",
        marginBottom: "auto",
        height: "125px",
        width: "125px",
        marginRight: "50px",

        "& img": {
            height: "100%",
            width: "100%",
            objectFit: "cover",
            borderRadius: "70%",
            border: "1px solid gray",
        }
    },

    userNameWrap: {
        textAlign: "center",
        fontSize: "25px",
        fontWeight: "bold",

        "& p": {
            lineHeight: "150px",
        }
    },
})

type UserInfoTypes = {
    name: string;
    thumbnailURL: string;
}

type UserInfoProps = {
    userId: string;
}

export default function UserInfo({userId}:UserInfoProps){

    const classes = UserInfoStyles();
  
    const [userInfo, setUserInfo] = useState<UserInfoTypes>({
        name: "",
        thumbnailURL: ""
    });

    const getInitialData = async () => {
        try{
            const userInfoData: UserInfoTypes = await getUserInfo({userId: userId})
            setUserInfo(userInfoData);
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getInitialData();
    }, []);

    return (
        <div className={classes.container}>
            <div className={classes.userImageWrap}>
                <img src={userInfo.thumbnailURL} alt="유저 프로필" />
            </div>
            <div className={classes.userNameWrap}>
                <p>{userInfo.name}</p>
            </div>
        </div>
    );
}