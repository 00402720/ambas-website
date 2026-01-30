export default function PersonCard({name, src, rol}: {name: string, src: string, rol: string}){
    return(
        <article className="w-40 h-60
            lg:w-60 lg:h-80 bg-[#054851] rounded-xl shadow-lg flex flex-col justify-center items-center p-2 lg:p-4
        ">
            <div className="rounded-[10%] overflow-hidden mb-4">
                <img src={src} alt={name} className="w-full h-fill" />
            </div>
            <p className="text-sm lg text:md"><b>{name}</b></p>
            <p>{rol}</p>
        </article>
    )
}