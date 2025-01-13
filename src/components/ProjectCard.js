import React from 'react';

const ProjectCard = ({ title, subtitle, poster, details, audioUrl }) => {
    return (
        <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg">
            <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8">
                {/* 왼쪽: 포스터 & 플레이어 */}
                <div className="w-full md:w-64 flex flex-col gap-4">
                    {/* 포스터 */}
                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                        <img
                            src={poster}
                            alt={title}
                            className="w-full h-64 md:h-80 object-cover"
                        />
                    </div>
                    {/* 오디오 플레이어 */}
                    <div className="flex items-center gap-2 bg-gray-50 p-3 rounded">
                        <button className="w-8 h-8 flex items-center justify-center bg-[#845EC2] text-white rounded-full hover:bg-[#9B89B3] transition-colors">
                            ▶
                        </button>
                        <div className="flex-1 h-1 bg-gray-200 rounded">
                            <div className="h-full bg-[#845EC2] rounded" style={{width: "0%"}}></div>
                        </div>
                        <span className="text-xs text-[#9B89B3]">0:00</span>
                    </div>
                </div>

                {/* 오른쪽: 작품 정보 */}
                <div className="flex-1 min-w-0">
                    {/* 제목 & 부제 */}
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 text-[#845EC2]">{title}</h3>
                    <p className="text-[#9B89B3] mb-4">{subtitle}</p>

                    {/* 상세 정보 */}
                    <div className="space-y-2">
                        {details.map((detail, index) => (
                            <p key={index} className="text-[#9B89B3]">
                                <span className="font-medium">{detail.label}</span> | {detail.value}
                            </p>
                        ))}
                    </div>

                    {/* 로그라인 */}
                    <div className="mt-4 sm:mt-6 bg-gray-50 p-4 sm:p-6 rounded-lg">
                        <p className="font-medium mb-2 text-[#845EC2]">로그라인</p>
                        <p className="text-[#9B89B3]">
                            작품의 로그라인이 들어갈 자리입니다.
                        </p>
                    </div>

                    {/* 시놉시스 */}
                    <div className="mt-4 bg-gray-50 p-4 sm:p-6 rounded-lg">
                        <p className="font-medium mb-2 text-[#845EC2]">시놉시스</p>
                        <p className="text-[#9B89B3]">
                            작품의 시놉시스가 들어갈 자리입니다. 여러 줄의 내용이 들어갈 수 있습니다.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;