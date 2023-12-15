import axios from 'axios';
import constants from './constants';

export async function getApi(url: any, header: any) {
  return await axios.get(`${constants.BASE_URL}/${url}`, {
    headers: {
      Accept: header.Accept,
      'Content-Type': header.contenttype,
      // 'x-access-token': `${header.authorization}`,
      // Authorization: 'Bearer' + ' ' + header.authorization,
    },
  });
}
