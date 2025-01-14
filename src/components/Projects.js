import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
    return (
        <section id="projects" className="mb-8 sm:mb-12 md:mb-16">
            {/* 제목 */}
            <div className="flex items-center justify-between mb-6 sm:mb-8 md:mb-12">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#845EC2] to-[#9B89B3] bg-clip-text text-transparent">
                    리딩 쇼케이스 후 대본공모전 작품
                </h2>
                <div className="hidden sm:block h-px flex-1 bg-gradient-to-r from-[#845EC2]/20 to-transparent ml-8"></div>
            </div>

            {/* 프로젝트 카드 컨테이너 */}
            <div className="space-y-6 sm:space-y-8 md:space-y-12">
                {/* 아르테미스 */}
                <div className="transition-transform hover:scale-[1.01] duration-300">
                    <ProjectCard
                        title="MUSICAL 아르테미스"
                        subtitle="2023 DIMF 뮤지컬 아카데미 작품공연"
                        poster="/img/artemis.png"
                        details={[
                            { label: "극/작사", value: "최승혜" },
                            { label: "곡", value: "정수윤" }
                        ]}
                        audioUrl="/path/to/audio1.mp3"
                        logline="로그라인 내용..."
                        synopsis="시놉시스 내용..."
                    />
                </div>

                {/* 피그말리온 */}
                <div className="transition-transform hover:scale-[1.01] duration-300">
                    <ProjectCard
                        title="MUSICAL 피그말리온"
                        subtitle="2024 넥스트스텝 리딩쇼케이스"
                        poster="/img/pigmalion.png"
                        details={[
                            { label: "극/작사", value: "최승혜" },
                            { label: "곡", value: "서영우" }
                        ]}
                        audioUrl="/path/to/audio2.mp3"
                        logline="로그라인 내용..."
                        synopsis="시놉시스 내용..."
                    />
                </div>
            </div>
        </section>
    );
};

export default Projects;