import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { poppins } from "@/styles/fonts";
import Image from "next/image";

interface LoginFormValues {
    email: string;
    password: string;
  }

function LoginForm() {

    // const { register, handleSubmit } = useForm<LoginFormValues>();

    return (
        <div
            className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0  bg-no-repeat bg-cover relative bg-black/90"
          >
            <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-100 my-2"
              style={{
                backgroundImage:
                  "url('/assets/illustrations/Creative_thinking-bro.png')",
              }}
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
                    <div className="text-3xl font-semibold"
                        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
                    >Welcome Back !!!</div>
                  </CardHeader>
                  <CardContent className="px-6">
                    <Label htmlFor="email" className="text-left text-gray-200"
                        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
                    >
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="mt-2 mb-4 border-white focus-visible:ring-cyan-100 placeholder:text-stone-200 placeholder:font-light text-purple-100"
                    />
                    <Label htmlFor="password" className="text-left text-gray-200"
                        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
                    >
                      Password
                    </Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      className="mt-2 mb-4 border-white focus-visible:ring-cyan-100 placeholder:text-stone-200 placeholder:font-light text-purple-100"
                    />
                    <Button className="w-full mt-4 cursor-pointer" variant={"secondary"}>
                      Sign In
                    </Button>
                    <p className="text-white mt-4 flex items-center justify-center gap-2">
                      Don&apos;t have an account?{" "}
                      <a href="/auth/sign-up" className="text-blue-400 hover:underline"
                        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
                        Sign Up
                      </a>
                    </p>
                    <p className="text-white mt-2">
                      <a href="#" className="text-blue-400 hover:underline">
                        Forgot Password?
                      </a>
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
    )
}

export default LoginForm
