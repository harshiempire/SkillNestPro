const Blog = ({id,title,desc,thumbnail}) => {
    return( <div className="relative" data-id={id}>
        <div className="h-[250px] border border-solid border-gray-10 rounded-4xl overflow-hidden">
            <img src={thumbnail} alt={title} />
        </div>
        <div className="flex flex-col gap-y-4 relative w-[95%] h-[115px] p-4 mt-[calc(-115px/2)] mx-auto bg-white border border-solid border-gray-10 rounded-4xl">
            <p className="text-xl leading-none text-gray-10 line-clamp-2">{title}</p>
            <p className="text-base text-ellipsis whitespace-nowrap text-gray-40 overflow-hidden">{desc}</p>
        </div>
    </div>);
};

export default Blog;
