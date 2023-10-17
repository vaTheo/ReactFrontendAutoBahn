export const userAuth = () => {
    const userToken = localStorage.getItem('userToken');
    return !!userToken;
  };