import './Skills.css'

const Skills = () => {

    const skill_items = [
        {icon_name: 'adobexd.png', skill_name: 'AdobeXD', skill_desc: 'UI/UX design', box_shadow_color: '2px_2px_4px_4px_#669ad5,-2px_-2px_4px_4px_#669ad5'},
        {icon_name: 'angular.png', skill_name: 'Angular', skill_desc: 'UI/UX design', box_shadow_color: '2px_2px_4px_4px_#ba002b,-2px_-2px_4px_4px_#ba002b'},
        {icon_name: 'react.png', skill_name: 'ReactJS', skill_desc: 'UI/UX design', box_shadow_color: '2px_2px_4px_4px_#d9ebef,-2px_-2px_4px_4px_#d9ebef'},
        {icon_name: 'javascript.png', skill_name: 'JavaScript', skill_desc: 'UI/UX design', box_shadow_color: '2px_2px_2px_4px_RGB(242, 213, 23),-2px_-2px_2px_4px_RGB(242, 213, 23)'},
        {icon_name: 'typescript.png', skill_name: 'TypeScript', skill_desc: 'UI/UX design', box_shadow_color: '2px_2px_2px_4px_#553b7e,-2px_-2px_2px_4px_#553b7e'},
        {icon_name: 'jquery.png', skill_name: 'JQuery', skill_desc: 'UI/UX design', box_shadow_color: '2px_2px_2px_4px_#553b7e,-2px_-2px_2px_4px_#553b7e'},
        {icon_name: 'css.png', skill_name: 'CSS', skill_desc: 'UI/UX design', box_shadow_color: '2px_2px_4px_4px_#669ad5,-2px_-2px_4px_4px_#669ad5'},
        {icon_name: 'bootstrap.png', skill_name: 'Bootstrap', skill_desc: 'UI/UX design', box_shadow_color: '2px_2px_2px_4px_#553b7e,-2px_-2px_2px_4px_#553b7e'},
        {icon_name: 'tailwind.png', skill_name: 'Tailwind', skill_desc: 'UI/UX design', box_shadow_color: '2px_2px_2px_4px_#553b7e,-2px_-2px_2px_4px_#553b7e'},
        {icon_name: 'html.png', skill_name: 'HTML', skill_desc: 'UI/UX design', box_shadow_color: '2px_2px_2px_4px_#553b7e,-2px_-2px_2px_4px_#553b7e'},
        {icon_name: 'java.png', skill_name: 'Java', skill_desc: 'UI/UX design', box_shadow_color: '2px_2px_2px_4px_#553b7e,-2px_-2px_2px_4px_#553b7e'},
        {icon_name: 'python.png', skill_name: 'Python', skill_desc: 'UI/UX design', box_shadow_color: '2px_2px_2px_4px_#553b7e,-2px_-2px_2px_4px_#553b7e'},
        {icon_name: 'flask.png', skill_name: 'Flask', skill_desc: 'UI/UX design', box_shadow_color: '2px_2px_4px_4px_#d9ebef,-2px_-2px_4px_4px_#d9ebef'},
        {icon_name: 'springboot.png', skill_name: 'Spring Boot', skill_desc: 'UI/UX design', box_shadow_color: '2px_2px_2px_4px_#553b7e,-2px_-2px_2px_4px_#553b7e'},
        {icon_name: 'springsecurity.png', skill_name: 'Spring Security', skill_desc: 'UI/UX design', box_shadow_color: '2px_2px_2px_4px_#553b7e,-2px_-2px_2px_4px_#553b7e'}
    ]

    return (
        <div className="px-32 py-8">
<div className='pl-12'>
<h1 className='text-zinc-400 text-[40px] font-bold'>My Tools</h1>
<p className='text-zinc-400'>Essential tools I use to build exceptional high-performing websites and applications.</p>
</div>
            <div className="px-8 py-4 grid gap-4 grid-cols-[repeat(auto-fill,_minmax(160px,_1fr))] place-items-center">
                {
                    skill_items.sort((a, b) => a.skill_name.localeCompare(b.skill_name)).map((item) => {
                        return <div className={`skill-item hover:scale-105 transition-all duration-400 select-none hover:shadow-[2px_2px_4px_4px_#669ad5,-2px_-2px_4px_4px_#669ad5]`} key={item.skill_name}>
                       
                        <img src={item.icon_name} className='size-10' alt='adobexd' />
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