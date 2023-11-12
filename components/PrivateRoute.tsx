import React from 'react'
import { useRouter } from 'next/router'
// import { useUserContext } from '../context/user_context'
import { useAuth0 } from '@auth0/auth0-react'

const PrivateRoute = ({ myUser, children, whitelistUrls }: any) => {
  const router = useRouter();
  if(myUser || whitelistUrls.filter( (p: string) => router.pathname.startsWith(p)).length > 0)  {
    return children
  }
  else return router.push('/login')

}
export default PrivateRoute
