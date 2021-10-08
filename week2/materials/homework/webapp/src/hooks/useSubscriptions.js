import { useState, useEffect } from "react";
import { useFetch, baseUrl } from "../hooks/useFetch";

function useSubscriptions() {
  const { data: subscriptionsData } = useFetch(`/subscriptions`);
  const [subscriptions, setSubscriptions] = useState([]);
  const [successData, setSuccessData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    subscriptionsData && setSubscriptions(subscriptionsData);
  }, [subscriptionsData]);


  useEffect(() => {
    setTimeout(() => { setSuccessData([]) }, 15000);
  }, [successData]);


  const maxIdSubscription = Math.max(...subscriptions.map(s => s.id));

  const isSubscribed = (product, email) => {
    return subscriptions.filter(
      (s) => s.productID === product.id && s.email === email
    );
  };

  const postSubscription = async (id, email) => {
    const data = {
      id: (maxIdSubscription + 1).toString(), 
      productID: id,
      email: email,
      createdOn: new Date().toLocaleString(),
    };

    return await fetch(`${baseUrl}/subscription`, {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setSuccessData(data);
        setError(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setError(true);
        setSuccessData([]);
      });
  };

  const addSubscription = (product, email, setEmailRequired, setErrorSubscribed) => {
    if (!email) {
      setEmailRequired(true);
      return;
    }
    if (isSubscribed(product, email).length) {
      setErrorSubscribed("Already subscribed to this product");
      return;
    }
    return postSubscription(product.id, email);
  };

  return { subscriptions, addSubscription, successData, error };
}

export default useSubscriptions;
