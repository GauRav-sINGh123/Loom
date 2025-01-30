import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function middleware(req: NextRequest) {
    const token = req.cookies.get("token")?.value; // Read JWT from cookies
    
     
  // Define protected routes
  const protectedRoutes = [ "/dashboard", "/profile", "/feed"];

  // Redirect unauthenticated users to login
  if (protectedRoutes.includes(req.nextUrl.pathname) && !token) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  return NextResponse.next(); // Continue request if authenticated
}

export const config = {
  matcher: [ "/dashboard", "/profile", "/feed"], // Protect these routes
};