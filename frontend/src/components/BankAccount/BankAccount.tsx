import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./BankAccount.module.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const BASE_HTTP_URL = "https://j9E106.p.ssafy.io";

function BankAccount() {
  const navigate = useNavigate();
  const [accountList, setAccountList] = useState<any>(null);
  const token = useSelector((state) => state.token);

  useEffect(() => {
    axios
      .get(`${BASE_HTTP_URL}/user/account/simple`, {
        headers: {
          // Authorization: token.accessToken,
          Authorization: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        setAccountList(response.data.data.userAccountSimpleList);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [token]);

  return (
    <>
      {accountList && accountList.length !== 0 ? (
        [...accountList].map((account, index) => (
          <div className={styles.container} key={index}>
            <img src={account.bankImage} width={50} height={50} />
            <div>
              <p>{account.name}</p>
              <p>{account.account}</p>
            </div>
            <button>송금</button>
          </div>
        ))
      ) : (
        <>
          <div className={styles.noncontainer}>
            <div>연결된 계좌가 없습니다.</div>
            <button onClick={() => navigate("/company/bank")}>
              계좌 연결하기
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default BankAccount;
