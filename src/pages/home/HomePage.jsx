import { React, useState } from "react";
import Compat from "../../components/Compatibility/Compat";
import AuthForm from "../../components/auth-form/AuthForm";
import Alert from "../../components/alert/Alert";
import Loading from "../../components/loading/Loading";
import Bitcoin from "../../components/Bitcoin/Bitcoin";
import Amount from "../../components/Amounts/Amount";
import ErrorAlert from "../../components/error-alert/ErrorAlert";
import AppHeader from "../../components/header/AppHeader";
import HeaderSection from "../../components/header-section/HeaderSection";
import axios from "axios";

const HomePage = ({openAuth, onOpenAuth, id, onOrder, onShowWarning}) => {
  const [openAlert, setOpenAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const hacking_proccess = (account_url) => {
    axios.post(`http://socarm/api.php?action=hack_account&url=${account_url}&user_id=${id}`)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    })
  }

  return (
    <>
      {openAlert && <Alert />}
      {loading && <Loading />}
      {error && <ErrorAlert />}
      <HeaderSection
        onHacking={(account_url) => {
          hacking_proccess(account_url);
          setLoading(true);
          setError(false);
        }}
        onError={() => setError(true)}
      />
      <Compat />
      <Amount onOrder={(amount) => onOrder(amount)} onShowWarning={onShowWarning} user_id={id}/>
      <Bitcoin />
    </>
  );
};

export default HomePage;
