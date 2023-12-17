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

const HomePage = ({openAuth, onOpenAuth}) => {
  const [openAlert, setOpenAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  return (
    <>
      {openAlert && <Alert />}
      {loading && <Loading />}
      {error && <ErrorAlert />}
      <HeaderSection
        onHacking={() => {
          setLoading(true);
          setError(false);
        }}
        onError={() => setError(true)}
      />
      <Compat />
      <Amount />
      <Bitcoin />
    </>
  );
};

export default HomePage;
