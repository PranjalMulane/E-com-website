import React from 'react'

const Base = ({
    title = "my title",
    description = "my description",
    className = "bg-dark text-white p-4",
    children 
}) => {
    return (
        <div>
            <div className="container-fluid">
                <div className="jumbortron bg-dark text-white text-center">
                    <h2 className="display-4">{title}</h2>
                    <p className="lead">{description}</p>

                </div>
                <div className={className}>{children}</div>
            </div>
            <footer className="footer bg-dark mt-auto py-3">
                <div className="container-fluid bg-primary text-white text-center py-3">
                    <h4>If you have any doubt</h4>
                    <button className="btn btn-dark btn-lg">Contact us</button>
                    <div className="container">
                        <span className="text-dark">bye there</span>

                    </div>

                </div>
            </footer>
        </div>
    );
}

export default Base;
