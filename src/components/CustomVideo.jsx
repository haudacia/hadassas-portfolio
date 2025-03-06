function CustomVideo({ path }) {
    return (
        <div className="video-container">
            <video width="100%" controls>
                <source src={path} type="video/mp4" />
                your browser does not support the video tag
            </video>
        </div>
    )
}

export default CustomVideo