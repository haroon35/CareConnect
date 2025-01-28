"use client";
import { Overpass } from "next/font/google";
import { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaFacebookF, FaGoogle, FaTwitter, FaGithub } from "react-icons/fa";

// Import Overpass font
const overpass = Overpass({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function SignUpPage() {
  const [userType, setUserType] = useState(null);

  const handleSocialSignUp = (provider) => {
    console.log(`Sign up with ${provider} attempted`);
    // Integrate OAuth sign-up logic here if needed
  };

  return (
    <div className={`${overpass.className} min-h-screen flex items-center justify-center bg-gray-100 p-4`}>
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Sign up</CardTitle>
          <CardDescription>Create an account to get started</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Common credentials */}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="john@example.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
          </div>

          {/* User type selection */}
          <div className="space-y-2">
            <Label htmlFor="userType">I am a</Label>
            <Select onValueChange={(value) => setUserType(value)}>
              <SelectTrigger id="userType">
                <SelectValue placeholder="Select user type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Donor">Donor</SelectItem>
                <SelectItem value="Organization">Organization</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Additional fields based on user type */}
          {userType === "Donor" && (
            <>
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input id="fullName" placeholder="John Doe" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="donorContact">Contact Number</Label>
                <Input id="donorContact" type="tel" placeholder="+1 (555) 123-4567" required />
              </div>
            </>
          )}
          {userType === "Organization" && (
            <>
              <div className="space-y-2">
                <Label htmlFor="orgName">Organization Name</Label>
                <Input id="orgName" placeholder="Acme Inc." required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="taxId">Tax ID</Label>
                <Input id="taxId" placeholder="Tax ID Number" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="orgContact">Contact Number</Label>
                <Input id="orgContact" type="tel" placeholder="+1 (555) 123-4567" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="orgAddress">Address</Label>
                <Textarea id="orgAddress" placeholder="123 Main St, City, State, ZIP" required />
              </div>
            </>
          )}
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <button className="w-full bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900" disabled={!userType}>
            {userType ? `Sign Up as ${userType}` : "Sign Up"}
          </button>

          {/* OR Divider */}
          <div className="text-center text-gray-500">or sign up with:</div>

          {/* Social Login Icons */}
          <div className="flex items-center justify-center space-x-6">
            <FaFacebookF
              className="text-gray-400 hover:text-blue-600 cursor-pointer text-xl"
              onClick={() => handleSocialSignUp("Facebook")}
            />
            <FaGoogle
              className="text-gray-400 hover:text-red-500 cursor-pointer text-xl"
              onClick={() => handleSocialSignUp("Google")}
            />
            <FaTwitter
              className="text-gray-400 hover:text-blue-400 cursor-pointer text-xl"
              onClick={() => handleSocialSignUp("Twitter")}
            />
            <FaGithub
              className="text-gray-400 hover:text-gray-800 cursor-pointer text-xl"
              onClick={() => handleSocialSignUp("GitHub")}
            />
          </div>

          <p className="text-sm text-center text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-600 hover:underline">
              Log in
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
