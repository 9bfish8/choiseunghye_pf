import React from 'react';

const ProjectCard = ({ title, subtitle, poster, details, audioUrl }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex gap-8">
                {/* 왼쪽: 포스터 & 플레이어 */}
                <div className="w-64 flex flex-col gap-4">
                    {/* 포스터 */}
                    <div className="border border-gray-200">
                        <img
                            src={poster}
                            alt={title}
                            className="w-full object-cover"
                        />
                    </div>
                    {/* 오디오 플레이어 */}
                    <div className="flex items-center gap-2 bg-gray-50 p-2 rounded">
                        <button className="w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                            ▶
                        </button>
                        <div className="flex-1 h-1 bg-gray-200 rounded">
                            <div className="h-full bg-blue-600 rounded" style={{width: "0%"}}></div>
                        </div>
                        <span className="text-xs text-gray-500">0:00</span>
                    </div>
                </div>

                {/* 오른쪽: 작품 정보 */}
                <div className="flex-1">
                    {/* 제목 & 부제 */}
                    <h3 className="text-xl font-bold mb-1">{title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{subtitle}</p>

                    {/* 상세 정보 */}
                    <div className="space-y-1">
                        {details.map((detail, index) => (
                            <p key={index} className="text-sm">
                                {detail.label} | {detail.value}
                            </p>
                        ))}
                    </div>

                    {/* 로그라인 */}
                    <div className="mt-4">
                        <p className="text-sm mb-1">로그라인</p>
                        <div className="h-2 bg-gray-200 rounded w-full"></div>
                    </div>

                    {/* 시놉시스 */}
                    <div className="mt-4">
                        <p className="text-sm">시놉시스</p>
                        <div className="mt-1 space-y-1">
                            <div className="h-2 bg-gray-200 rounded w-full"></div>
                            <div className="h-2 bg-gray-200 rounded w-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;