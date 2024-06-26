import { signUp } from 'aws-amplify/auth'

async function handleSignUp({ username, password, email, phone_number }) {
  try {
    const { isSignUpComplete, userId, nextStep } = await signUp({
      username,
      password,
      options: {
        userAttributes: {
          email,
          phone_number, // E.164 number convention
        },
        // optional
        autoSignIn: true, // or SignInOptions e.g { authFlowType: "USER_SRP_AUTH" }
      },
    })

    console.log(userId)
  } catch (error) {
    console.log('error signing up:', error)
  }
}
