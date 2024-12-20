"use client"

import {Button} from "@/components/ui/button"
import {Card, CardContent} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Eye, EyeOff, Loader} from 'lucide-react'
import Link from "next/link"
import {useState} from "react"
import {Illustration} from "@/components/custom/illustration";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {ClerkLoaded, ClerkLoading, SignedIn, SignedOut, SignUpButton, UserButton} from "@clerk/nextjs";


export default function Signup() {
    const [showPassword, setShowPassword] = useState(false)
    const [startDate, setStartDate] = useState<Date | null>(null);

    return (
        <div className="min-h-screen w-full flex p-4 overflow-hidden">
            {/* Left Side - Login Form */}
            <div className="flex-1 flex items-center justify-center p-4 sm:p-8 relative">
                <Link href="/home" className="h-[130px] w-[47px] absolute left-0 top-0">
                    <Illustration width={130} height={47} url="/logo/logo-black.svg"/>
                </Link>
                <Card className="w-full max-w-md border-none shadow-none">
                    <CardContent className="space-y-6 mt-8">
                        {/* Login Form */}
                        <div className="space-y-4">
                            <h2 className="text-4xl font-semibold">Đăng ký</h2>
                            <p className="text-sm text-muted-foreground">
                                Tạo tài khoản để tham gia Knack ngay
                            </p>
                        </div>

                        <form className="space-y-4">
                            <div className="space-y-2">
                                <Input
                                    type="text"
                                    placeholder="Họ tên"
                                />
                            </div>

                            <div className="space-y-2">
                                <DatePicker customInput={<Input/>} placeholderText="Date of birth" selected={startDate} onChange={(date) => setStartDate(date)} dateFormat="dd/MM/yyyy"/>
                            </div>

                            <div className="space-y-2">
                                <Input
                                    type="email"
                                    placeholder="Email"
                                />
                            </div>

                            <div className="space-y-2">
                                <div className="relative">
                                    <Input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Mật khẩu"
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

                            <Button variant="dark" size="sm" className="w-full">
                                Đăng ký
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

                            <ClerkLoading>
                                <Loader className="h-5 w-5 text-muted-foreground animate-spin"/>
                            </ClerkLoading>
                            <ClerkLoaded>
                                <SignedIn>
                                    <UserButton/>
                                    {/*{isLoaded && user && (*/}
                                    {/*    <div className="mt-4">*/}
                                    {/*        <p>Welcome, {user.fullName || user.username}!</p>*/}
                                    {/*        <p>Email: {user.emailAddresses[0]?.emailAddress}</p>*/}
                                    {/*    </div>*/}
                                    {/*)}*/}
                                </SignedIn>
                                <SignedOut>
                                    <SignUpButton mode="modal">
                                        <Button
                                            variant="dark-outline" className="w-full mt-3" size="sm"
                                        >
                                            <div className="w-[24px] h-[24px] mr-3">
                                                <Illustration width={24} height={24} url="/auth/google.svg"/>
                                            </div>
                                            Đăng ký bằng Social
                                        </Button>
                                    </SignUpButton>
                                </SignedOut>
                            </ClerkLoaded>

                            <div className="text-center text-sm">
                                <span className="text-muted-foreground">
                                  Bạn đã có tài khoản?{" "}
                                </span>
                                <Link
                                    href="/auth/login"
                                    className="font-semibold hover:underline"
                                >
                                    Đăng nhập ngay
                                </Link>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>

            {/* Right Side - Image */}
            <div className="hidden lg:flex lg:flex-1 relative">
                <Illustration rounded={12} className="flex flex-1" url="/auth/auth.svg"/>
            </div>
        </div>
    )
}