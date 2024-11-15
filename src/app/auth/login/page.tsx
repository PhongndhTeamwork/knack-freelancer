"use client"

import {Button} from "@/components/ui/button"
import {Card, CardContent} from "@/components/ui/card"
import {Checkbox} from "@/components/ui/checkbox"
import {Input} from "@/components/ui/input"
import {Eye, EyeOff} from 'lucide-react'
import Link from "next/link"
import {FormEvent, useState} from "react"
import {Illustration} from "@/components/custom/illustration";
import {useRouter} from "next/navigation";

export default function Login() {
    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState("");
    const router = useRouter();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (email === "1") {
            router.push("/freelancer/home")
        }else if (email === "2"){
            router.push("/client")
        }
    }

    return (
        <div className="min-h-screen w-full flex p-4 overflow-hidden">
            {/* Left Side - Login Form */}
            <div className="flex-1 flex items-center justify-center p-4 sm:p-8 relative">
                <div className="h-[130px] w-[47px] absolute left-0 top-0">
                    <Illustration width={130} height={47} url="/logo/logo-black.svg"/>
                </div>
                <Card className="w-full max-w-md border-none shadow-none">
                    <CardContent className="space-y-6 mt-8">
                        {/* Login Form */}
                        <div className="space-y-4">
                            <h2 className="text-4xl font-semibold">Đăng nhập</h2>
                            <p className="text-sm text-muted-foreground">
                                Đăng nhập tài khoản của bạn để tiếp tục
                            </p>
                        </div>

                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div className="space-y-2">
                                <Input
                                    // type="email"
                                    placeholder="Email"
                                    // defaultValue="jonas_kahnwald@gmail.com"
                                    className="h-[40px]"
                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                    }}

                                />
                            </div>

                            <div className="space-y-2">
                                <div className="relative">
                                    <Input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Mật khẩu"
                                        className="h-[40px]"
                                    />
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="icon"
                                        className="absolute right-2 top-1/2 -translate-y-1/2"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {!showPassword ? (
                                            <EyeOff className="h-4 w-4 text-muted-foreground"/>
                                        ) : (
                                            <Eye className="h-4 w-4 text-muted-foreground"/>
                                        )}
                                        <span className="sr-only">
                                          {showPassword ? "Hide password" : "Show password"}
                                        </span>
                                    </Button>
                                </div>
                            </div>

                            <div className="flex items-center space-x-2">
                                <Checkbox id="remember"/>
                                <label
                                    htmlFor="remember"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Nhớ tài khoản của tôi
                                </label>
                            </div>

                            <Button variant="dark" className="w-full" size="sm">
                                Đăng nhập
                            </Button>

                            <div className="relative mt-3">
                                <div className="absolute inset-0 flex items-center">
                                    <span className="w-full border-t"/>
                                </div>
                                <div className="relative flex justify-center text-xs uppercase">
                                  <span className="bg-background px-2 text-muted-foreground">
                                    or
                                  </span>
                                </div>
                            </div>

                            <Button
                                variant="dark-outline" className="w-full mt-3" size="sm"
                            >
                                <div className="w-[24px] h-[24px] mr-3">
                                    <Illustration width={24} height={24} url="/auth/google.svg"/>
                                </div>
                                Đăng nhập với Google
                            </Button>

                            <div className="text-center text-sm">
                                <span className="text-muted-foreground">
                                  Bạn chưa có tài khoản?{" "}
                                </span>
                                <Link
                                    href="/auth/signup"
                                    className="font-semibold hover:underline"
                                >
                                    Đăng kí ngay
                                </Link>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>

            {/* Right Side - Image */}
            <div className="hidden lg:flex lg:flex-1 relative">
                <Illustration rounded={12} className="flex flex-1" url="/auth/auth2.svg"/>
            </div>
        </div>
    )
}