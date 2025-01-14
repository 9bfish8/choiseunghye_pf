import React from 'react';
import Header from "./components/Header";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Layout from "./components/Layout";

const App = () => {
    return (
        <Layout>
            <div className="min-h-screen flex flex-col">
                {/* 헤더 */}
                <Header />

                {/* 메인 컨텐츠 */}
                <main className="flex-grow py-6 sm:py-8 md:py-12">
                    <div className="space-y-8 sm:space-y-12 md:space-y-16">
                        <Profile />
                        <Projects />
                    </div>
                </main>

                {/* 푸터 */}
                <Footer />
            </div>
        </Layout>
    );
};

export default App;