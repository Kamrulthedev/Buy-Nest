

const Photo = () => {
    return (
        <div className='relative'>
        <img
            src="https://i.ibb.co.com/Xbtzq7D/image.png"
            alt="Cover Photo"
            className="w-full h-48 object-cover rounded-lg"
        />
        <div className='absolute bottom-0 left-0 flex items-center ml-4 mb-4'>
            <img
                src="https://i.ibb.co.com/44vhj8G/image.png"
                alt="Profile Avatar"
                className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
            />
        </div>
    </div>
    );
};

export default Photo;