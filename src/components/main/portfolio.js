import React, { Component } from 'react';

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        if(this.props.data){
            var education = this.props.data.education.map(function(education){
                return <div key={education.school}>
                            <h3>{education.school}</h3>
                            <p className="info">
                                <em>{education.degree}</em><br/>
                                <span className="date">{education.graduated}</span><br/>
                                <span className="date">GPA: {education.GPA} / {education.GPA_scale}</span>
                            </p>
                            <p>{education.description}</p>
                        </div>
            })
            var work = this.props.data.work.map(function(work){
                return <div key={work.company} className='experience-section'>
                            <h3>{work.company}</h3>
                            <p className="info"><em style={{color: 'lightslategrey'}}>{work.title}</em><br/><span className="date">{work.years}</span></p>
                            <p className='description'>{work.description}</p>
                        </div>
            })
            var skills = this.props.data.skills.map(function(skills){
                var btntype = skills.level <= 30 ? 'btn-outline-info ' : skills.level <= 60 ? 'btn-outline-danger ' : 'btn-outline-success ';
                var className = 'btn '+ btntype +skills.name.toLowerCase();
                return <div key={skills.name} className={className} style={{margin: '0 10px 10px 0'}}><strong>{skills.name}</strong></div>
            })
        }

        return (  
            <section className='portfolio' id='portfolio'>
                <div className='resume-section'>
                    <h2 className='resume-title' style={{color: '#6699ff'}}>Education:</h2>

                    <div>{education}</div>
                </div>

                <div className='resume-section'>
                    <h2 className='resume-title' style={{color: '#ff9966'}}><span>Experience:</span></h2>

                    <div>{work}</div>
                </div>

                <div className='resume-section'>
                    <h2 className='resume-title' style={{color: '#00ff99'}}>Skills:</h2>

                    <div>{skills}</div>
                </div>
            </section>
        );
    }
}
 
export default Portfolio;