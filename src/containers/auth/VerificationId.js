import React, { useState, useEffect } from "react";
import { Loading } from "../../components/Loading";
import { Redirect } from "react-router-dom";

const url = process.env.REACT_APP_SERVER + "/verification/";

export const VerificationId = (props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let unMounted = false;
    async function verify() {
      try {
        const res = await fetch(url + props.id);
        if (res.status === 200) {
          alert("Account Verified, Please Login");
        } else {
          alert("Invalid Link");
        }
      } catch (err) {
        console.log(err);
        alert("Invalid Link");
      }
    }
    if (!unMounted&&loading) {
      verify();
    }
    setLoading(false);
    return () => {
      unMounted = true;
    };
  }, [props.id, loading]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Redirect to={process.env.PUBLIC_URL + "/inbox/"} />
      )}
    </>
  );
};
