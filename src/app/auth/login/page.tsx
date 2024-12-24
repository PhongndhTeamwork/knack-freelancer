"use client"

import {Button} from "@/components/ui/button"
import {Card, CardContent} from "@/components/ui/card"
import {Checkbox} from "@/components/ui/checkbox"
import {Input} from "@/components/ui/input"
import {Eye, EyeOff} from 'lucide-react'
import Link from "next/link"
import {FormEvent, useEffect, useState} from "react"
import {Illustration} from "@/components/custom/illustration";
import {useRouter} from "next/navigation";
import {
    ClerkLoaded,
    ClerkLoading,
    SignedIn,
    SignedOut,
    SignInButton,
    // UserButton,
    useUser,
} from "@clerk/nextjs";
import {Loader} from "lucide-react";
import useAuthStore from "@/lib/store/user.modal";
import axios from "axios";
import {Role} from "@/lib/enums/role.enum";
// import axios from "axios";


export default function Login() {
    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState("");
    const router = useRouter();
    const {setToken} = useAuthStore();
    const {user, isSignedIn} = useUser();

    useEffect(() => {
        const fetchData = async () => {
            if (isSignedIn && user) {
                try {
                    await axios.post(`${process.env.NEXT_PUBLIC_PREFIX_API}/auth/login`, {
                        clerkUserId: user.id,
                        username: user.fullName || user.username,
                        email: user.emailAddresses[0]?.emailAddress,
                        imageSrc: user.imageUrl
                    }).then(({data}) => {
                        // console.log(data);
                        // setIsLoading(true)
                        setToken(data.data.token)
                        if (+data.data.role === Role.Freelancer) {
                            router.push("/freelancer/home")
                        } else if (+data.data.role === Role.Client) {
                            router.push("/client/home")
                        }
                    });
                } catch (error) {
                    console.error('Error during login:', error);
                    // setIsLoading(false)
                }
            }
        };
        fetchData().then(() => {
        });

    }, [isSignedIn, user, router, setToken]);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (email === "1") {
            router.push("/freelancer/home")
        }else if (email === "2"){
            router.push("/client/home")
        }
    }

    // useEffect( () => {
    //     const fetchData = async () => {
    //         if (isSignedIn && user) {
    //             // console.log({
    //             //     clerkUserId: user.id,
    //             //     username: user.fullName || user.username,
    //             //     email: user.emailAddresses[0]?.emailAddress,
    //             //     imageUrl: user.imageUrl
    //             // });
    //             try {
    //                 await axios.post(`${process.env.NEXT_PUBLIC_PREFIX_API}/api/auth/login`, {
    //                     clerkUserId: user.id,
    //                     username: user.fullName || user.username,
    //                     email: user.emailAddresses[0]?.emailAddress,
    //                     imageSrc: user.imageUrl
    //                 }).then(({data}) => {
    //                     console.log(data);
    //                 });
    //
    //             } catch (error) {
    //                 console.error('Error during login:', error);
    //             }
    //         }
    //     };
    //     fetchData().then(() => {
    //     });
    //
    // }, [isSignedIn, user, router]);

    return (
        <>
            {isSignedIn && user && <div className="w-screen h-screen absolute top-0 left-0 z-20 bg-white bg-opacity-40 flex justify-center items-center">
                <div
                    className="w-40 h-40 border-8 border-gray-600 border-solid rounded-full border-t-transparent animate-spin"></div>
            </div>}
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

                                <ClerkLoading>
                                    <Loader className="h-5 w-5 text-muted-foreground animate-spin"/>
                                </ClerkLoading>
                                <ClerkLoaded>
                                    <SignedIn>
                                        {/*<UserButton/>*/}
                                        {/*{isLoaded && user && (*/}
                                        {/*    <div className="mt-4">*/}
                                        {/*        <p>Welcome, {user.fullName || user.username}!</p>*/}
                                        {/*        <p>Email: {user.emailAddresses[0]?.emailAddress}</p>*/}
                                        {/*    </div>*/}
                                        {/*)}*/}
                                        <Button
                                            variant="dark-outline" className="w-full mt-3" size="sm"
                                        >
                                            <div className="w-[24px] h-[24px] mr-3">
                                                <Illustration width={24} height={24} url="/auth/google.svg"/>
                                            </div>
                                            Đăng nhập bằng Social
                                        </Button>
                                    </SignedIn>
                                    <SignedOut>
                                        <SignInButton mode="modal">
                                            <Button
                                                variant="dark-outline" className="w-full mt-3" size="sm"
                                            >
                                                <div className="w-[24px] h-[24px] mr-3">
                                                    <Illustration width={24} height={24} url="/auth/google.svg"/>
                                                </div>
                                                Đăng nhập bằng Social
                                            </Button>
                                        </SignInButton>
                                    </SignedOut>
                                </ClerkLoaded>


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
        </>

    )
}