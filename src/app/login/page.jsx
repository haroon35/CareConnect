"use client";

import { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import { Overpass } from "next/font/google";
import { FaFacebookF, FaGoogle, FaTwitter, FaGithub } from "react-icons/fa"; // Import social icons

// Import Overpass font
const overpass = Overpass({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Include weights you plan to use
});

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempted with:", { email, password });
  };

  const handleSocialLogin = (provider) => {
    console.log(`Login with ${provider} attempted`);
    // Here you can integrate OAuth login logic with NextAuth or Firebase
  };

  return (
    <div
      className={`${overpass.className} min-h-screen flex items-center justify-center bg-gray-100 p-4`}
    >
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Log in</CardTitle>
          <CardDescription>
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <button
              type="submit"
              className="w-full bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900"
            >
              Log in
            </button>

            {/* OR Divider */}
            <div className="text-center text-gray-500">or sign up with:</div>

            {/* Social Login Icons */}
            <div className="flex items-center justify-center space-x-6">
              <FaFacebookF
                className="text-gray-400 hover:text-blue-600 cursor-pointer text-xl"
                onClick={() => handleSocialLogin("Facebook")}
              />
              <FaGoogle
                className="text-gray-400 hover:text-red-500 cursor-pointer text-xl"
                onClick={() => handleSocialLogin("Google")}
              />
              <FaTwitter
                className="text-gray-400 hover:text-blue-400 cursor-pointer text-xl"
                onClick={() => handleSocialLogin("Twitter")}
              />
              <FaGithub
                className="text-gray-400 hover:text-gray-800 cursor-pointer text-xl"
                onClick={() => handleSocialLogin("GitHub")}
              />
            </div>

            <div className="text-sm text-center space-y-2">
              <p className="text-gray-600">
                Don&apos;t have an account?{" "}
                <Link href="/signup" className="text-blue-600 hover:underline">
                  Sign up
                </Link>
              </p>
              <Link
                href="/forgot"
                className="text-blue-600 hover:underline block"
              >
                Forgot your password?
              </Link>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
