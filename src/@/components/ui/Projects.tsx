'use client'

/* eslint-disable max-len */
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
//import { projects, buttons } from  "@/lib/project";

const projects = [
    {
        id: 1,
        type: 'bot',
        title: 'Spy bot',
        description:
            'The spy bot is a bot designed to track people using links.',
        link: 'https://t.me/spytellbot',
        tech: [
            'python/python-original.svg',
            'javascript/javascript-original.svg',
            'mongodb/mongodb-original.svg',
        ],
    },
    {
        id: 2,
        type: 'web',
        title: 'Wistra',
        description: 'Wistra is a web app that displays tourist destinations.',
        link: 'https://wistra.my.id/',
        tech: [
            'nextjs/nextjs-original.svg',
            'tailwindcss/tailwindcss-plain.svg',
            'mongodb/mongodb-original.svg',
        ],
    },
    {
        id: 3,
        title: 'Konda 1',
        type: 'web',
        description:
            'Konda Satu is a village website that displays village information.',
        link: 'https://desa.konda-satu.my.id/',
        tech: [
            'express/express-original.svg',
            'tailwindcss/tailwindcss-plain.svg',
            'mongodb/mongodb-original.svg',
        ],
    },
    {
        id: 4,
        type: 'web',
        title: 'Quran Lite',
        description: 'Quran Lite is a web app that displays the Quran.',
        link: 'https://quranlite.vercel.app/',
        tech: ['react/react-original.svg', 'tailwindcss/tailwindcss-plain.svg'],
    },
    {
        id: 5,
        type: 'scraping',
        title: 'Anime API',
        description: "Scraping anime data from otakudesu.to's website.",
        link: 'https://anime-api.asmindev.repl.co/',
        tech: ['python/python-original.svg'],
    },
    {
        id: 6,
        type: 'scraping',
        title: 'Donghua API',
        description: "Scraping anime data from anichin's website.",
        link: 'https://anichin-api.asmindev.repl.co/',

        tech: ['python/python-original.svg'],
    },
    {
        id: 7,
        type: 'web',
        title: 'Douchin',
        description:
            'Douchin is a web app that displays anime and donghua data.',
        link: 'https://dongx.asmindev.me',
        tech: [
            'nextjs/nextjs-original.svg',
            'tailwindcss/tailwindcss-plain.svg',
        ],
    },
    {
        id: 8,
        type: 'bot',
        title: 'Telegram Storage',
        description: 'Store your file in telegram with bot',
        link: 'https://github.com/asmindev/telegram-storage/',
        tech: ['express/express-original.svg', 'mongodb/mongodb-original.svg'],
    },
    {
        id: 9,
        type: 'web',
        title: 'Quran Web',
        description: 'Quran web, read quran in everywhere',
        link: 'https://quran.asmindev.me',
        tech: [
            'nextjs/nextjs-original.svg',
            'tailwindcss/tailwindcss-plain.svg',
        ],
    },
    {
        id: 10,
        type: 'web',
        title: 'Douchin',
        description: 'watch donghua without ads',
        link: 'https://dongx.asmindev.me',
        tech: [
            'nextjs/nextjs-original.svg',
            'tailwindcss/tailwindcss-plain.svg',
        ],
    },
    {
        id: 11,
        type: 'web',
        title: 'Todo List',
        description: 'Simple todo app',
        link: 'https://todo.asmindev.me',
        tech: [
            'nextjs/nextjs-original.svg',
            'tailwindcss/tailwindcss-plain.svg',
        ],
    },
]
const button = projects.map((e) => e.type)
button.unshift('all')

const buttons = [...new Set(button)].map((e, index) => ({
    value: e,
    id: index,
}))

function Card({ project }) {
    return (
        <motion.div
            key={project.id}
            layoutId={project.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-64 h-full p-4 flex-none"
        >
            <img
                className="w-full h-48 object-cover"
                width={280}
                height={280}
                src="https://www.laralee.design/wp-content/uploads/2020/03/blog-20200309-web-design-display-1-shota-twisted.jpg"
                alt="banner"
            />
            <div className="w-full p-4 bg-white">
                <h3 className="text-gray-700 dark:text-gray-700 group-hover:text-emerald-400 font-bold text-md transition-all duration-300">
                    {project.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-500 text-[10px]">
                    {project.description}
                </p>
                <div className="flex items-center gap-2 py-2">
                    {project.tech?.map((tech) => (
                        <img
                            key={tech}
                            src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}`}
                            alt={tech}
                            className="w-4 h-4 grayscale group-hover:grayscale-0 transition-all duration-300"
                        />
                    ))}
                </div>
                <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="block text-gray-600 dark:text-gray-700 font-medium text-[10px] decoration-clone tracking-widest underline underline-offset-2 mt-2"
                >
                    View
                </a>
            </div>
        </motion.div>
    )
}

export default function Projects() {
    const [selected, setSelected] = useState('all')
    const [filteredProjects, setFilteredProjects] = useState([])
    const [show, setShow] = useState(false)
    const filterHandler = (type) => {
        setSelected(type)
        if (type === 'all') {
            setFilteredProjects(projects)
            return
        }
        const filteredData = projects.filter((project) => project.type === type)
        setFilteredProjects(filteredData)
    }
    useEffect(() => {
        setFilteredProjects(projects)
        setShow(true)
        setSelected('all')
    }, [])

    return (
        <div id="projects" className="relative h-full w-full py-0">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-t from-transparent to-white/30 dark:to-black/30 -z-10" />
            <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto lg:p-6 h-full ">
                <h1 className="font-bold text-3xl lg:text-4xl mt-24">
                    Projects
                </h1>
                <h3 className="text-gray-500 dark:text-gray-300 mt-1 text-[10px]">
                    Some projects are listed below.
                </h3>
                <div className="w-full flex gap-2 mt-4">
                    {buttons.map((e) => (
                        <button
                            key={e.id}
                            type="button"
                            onClick={() => {
                                filterHandler(e.value)
                                setSelected(e.value)
                            }}
                            className={`text-gray-600 dark:text-gray-50 font-medium text-[10px] decoration-clone tracking-widest underline underline-offset-2 ${
                                selected === e.value && 'decoration-emerald-400'
                            }`}
                        >
                            {e.value}
                        </button>
                    ))}
                </div>
                <AnimatePresence layoutId>
                    {show && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="w-full h-full flex overflow-x-scroll mt-4"
                        >
                            {
                                // Map projects
                                filteredProjects.map((project) => (
                                    <Card project={project} />
                                ))
                            }
                        </motion.div>
                    )}
                </AnimatePresence>
                <div className="w-full flex justify-center items-center mt-12 relative">
                    <motion.a
                        href="https://github.com/asmindev"
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-800 bg-emerald-400 px-3 py-1 hover:shadow-2xl hover:shadow-emerald-400/30 transition duration-300 rounded-sm"
                    >
                        View More
                    </motion.a>
                </div>
            </div>
        </div>
    )
}