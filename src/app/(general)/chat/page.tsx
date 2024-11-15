'use client'

import {useState} from "react"
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"
import {Button} from "@/components/ui/button"
import {Card} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {ScrollArea} from "@/components/ui/scroll-area"
import {Search, Phone, Settings, Paperclip, Mic, Send} from 'lucide-react'
import {Badge} from "@/components/ui/badge";

export default function Chat() {
    const [messages] = useState([
        {
            id: 1,
            sender: "X-AE-A-13b",
            message: "Enter your message description here...",
            time: "12:25",
            avatar: "/placeholder.svg"
        },
        {
            id: 2,
            sender: "Jerome White",
            message: "Enter your message description here...",
            time: "12:25",
            avatar: "/placeholder.svg"
        },
        {
            id: 3,
            sender: "Madagascar Silver",
            message: "Enter your message description here...",
            time: "12:25",
            avatar: "/placeholder.svg",
            unread: true
        }
    ])

    return (
        <div className="flex h-screen bg-background overflow-hidden">
            {/* Sidebar */}
            <div className="w-full max-w-xs border-r hidden md:block">
                <div className="flex items-center justify-between p-4 border-b">
                    <div className="flex space-x-2 items-center">
                        <h1 className="text-xl font-semibold">Tin nhắn</h1>
                        <Badge variant="secondary" className="text-[#8E0000]">29</Badge>
                    </div>

                    <Button variant="ghost" size="icon">
                        <Settings className="h-5 w-5"/>
                    </Button>
                </div>

                <div className="p-4">
                    <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"/>
                        <Input className="pl-8 bg-[#D8D8D8]" placeholder="Tìm kiếm" />
                    </div>
                </div>

                <ScrollArea className="h-[calc(100vh-8rem)]">
                    {messages.map((chat) => (
                        <div
                            key={chat.id}
                            className="flex items-center gap-3 p-4 hover:bg-muted/50 cursor-pointer"
                        >
                            <Avatar>
                                <AvatarImage src={chat.avatar}/>
                                <AvatarFallback>{chat.sender[0]}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1 overflow-hidden">
                                <div className="flex items-center justify-between">
                                    <h3 className="font-medium">{chat.sender}</h3>
                                    <span className="text-xs text-muted-foreground">{chat.time}</span>
                                </div>
                                <p className="text-sm text-muted-foreground truncate">{chat.message}</p>
                            </div>
                            {chat.unread && (
                                <div className="w-2 h-2 bg-primary rounded-full"/>
                            )}
                        </div>
                    ))}
                </ScrollArea>
            </div>

            {/* Main Chat Area */}
            <div className="flex-1 flex flex-col">
                <div className="flex items-center justify-between p-4 border-b">
                    <div className="flex items-center gap-3">
                        <Avatar>
                            <AvatarImage src="/placeholder.svg"/>
                            <AvatarFallback>AW</AvatarFallback>
                        </Avatar>
                        <div>
                            <h2 className="font-semibold">Azunyan U. Wu</h2>
                            <p className="text-sm text-muted-foreground">Online</p>
                        </div>
                    </div>
                    <Button variant="ghost" size="icon">
                        <Phone className="h-5 w-5"/>
                    </Button>
                </div>

                <ScrollArea className="flex-1 p-4">
                    <div className="space-y-4">
                        <div className="flex justify-start">
                            <Card className="max-w-[80%] p-3 bg-[#D8D8D8]">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.</p>
                                <span className="text-xs text-muted-foreground mt-1">11:25</span>
                            </Card>
                        </div>

                        <div className="flex justify-end">
                            <Card className="max-w-[80%] p-3 bg-primary text-primary-foreground">
                                <p>Do androids truly dream of electric sheep?</p>
                                <span className="text-xs mt-1 opacity-70">12:30</span>
                            </Card>
                        </div>

                        <div className="flex justify-end">
                            <Card className="max-w-[80%] p-3 bg-primary text-primary-foreground">
                                <div className="rounded-lg overflow-hidden mb-2">
                                    <img
                                        src="/placeholder.svg"
                                        alt="Message attachment"
                                        className="w-full h-48 object-cover"
                                    />
                                </div>
                                <span className="text-xs opacity-70">02:25</span>
                            </Card>
                        </div>
                    </div>
                </ScrollArea>

                <div className="m-4 p-4 bg-[#D8D8D8] rounded-xl">
                    <div className="flex items-center gap-2">
                        <Input placeholder="Send a message..." className="flex-1"/>
                        <Button variant="ghost" size="icon">
                            <Mic className="h-5 w-5"/>
                        </Button>
                        <Button size="icon">
                            <Send className="h-5 w-5"/>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}