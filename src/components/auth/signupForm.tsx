import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { poppins } from "@/styles/fonts";
import Image from "next/image";

function SignupForm() {
  return (
    <div className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0 bg-no-repeat bg-cover relative bg-black/90">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-100 my-2"
        style={{ backgroundImage: "url('/assets/illustrations/Thinking_face-bro.png')" }}
      ></div>
      <div className="w-full z-20 bg-cover bg-center bg-no-repeat">
        <Image
          src="/assets/auth/logo.png"
          alt="Vortex Logo"
          width={200}
          height={200}
          className="mx-auto"
          style={{ filter: "drop-shadow(0 0 5px rgba(0, 0, 0, 0.5))" }}
        />
        <div className="items-center justify-center flex flex-col">
          <Card className="isolate aspect-video rounded-xl bg-black/40 ring-1 ring-black/5 backdrop-blur-md hover:scale-105 transition-transform duration-300 w-[90%] font-sans">
            <CardHeader className={`text-center ${poppins.variable} text-purple-400`}>
              <div className="text-3xl font-semibold" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
                Create an Account
              </div>
            </CardHeader>
            <CardContent className="px-6">
              <Label htmlFor="name" className="text-left text-gray-200" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
                Name
              </Label>
              <Input id="name" type="text" placeholder="Enter your name" className="mt-2 mb-4 border-white focus-visible:ring-cyan-100 placeholder:text-stone-200 placeholder:font-light text-purple-100" />
              
              <Label htmlFor="email" className="text-left text-gray-200" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
                Email
              </Label>
              <Input id="email" type="email" placeholder="Enter your email" className="mt-2 mb-4 border-white focus-visible:ring-cyan-100 placeholder:text-stone-200 placeholder:font-light text-purple-100" />
              
              <Label htmlFor="password" className="text-left text-gray-200" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
                Password
              </Label>
              <Input id="password" type="password" placeholder="Enter your password" className="mt-2 mb-4 border-white focus-visible:ring-cyan-100 placeholder:text-stone-200 placeholder:font-light text-purple-100" />
              <Label htmlFor="password" className="text-left text-gray-200" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
                Confirm Password
              </Label>
              <Input id="password" type="password" placeholder="Confirm  password" className="mt-2 mb-4 border-white focus-visible:ring-cyan-100 placeholder:text-stone-200 placeholder:font-light text-purple-100" />
              
              <Button className="w-full mt-4 cursor-pointer" variant="secondary">
                Sign Up
              </Button>
              
              <p className="text-white mt-4 flex items-center justify-center gap-2">
                Already have an account? <a href="/auth/login" className="text-blue-400 hover:underline" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>Sign In</a>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;