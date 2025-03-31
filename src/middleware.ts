import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('accessToken')?.value;
  const url = request.nextUrl.clone();

  const isRootPage = url.pathname === '/';
  const isLoginPage = url.pathname === '/auth/login';
  const isSignUpPage = url.pathname === '/auth/sign-up';
  const isForgotPasswordPage = url.pathname.startsWith('/auth/forgot-password');
  const isResetPasswordPage = url.pathname.startsWith('/auth/reset-password');
  const isVerifyOtpPage = url.pathname.startsWith('/verify-otp');
  const isAuthPage = isLoginPage || isSignUpPage || isForgotPasswordPage || isResetPasswordPage || isVerifyOtpPage;
  const isProtectedRoute = url.pathname.startsWith('/dashboard') || url.pathname.startsWith('/learn') || url.pathname.startsWith('/courses') || url.pathname.startsWith('/personal-info') || url.pathname.startsWith('/profile') || url.pathname.startsWith('/quiz');

  
  if (isRootPage) {
    url.pathname = '/auth/login';
    return NextResponse.redirect(url);
  }

  if (!token && isProtectedRoute) {
    url.pathname = '/auth/login';
    return NextResponse.redirect(url);
  }

  // if(token && isProtectedRoute){
  //   return NextResponse.redirect(url);
  // }

  if (token && isAuthPage) {
    url.pathname = '/dashboard';
    return NextResponse.redirect(url);
  }

  

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/learn/:path*',
    '/',
    '/auth/login',
    '/auth/sign-up',
    '/auth/forgot-password',
    '/auth/reset-password',
    '/auth/verify-otp',
    '/profile/:path*',
    '/quiz/:path*',
    '/personal-info',
    '/courses'
  ],
};