import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signupPromise = signUpUser(firstName, lastName);
  const uploadPromise = uploadPhoto(fileName);

  return Promise.allSettled([signupPromise, uploadPromise]).then((res) => ({
    status: res.status,
    value: res.status === 'fulfilled' ? res.value : res.reason,
  }));
}
