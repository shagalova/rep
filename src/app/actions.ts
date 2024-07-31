"use server"
 
// import { auth } from '@/app/api/auth/route'
 
export async function handleAuth( data: any) {
  console.log(data)
  console.log("ksjflskdjflsdjflksdkfj")

  return {
    message: 'Please enter a valid email',
  }
}