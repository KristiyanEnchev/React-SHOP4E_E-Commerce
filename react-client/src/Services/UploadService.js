const host = 'http://localhost:5000/api';

export async function uploadPic(item) {
  const data = await fetch(host + '/upload/profile', {
    method: 'post',
    body: item,
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    });

  return data;
}
