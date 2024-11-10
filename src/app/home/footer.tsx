import Link from "next/link"
import {Illustration} from "@/components/custom/illustration";
// import Image from "next/image";

const footerLinks = {
    product: {
        title: "Product",
        links: [
            {name: "Overview", href: "/overview"},
            {name: "Features", href: "/features"},
            {name: "Solutions", href: "/solutions"},
            {name: "Tutorials", href: "/tutorials"},
            {name: "Pricing", href: "/pricing"},
            {name: "Releases", href: "/releases"},
        ],
    },
    company: {
        title: "Company",
        links: [
            {name: "About us", href: "/about"},
            {name: "Careers", href: "/careers"},
            {name: "Press", href: "/press"},
            {name: "News", href: "/news"},
            {name: "Media kit", href: "/media-kit"},
            {name: "Contact", href: "/contact"},
        ],
    },
    legal: {
        title: "Legal",
        links: [
            {name: "Terms", href: "/terms"},
            {name: "Privacy", href: "/privacy"},
            {name: "Cookies", href: "/cookies"},
            {name: "Licenses", href: "/licenses"},
            {name: "Settings", href: "/settings"},
            {name: "Contact", href: "/contact"},
        ],
    },
}

export const Footer = () => {
    return (
        <footer className="bg-black text-white">
            <div className="container mx-auto px-4 py-12 max-w-[1280px]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Logo and Description */}
                    <div className="space-y-4">
                        <Link href="/" className="inline-block">
                            {/*<Image src="/logo/logo1.svg" alt="Knack" width={130} height={0} layout="intrinsic"/>*/}
                            <Illustration width={130} height={47} url='/logo/logo1.svg'/>
                        </Link>
                        <p className="text-gray-400 text-sm max-w-xs">
                            Design amazing digital experiences that create more happy in the world.
                        </p>
                        <div className="space-y-2 flex items-center">
                            <p className="text-sm font-medium">Mobile App</p>
                            <div className="flex space-x-2 h-[32px] ms-2">
                                <Link href="#" className="opacity-75 hover:opacity-100">
                                    <Illustration width={32} height={32} url='/social/apple.svg'/>
                                </Link>
                                <Link href="#" className="opacity-75 hover:opacity-100">
                                    <Illustration width={32} height={32} url='/social/android.svg'/>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Footer Links */}
                    {Object.values(footerLinks).map((section) => (
                        <div key={section.title}>
                            <h3 className="text-sm text-gray-400 font-semibold mb-4">{section.title}</h3>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-white hover:text-white transition-colors text-sm"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="container mx-auto px-4 py-6 max-w-[1280px]">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-sm text-white">
                            <span>© &nbsp;</span>
                            <span className="font-bold">Knack </span>
                            <span>2024. All rights reserved.</span>
                        </p>
                        <div className="flex space-x-4">
                            <Link
                                href="#"
                                className="text-gray-400 hover:text-white transition-colors"
                                aria-label="LinkedIn"
                            >
                                <Illustration width={24} height={24} url='/social/instagram.svg'/>
                            </Link>
                            <Link
                                href="#"
                                className="text-gray-400 hover:text-white transition-colors"
                                    aria-label="Facebook"
                            >
                                <Illustration width={24} height={24} url='/social/facebook.svg'/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}