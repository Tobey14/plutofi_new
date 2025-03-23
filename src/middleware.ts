import { NextResponse, NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  // const token = req.cookies.has('amni_token');
  // const url = req.nextUrl.clone();

  // // Redirect to login only if token is missing and user is accessing a protected page
  // if (!token && url.pathname.startsWith('/app')) {
  //   url.pathname = '/';
  //   return NextResponse.redirect(url);
  // }

  // // Redirect to dashboard if logged in and accessing login or signup page
  // if (token && (url.pathname === '/')) {
  //   url.pathname = '/app/dashboard';
  //   return NextResponse.redirect(url);
  // }

  return NextResponse.next();
}

// Specify which paths to apply the middleware to
export const config = {
  matcher: ['/app/:path*', '/'],
};
