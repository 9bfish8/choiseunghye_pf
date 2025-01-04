import React from 'react';

const Profile = () => {
    return (
        <section id="profile" className="mb-16">
            {/* 프로필 정보 섹션 */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8 transition-transform hover:scale-[1.02] duration-300">
                <div className="flex flex-col md:flex-row items-start gap-8">
                    <div className="w-48 h-48 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                        <img
                            src="/api/placeholder/200/200"
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            최승혜 Choi Seunghye
                        </h2>
                        <div className="space-y-3 text-gray-600">
                            <p className="text-xl font-bold text-gray-800">
                                뮤지컬·연극 작가, 드라마터그
                            </p>
                            <div className="mt-4 space-y-3">
                                <p className="flex items-center gap-2">
                                    <span>홍익대학교 공연예술대학원 뮤지컬 전공(수료)</span>
                                </p>
                                <p className="flex items-center gap-2">
                                    <span>DIMF 뮤지컬 아카데미 9기 전문 작가 (2023)</span>
                                </p>
                                <p className="flex items-center gap-2">
                                    <span>예비예술인 최초발표 지원사업 작가 (2024)</span>
                                </p>
                            </div>
                        </div>
                        <div className="mt-6 flex gap-4">
                            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                                이력서 다운로드
                            </button>
                            <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                                포트폴리오 보기
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* 공연 이력 섹션 */}
            <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    공연 이력
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* 2024 공연 */}
                    <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
                        <div className="flex items-start justify-between mb-4">
                            <h4 className="text-lg font-bold text-blue-600">창작뮤지컬 '피그말리온'</h4>
                            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">2024</span>
                        </div>
                        <ul className="space-y-2 text-gray-600">
                            <li>- 제작/어쩌구</li>
                            <li>- 극작/어쩌구이러쿵</li>
                            <li>- 위치: 서울 XX극장</li>
                        </ul>
                    </div>

                    {/* 2023 DIMF */}
                    <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
                        <div className="flex items-start justify-between mb-4">
                            <h4 className="text-lg font-bold text-blue-600">뮤지컬 '아르테미스'</h4>
                            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">2023</span>
                        </div>
                        <ul className="space-y-2 text-gray-600">
                            <li>- DIMF 뮤지컬 아카데미</li>
                            <li>- 극작/작사</li>
                            <li>- 공연: 부산 XX극장</li>
                        </ul>
                    </div>

                    {/* 2023 다른 공연 */}
                    <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
                        <div className="flex items-start justify-between mb-4">
                            <h4 className="text-lg font-bold text-blue-600">창작뮤지컬 'XXX'</h4>
                            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">2023</span>
                        </div>
                        <ul className="space-y-2 text-gray-600">
                            <li>- 창작 뮤지컬</li>
                            <li>- 극작/작사</li>
                            <li>- 공연: 서울 XX극장</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;