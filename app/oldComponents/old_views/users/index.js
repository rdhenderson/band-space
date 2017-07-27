// index.js is used for folder imports
// We are re-exporting the "public" pieces of the user components
// e.g. "import { LogInPageContainer } from ./users"
// or "import { loginUser } form './users'.actions"

export { default as LogIn } from './login/LogInPageContainer'
export { default as SignUp } from './signup/SignUpPageContainer'
export { default as UserPrivateProfile } from './profile/UserPrivateProfileContainer'
export { default as UserPublicProfile } from './profile/UserPublicProfileContainer'
