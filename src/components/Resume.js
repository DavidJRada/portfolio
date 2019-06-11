import React from 'react'
import ResumePDF from './images/resume.pdf'

class Resume extends React.Component {
    render() {
        return (
            <div className='resume'>
                <object
                    data={ResumePDF}
                    type='applications/pdf'
                    width='100%'
                    height='100vh'>
                    <iframe
                        src={ResumePDF}
                        width='100%'
                        style={{ height: '100vh' }}
                    >
                    </iframe>
                </object>

            </div>
        );
    }
}

export default Resume;
