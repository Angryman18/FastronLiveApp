import React from "react";

const useHandleAPI = () => {
  const [loading, setLoading] = React.useState(false);
  const [status, setStatus] = React.useState(false);
  const [data, setData] = React.useState({ data: null, error: null });

  const sendReq = React.useCallback(async (requestedFunction, obj) => {
    setLoading(true);
    setStatus(false);
    try {
      const res = await requestedFunction(obj);
      setData(() => {
        return { data: res.data, error: null };
      });
      setLoading(false);
      setStatus(true);
    } catch (err) {
      setData(() => {
        return { data: null, error: err.message };
      });
      setLoading(false);
      setStatus(true);
    }
  }, []);

  return {
    loading,
    status,
    sendReq,
    data,
  };
};

export default useHandleAPI;
