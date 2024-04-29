const devURL = 'http://localhost:3000';
const prodURL = 'https://tempie-server-b490ad9cab9b.herokuapp.com';
const targetURL = devURL;

const getUsernameByID = async (uID: string, handler: (res: string) => void) => {
  const response = await fetch(`${targetURL}/username/${uID}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });

  const result = await response.json();

  if (handler) handler(result);

  return false;
};

const useUsernameByID = () => getUsernameByID;

export default useUsernameByID;
