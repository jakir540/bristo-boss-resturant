
const SectionTitle = ({subHeading,heading}) => {
    return (
        <div className="my-5 md:w-1/3 mx-auto">
            <p  className="italic text-orange-400 my-2">--- {subHeading} ---</p>
            <h3 className="text-3xl border-y-4 py-2">{heading}</h3>
        </div>
    );
};

export default SectionTitle;