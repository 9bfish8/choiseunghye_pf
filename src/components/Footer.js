const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-white">Contact</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                                <span>Email:</span>
                                <a href="mailto:example@email.com" className="hover:text-[#845EC2]">
                                    example@email.com
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <span>Phone:</span>
                                <a href="tel:+82-10-xxxx-xxxx" className="hover:text-[#845EC2]">
                                    +82-10-xxxx-xxxx
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-white">Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#profile" className="hover:text-[#845EC2]">Profile</a>
                            </li>
                            <li>
                                <a href="#projects" className="hover:text-[#845EC2]">Projects</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-white">Social</h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="https://www.instagram.com/seung_mile"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[#845EC2]"
                                >
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-[#845EC2]">LinkedIn</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
                    <p>&copy; 2024 Portfolio. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;