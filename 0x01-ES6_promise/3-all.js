import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([uploadedRes, userRes]) => {
      const { body: photo } = uploadedRes;
      const { firstName, lastName } = userRes;

      console.log(`${photo} ${firstName} ${lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
