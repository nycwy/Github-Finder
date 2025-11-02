function About() {
    return (
        <div>
            <h1 className="text-6xl mb-4">Github Finder</h1>
            <p className="mb-4 text-2xl font-light">
                A React app to search GitHub profiles and see profile details. This
                project is a part of React Practice Project.
            </p>
            <p className="text-lg text-gray-400">
                Version <span className="text-white">1.0.0</span>
            </p>
            <p className="text-lg text-gray-400">
                Last update <span className="text-white">{ new Date().getUTCFullYear()}</span>
            </p>
        </div>
    );
}

export default About;
