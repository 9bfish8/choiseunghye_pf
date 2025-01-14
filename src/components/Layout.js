import React from 'react';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#FEF7FF] via-[#FEF7FF] to-[#D5CABD]/20">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-full sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px]">
                {children}
            </div>
        </div>
    );
};

export default Layout;