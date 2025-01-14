import React from 'react';

const Profile = () => {
    return (
        <section id="profile">
            {/* 프로필 정보 섹션 */}
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
                    {/* 프로필 이미지 */}
                    <div className="w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-lg overflow-hidden flex-shrink-0 shadow-md">
                        <img
                            src="/img/profile.png"
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* 프로필 정보 */}
                    <div className="flex-1 min-w-0 text-center md:text-left">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-3 md:mb-4 text-[#845EC2]">
                            최승혜 Choi Seunghye
                        </h2>
                        <div className="space-y-3">
                            <p className="text-lg sm:text-xl font-bold text-[#9B89B3]">
                                뮤지컬·연극 작가, 드라마터그
                            </p>
                            <div className="mt-3 md:mt-4 space-y-2 md:space-y-3 text-[#9B89B3]">
                                <p className="flex items-center gap-2 justify-center md:justify-start">
                                    <span>홍익대학교 공연예술대학원 뮤지컬 전공(수료)</span>
                                </p>
                                <p className="flex items-center gap-2 justify-center md:justify-start">
                                    <span>DIMF 뮤지컬 아카데미 9기 전문 작가 (2023)</span>
                                </p>
                                <p className="flex items-center gap-2 justify-center md:justify-start">
                                    <span>예비예술인 최초발표 지원사업 작가 (2024)</span>
                                </p>
                            </div>
                        </div>

                        {/* 공연이력 */}
                        <div className="mt-6 md:mt-8 bg-gray-50/80 p-4 sm:p-6 rounded-lg">
                            <p className="font-medium text-lg mb-3 text-[#845EC2]">공연이력</p>
                            <ul className="space-y-2 list-disc text-[#9B89B3]">
                                <li className="ml-4">피그말리온 (2024, 서울)</li>
                                <li className="ml-4">아르테미스 - DIMF 뮤지컬 아카데미 (2023, 부산)</li>
                                <li className="ml-4">XXX (2023, 서울)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;