import React from 'react';


const Consult = () => {
    return (
        <div className="container mx-auto pb-8">
            <div className="flex flex-col-reverse sm:flex-row items-center justify-center">
                {/* Image Div */}
                <div className="w-full sm:w-1/2 p-4">
                    <img
                        src="https://images.unsplash.com/photo-1503551723145-6c040742065b-v2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                        alt="Consultation"
                        className="w-full rounded-lg shadow-md"
                    />
                </div>


                {/* Message Div */}
                <div className="w-full sm:w-1/2 px-4 pb-4 rounded-lg text-gray-800">
                    <h2 className="text-2xl font-bold mb-4">Consult with us</h2>
                    <p className="text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
                        minima dolorem eveniet? Veniam dolorem illum quam quas in esse,
                        doloribus consequatur obcaecati dolores praesentium ullam, maiores
                        impedit consectetur cum similique.lorem s in esse, doloribus
                        consequatur obcaecati dolores praesentium ullam, maiores impedit
                        consectetur cum similique.lorem
                    </p>
                    <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded mt-4">
                        Book Appointment
                    </button>
                </div>
            </div>
        </div>
    );
};


export default Consult;
