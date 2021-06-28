import styled from 'styled-components';

const Button1 = styled.div`
    width: 90%;
    height: 60px;
    color: #226bef;
    font-size: 20px;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px auto;
    border-radius: 4px;
    box-shadow: 0 3px 10px 0px rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
    cursor: pointer;
`

const Button2 = styled.div`
    width: 100%;
    height: 110px;
    display: flex;
    flex-wrap : wrap;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    text-align: center;

    .title {
        font-weight: bold;
        margin-bottom: 10px;
    }

    .sub {
        font-size: 14px;
        color: gray;
    }
`

const Button3 = styled.div`
    width: 90%;
    height: 160px;
    display: flex;
    flex-wrap : wrap;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    border-radius: 4px;
    box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
    margin-bottom: 20px;
    box-sizing: border-box;
    cursor: pointer;

    .title {
        font-size: 15px;
        font-weight: bold;
        margin-bottom: 5px;
    }

    .sub {
        font-size: 13px;
        color: gray;
        margin-bottom: 20px;
    }

    .price {
        font-size: 18px;
        font-weight: bold;
        color: #226bef;
    }
`

const Button4 = styled.div`
    width: 45%;
    height: 50px;
    border-radius: 4px;
    box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.1);
    border: solid 1px #e0e0e0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
`

const Button5 = styled.div`
    width: 90%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 30px auto;
    background-color: white;
    span {
        margin: 0 10px;
        font-weight: bold;
    }
    .right {
        color: #226bef;
    }
    cursor: pointer;
`
const Button6 = styled.div`
    width: 40%;
    height: 184px;
    margin: 12px 0;
    position: relative;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    background-color: white;
    .title {
        font-size: 15px;
        font-weight: bold;
        margin-bottom: 5px;
    }

    .sub {
        font-size: 13px;
        color: gray;
        margin-bottom: 20px;
    }

    .price {
        font-size: 18px;
        font-weight: bold;
        color: #226bef;
    }
    cursor: pointer;
`

export {Button1, Button2, Button3, Button4, Button5, Button6};