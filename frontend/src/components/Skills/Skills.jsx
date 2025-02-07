import './Skills.css'

const Skills = () => {

    const skill_items = [
        {icon_name: 'settings', skill_name: 'AdobeXD', skill_desc: 'UI/UX design'},
        {icon_name: 'settings', skill_name: 'ReactJS', skill_desc: 'UI/UX design'},
        {icon_name: 'settings', skill_name: 'Angular', skill_desc: 'UI/UX design'},
        {icon_name: 'settings', skill_name: 'JavaScript', skill_desc: 'UI/UX design'},
        {icon_name: 'settings', skill_name: 'TypeScript', skill_desc: 'UI/UX design'},
        {icon_name: 'settings', skill_name: 'JQuery', skill_desc: 'UI/UX design'},
        {icon_name: 'settings', skill_name: 'CSS', skill_desc: 'UI/UX design'},
        {icon_name: 'settings', skill_name: 'Bootstrap', skill_desc: 'UI/UX design'},
        {icon_name: 'settings', skill_name: 'Tailwind', skill_desc: 'UI/UX design'},
        {icon_name: 'settings', skill_name: 'HTML', skill_desc: 'UI/UX design'},
        {icon_name: 'settings', skill_name: 'Java', skill_desc: 'UI/UX design'},
        {icon_name: 'settings', skill_name: 'Python', skill_desc: 'UI/UX design'},
        {icon_name: 'settings', skill_name: 'Flask', skill_desc: 'UI/UX design'},
        {icon_name: 'settings', skill_name: 'Spring Boot', skill_desc: 'UI/UX design'},
        {icon_name: 'settings', skill_name: 'Spring Security', skill_desc: 'UI/UX design'}
    ]

    return (
        <div className="px-32 py-8">
            <div className="px-8 py-4 grid gap-4 grid-cols-[repeat(auto-fill,_minmax(160px,_1fr))] place-items-center">
                {
                    skill_items.map((item) => {
                        return <div className='skill-item hover:scale-105 transition-all duration-400 select-none' key={item.skill_name}>
                        <span className="material-symbols-rounded">{item.icon_name}</span>
                        <div className='flex flex-col'>
                            <span className='text-md'>{item.skill_name}</span>
                            <span className='text-sm text-zinc-400/50'>{item.skill_desc}</span>
                        </div>
                    </div>
                    })
                }
            </div>
        </div>
    )
}

export default Skills