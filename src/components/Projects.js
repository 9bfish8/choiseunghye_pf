import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "MUSICAL 아르테미스",
            subtitle: "2023 DIMF 뮤지컬 아카데미 작품공연",
            poster: "/api/placeholder/300/400",
            details: [
                { label: "극/작사", value: "최승혜" },
                { label: "곡", value: "정수윤" }
            ],
            audioUrl: "/path/to/audio1.mp3",
            logline: "로그라인 내용...",
            synopsis: "시놉시스 내용..."
        },
        {
            id: 2,
            title: "MUSICAL 피그말리온",
            subtitle: "2024 넥스트스텝 리딩쇼케이스",
            poster: "/api/placeholder/300/400",
            details: [
                { label: "극/작사", value: "최승혜" },
                { label: "곡", value: "서영우" }
            ],
            audioUrl: "/path/to/audio2.mp3",
            logline: "로그라인 내용...",
            synopsis: "시놉시스 내용..."
        }
    ];

    return (
        <section id="projects" className="mb-16">
            <h2 className="text-2xl font-bold mb-8">
                라이팅 쇼케이스 후 대본공모전 작품
            </h2>
            <div className="space-y-6">
                {projects.map(project => (
                    <ProjectCard key={project.id} {...project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;