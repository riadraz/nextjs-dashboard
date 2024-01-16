import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
//import { NextResponse } from 'next/server';

export default NextAuth(authConfig).auth;
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};



/*

// The country to block from accessing the secret page
const BLOCKED_COUNTRY = 'JP';
 
// Trigger this middleware to run on the `/secret-page` route
export const config = {
  matcher: '/secret-page',
};
 
export default function middleware(request: Request) {
  // Extract country. Default to US if not found.
  const country = (request.geo && request.geo.country) || 'US';
 
  console.log(`Visitor from ${country}`);
 
  // Specify the correct route based on the requests location
  if (country === BLOCKED_COUNTRY) {
    request.url.pathname = '/login';
  } else {
    request.url.pathname = `/secret-page`;
  }
 
  // Rewrite to URL
  return NextResponse.rewrite(request.url);
}

*/