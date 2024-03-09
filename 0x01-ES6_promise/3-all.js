import { uploadPhoto, createUser } from './utils';

export function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((results) => {
      const [photo, user] = results;
      console.log(`${user.firstName} ${user.lastName}`);
    })
    .catch(() => {
      console.error('Signup system offline');
    });
}
