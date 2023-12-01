
import React from 'react';

const Numbers = () => {
    return (
        <>
            {/* Features */}
            <div className="max-w-[70rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                {/* Grid */}
                <div className="sm:w-1/2 xl:w-1/3 mx-auto text-center mb-6 md:mb-12 mt-3">
                    <h2 className="text-xl font-semibold md:text-2xl md:leading-tight text-gray-800 dark:text-gray-200">
                        Our Student Branch in numbers
                    </h2>
                </div>
                <div className="grid gap-6 grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-8">
                    {/* Stats */}
                    <div>
                        <h4 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200">
                            Members
                        </h4>
                        <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-600">
                            530+
                        </p>
                        <p className="mt-1 text-gray-500">as of November 2023</p>
                    </div>
                    {/* End Stats */}
                    {/* Stats */}
                    <div>
                        <h4 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200">
                            Technical Events
                        </h4>
                        <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-600">
                            100+
                        </p>
                        <p className="mt-1 text-gray-500">just this year</p>
                    </div>
                    {/* End Stats */}
                    {/* Stats */}
                    <div>
                        <h4 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200">
                            Non-Technical Events
                        </h4>
                        <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-600">
                            10+
                        </p>
                        <p className="mt-1 text-gray-500">this year alone</p>
                    </div>
                    {/* End Stats */}
                </div>
                {/* End Grid */}
            </div>
            {/* End Features */}
        </>

    );
}

export default Numbers;